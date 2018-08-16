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
            <p><b>Allergy Warning</b>: <b>Contains {this.props.allergens.map(item => item.category).join(', ')}</b></p>
            
            <div className='comments'>
              <form onSubmit={e =>  
              { e.preventDefault();
                // console.log(this.input.value, '============');
                /* this.props.dispatch(fetchFoods(this.input.value)); */ }}>
                <textarea type="text" name="foodSearch" id="foodSearch"
                  className="commentText" autoComplete="off"
                  placeholder="E.g. panini" required 
                  ref={comm => (this.input = comm)} required
                />
                <input type="submit" id="addCommButton" className="commentButton" 
                  name="submit" value="Add Comment"/>
              </form>
            </div>
          
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