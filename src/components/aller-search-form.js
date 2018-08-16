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
      <div id='AllergySearch' className='tabcontent' id='defaultOpen'>
        <div className='fsearch'>
          <h2>Enter in a food</h2>

          <form onSubmit={e =>  
          { e.preventDefault();
            // console.log(this.input.value, '============');
            this.props.dispatch(fetchFoods(this.input.value)); }}>
            <input type="text" name="foodSearch" id="foodSearch"
              className="text" autoComplete="off"
              placeholder="E.g. panini" required 
              ref={ele => (this.input = ele)} required
            />
            <input type="submit" id="getButton" className="button2" 
              name="submit" value="Search" onClick={() => this.props.dispatch(toggleFoodsList(false))} />
          </form>

          {/* <SearchResults/> */}

        </div>
      </div>
    );
  }
}

export default connect()(AllergyForm);



