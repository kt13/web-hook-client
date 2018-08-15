import React from 'react';
import './expandedInfo.css';

export default class expandedInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expanded: false
    };
  
  }
  
  expandFood(){
    this.setState({expanded: !this.state.expanded});
    // setTimeout(() => {
    //   console.log('after', this.state.expanded);
    // }, 500);
  }

  render(){
    const expandedTern = this.state.expanded ? 'expanded' : 'hidden'; 
    return(
      <div id='SearchResult'>
        <li
          onClick={() => 
            this.expandFood()}>
          <h2>{this.props.name}</h2> <span className={`${!(this.state.expanded)}`}>{
            this.props.ingredients.length <= 5 ? this.props.ingredients.join(', ') : 
              this.props.ingredients.slice(0,5).join(', ').concat('...')}</span>
          <div className={`${expandedTern}`}>
            {(this.props.name, this.props.ingredients/*, item.etc */)}
          </div>
        </li>
      </div>
    );
  }
}
