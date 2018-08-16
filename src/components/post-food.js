import React from 'react';
import './post-food.css';
import { connect } from 'react-redux';
import {postNewFood} from '../actions/foods';

export function PostFood (props){
  return(
    <div id='PostFood' className='tabcontent'>
      <div className='postfood'>
        <h2>Contribute a New Food to the Database for Public Use!</h2>
        <p>Please note that duplicate items can not be created.</p>

        <form onSubmit={e => {
          e.preventDefault();
          // console.log(e.target.elements.foodName.value, '---');
          const el = e.target.elements;
          props.dispatch(postNewFood(el.foodName.value, el.ingredients.value));}}>
          <div className='input'>
            <label>Name</label>
            <input type='text' className='name' name='foodName'></input>
          </div>
          <div className='input'>
            <label>Ingredients</label>
            <textarea type='text' name='ingredients'></textarea>
          </div>
          <input type="submit" id="postButton" className="button3" 
            name="submit" value="Create"/>
        </form>
      </div>
    </div>
  );
}

export default connect()(PostFood);