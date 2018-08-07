import React from 'react';
import {toggleFoodsList} from '../actions/foods';
import {connect} from 'react-redux';
// import './guess-form.css';

class AllergyForm extends React.Component {

  // onSubmit (event){
  //   event.preventDefault();

  //   if(this.props.onSubmit){
  //     const currentValue= this.input.value;
  //     console.log(currentValue, '======');
  //     this.props.handleSubmit(currentValue);
  //   }
  //   this.input.value = '';
  //   this.input.focus();
 

  render(){
    return (
      <div id='AllergySearch' className='tabcontent'>
        <form onSubmit={e =>  
        { e.preventDefault(), console.log(this.input.value, '============'), this.props.handleSubmit(this.input.value); }}>
          <input type="text" name="userSearch" id="userSearch"
            className="text" autoComplete="off"
            placeholder="Enter the Food" required 
            ref={ele => (this.input = ele)} required
          />
          <input type="submit" id="searchButton" className="button" 
            name="submit" value="Search" onClick={() => this.props.dispatch(toggleFoodsList(false))} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  listHide: state.searchR.listHide
});

export default connect(mapStateToProps)(AllergyForm);



