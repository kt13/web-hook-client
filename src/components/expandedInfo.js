import React from 'react';
import './expandedInfo.css';
import {fetchAllergens} from '../actions/foods';
import { connect } from 'react-redux';

export class ExpandedInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expanded: false,
    };
  }

  expandFood(){
    this.setState({expanded: !this.state.expanded});
    // setTimeout(() => {
    //   console.log('after', this.state.expanded);
    // }, 500);
  }

  // allergenInfo1(){
  //   console.log(this.props.ingredients);
  //   const allergy = this.state.allergenList1;
  //   console.log(Object.keys(allergy));

  // for(const key in this.state.allergenList1){
  //   const val = this.state.allergenList1[key];
  //   return Object.keys(this.state.allergenList, this.props.ingredients.map(item => item === val));
  // console.log(Object.keys(allergy).forEach(function(key){
  //   this.props.ingredients.match(allergy[key]);
  // })
  //   .map(key => allergy[key] === 
  //   this.props.ingredients.includes(function(){
  //     for(const key in allergy){
  //       return allergy[key];
  //     }
  //   })
  //   ));
    
  // }

  render(){
    const expandedDisplay = this.state.expanded ? 'expanded' : 'hidden'; 
    return(
      <div id='SearchResult'>

        <li
          onClick={() => {
            this.expandFood();
            this.props.dispatch(fetchAllergens(this.props.id));}}>
          <h2>{this.props.name}</h2> <span className={`${!(expandedDisplay)}`}>
            {this.props.ingredients.length <= 4 ? this.props.ingredients.join(', ') : 
              this.props.ingredients.slice(0,4).join(', ').concat('...')}</span>
          <div id='ExpandedInformation' className={`${expandedDisplay}`}>
            {(this.props.ingredients.join(', ')/*, item.etc */)}
            <p><b>Allergy Warning</b>: Contains {this.props.allergens.map(item => item.name).join(', ')}</p>
          </div>
        </li>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  allergens: state.foodsR.allergens
});

export default connect(mapStateToProps)(ExpandedInfo);