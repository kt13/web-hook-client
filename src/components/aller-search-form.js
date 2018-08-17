import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './search-results';
import './aller-search.css';

import {toggleFoodsList} from '../actions/foods';
import {fetchFoods} from '../actions/foods';

export class AllergyForm extends React.Component {
 
  // onSubmit (event){
  //   event.preventDefault();

  //   if(this.props.onSubmit){
  //     const currentValue= this.input.value;
  //     console.log(currentValue, '======');
  //     this.props.handleSubmit(currentValue);
  //   }
  //   this.input.value = '';
  //   this.input.focus();

  // console.log('qrawefwedfasdfs', this.props);
  render(){
    // console.log('qrawefwedfasdfs', this.props.foods);
    return (
      <div id="AllergySearch" className="tabcontent" id="defaultOpen">
        <div className='foodSearch'>
          <h2>Enter in a Food</h2>
          <img className="allergyImg" src="https://foodsafetytrainingcertification.com/wp-content/uploads/2017/05/foodallergies.png" 
            alt="Various Food Categories of Food Allergies"/>
          <p>This database is open-source and is maintained by the public.</p>

          <p>Please note that this website is not a substitute for medical advice. If you are experiencing 
            symptoms of an allergic reaction such as hives, vomiting, wheezing, 
            swelling of the tongue, or trouble breathing due to possible anaphylaxis, 
            please seek emergency care immediately.</p>
          <span>For more information on food allergies, <a href="https://acaai.org/allergies/types/food-allergy">go here</a>.</span>

          <div className='allergyForm'>
            <form onSubmit={e =>  
            { e.preventDefault();
            // console.log(this.input.value, '============');
              this.props.dispatch(fetchFoods(e.target.elements.foodSearch.value)); }}>
              <input type="text" name="foodSearch" id="foodSearch"
                className="allerText" autoComplete="off"
                placeholder="E.g. panini" required 
              />
              <input type="submit" id="allergyButton" className="allergyButton" 
                name="submit" value="Search" onClick={() => this.props.dispatch(toggleFoodsList(false))} />
            </form>
          </div>

          <SearchResults/>
          
        </div>
      </div>
    );
  }
}

export default connect()(AllergyForm);



