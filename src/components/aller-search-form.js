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

          <p>This database is open-source and is maintained 
            by the public by users like you.</p>

          <p className='search-notes'>Please note that this website is not a substitute 
            for medical advice. If you are experiencing symptoms of
             an allergic reaction such as hives, vomiting, wheezing, 
            swelling of the tongue, or trouble breathing due to possible 
            anaphylaxis, please seek emergency care immediately.</p>

          {this.results()}

          <p className='search-notes'>For more information on food allergies, 
          click here: </p>
          <p className='search-notes2'>
            <a href="https://acaai.org/allergies/types/food-allergy"
              target='_blank'
              rel='noopener noreferrer'> American College of 
            Allergy, Asthma, and Immunology (ACAAI)</a>.</p>
          <p className='search-notes2'>
            <a 
              href="https://www.foodallergy.org/life-with-food-allergies/food-allergy-101/facts-and-statistics"
              target='_blank'
              rel='noopener noreferrer'>
              Food Allergy Research and Education (FARE)</a> </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  zero: state.foodsR.zero
});

export default connect(mapStateToProps)(AllergyForm);



