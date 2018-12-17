import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './search-results';
import '../css/aller-search.css';

import {toggleFoodsList, fetchFoods,/* newSearchTerm */} from '../actions/foods';

export class AllergyForm extends React.Component {

  results(){
    if(this.props.zero){
      return(
        <div>
          <h2 style={{color: 'red'}}>No Results Found</h2>
        </div>);
    } else {
      return (
        <SearchResults/>
      );
    }
  }

  render(){
    return (
      <div id="AllergySearch" className="tabcontent">
        <div className='foodSearch'>

          <h2>Enter in a Food</h2>
          <div className='allergyForm'>
            <form onSubmit={e =>  
            { e.preventDefault();
            
              this.props.dispatch(fetchFoods(e.target.elements.foodSearch.value));
              /*  this.props.dispatch(newSearchTerm(e.target.elements.foodSearch.value)); */ }}>
              <input 
                type="text" 
                name="foodSearch" 
                id="foodSearch"
                className="foodTerm" 
                autoComplete="off"
                aria-labelledby="Food Search"
                placeholder="E.g. panini" required 
              />
              <input 
                type="submit" 
                id="allergyButton" 
                className="allergyButton" 
                name="submit" 
                value="Search" 
                onClick={() => this.props.dispatch(toggleFoodsList(false))} />
            </form>
          </div>
          <img 
            className="allergyImg" 
            src="https://foodsafetytrainingcertification.com/wp-content/uploads/2017/05/foodallergies.png" 
            alt="Various Food Categories of Food Allergies"/>


          {this.results()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  zero: state.foodsR.zero
});

export default connect(mapStateToProps)(AllergyForm);



