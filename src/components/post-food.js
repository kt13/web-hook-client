import React from 'react';
import './post-food.css';

export default function PostFood (props){
  return(
    <div id='PostFood' className='tabcontent'>
      <form onSubmit={e => {
        e.preventDefault();
        // console.log(e.target.elements.foodName.value, '---');
        const el = e.target.elements;
        props.handleSubmit(el.foodName.value, el.ingredients.value);}}>
        <div className='input'>
          <label>Name of the food item</label>
          <input type='text' name='foodName'></input>
        </div>
        <div className='input'>
          <label>Ingredients</label>
          <textarea type='text' name='ingredients'></textarea>
        </div>
        <input type="submit" id="postButton" className="button" 
          name="submit" value="Search"/>
      </form>
    </div>
  );
}