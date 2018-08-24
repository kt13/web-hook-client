import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './search-results';
import './aller-search.css';

import {toggleFoodsList, fetchFoods, newSearchTerm} from '../actions/foods';

export class AllergyForm extends React.Component {

  // console.log('qrawefwedfasdfs', this.props);
  render(){
    // console.log('qrawefwedfasdfs', this.props.foods);
    return (
      <div id="AllergySearch" className="tabcontent">
        <div className='foodSearch'>

          <h2>Enter in a Food</h2>
          <img 
            className="allergyImg" 
            src="https://foodsafetytrainingcertification.com/wp-content/uploads/2017/05/foodallergies.png" 
            alt="Various Food Categories of Food Allergies"/>

          <p>This database is open-source and is maintained 
            by the public by users like you.</p>

          <div className='allergyForm'>
            <form onSubmit={e =>  
            { e.preventDefault();
            // console.log(this.input.value, '============');
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
                value="Search" onClick={() => 
                  this.props.dispatch(toggleFoodsList(false))} />
            </form>
          </div>

          <p className='search-notes'>Please note that this website is not a substitute 
            for medical advice. If you are experiencing symptoms of
             an allergic reaction such as hives, vomiting, wheezing, 
            swelling of the tongue, or trouble breathing due to possible 
            anaphylaxis, please seek emergency care immediately.</p>
          <p className='search-notes'>For more information on food allergies, 
          click here: </p>
          <p className='search-notes2'>
            <a href=
              "https://acaai.org/allergies/types/food-allergy"> American College of 
            Allergy, Asthma, and Immunology (ACAAI)</a>.</p>
          <p className='search-notes2'>
            <a 
              href="https://www.foodallergy.org/life-with-food-allergies/food-allergy-101/facts-and-statistics">
              Food Allergy Research and Education (FARE)</a> </p>

          <SearchResults/>
          
        </div>
      </div>
    );
  }
}

export default connect()(AllergyForm);



