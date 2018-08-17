import React from 'react';
import {connect} from 'react-redux';
import SearchResults from './search-results';
import './aller-search.css';

import {toggleFoodsList} from '../actions/foods';
import {fetchFoods} from '../actions/foods';

//2 errors/bugs: adding a comment displays an error but it still adds it to the db
// 2. map data array is showing different values sometimes. cant access marker.opening_hours.open_now 
// cuz it doesn't exist sometimes
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
          <p>This database is open-source and is maintained by the public.</p>


          <p>Please note that this database is not perfect. If you are experiencing 
            symptoms of an allergic reaction such as hives, vomiting, wheezing, 
            swelling of the tongue, or trouble breathing due to possible anaphylaxis, 
            please seek emergency care immediately.</p>
            
          <div className='allergyForm'>
            <form onSubmit={e =>  
            { e.preventDefault();
            // console.log(this.input.value, '============');
              this.props.dispatch(fetchFoods(this.input.value)); }}>
              <input type="text" name="foodSearch" id="foodSearch"
                className="text" autoComplete="off"
                placeholder="E.g. panini" required 
                ref={ele => (this.input = ele)} required
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



