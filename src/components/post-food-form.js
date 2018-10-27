import React from 'react';
import '../css/post-food.css';
import { connect } from 'react-redux';
import {postNewFood} from '../actions/foods';

export function PostFoodForm (props){
  return(
    <form onSubmit={e => {
      e.preventDefault();
      // console.log(e.target.elements.ingredients.value,
      //   e.target.ingredients.value.split(' '),  '---');
      const el = e.target.elements;
      props.dispatch(postNewFood(
        el.foodName.value, 
        el.ingredients.value.split(' ')));}}>

      <div className='input'>
        <label>Name</label><br />
        <input type='text' 
          className='name' 
          name='foodName'
          aria-labelledby='Add Food Name'></input>

      </div>

      <div className='input'>
        <label>Ingredients</label> <br/>
        <textarea 
          type='text'
          name='ingredients'
          className='postText'
          aria-labelledby='Add Ingredients'
          placeholder='Separate ingredients with a space.'
        ></textarea>

      </div>

      <input 
        type='submit' 
        id='postButton' 
        className='postButton' 
        name='submit' 
        value='Create'/>

    </form>
  );
}

export default connect()(PostFoodForm);