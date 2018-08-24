import React from 'react';
import './post-food.css';
import { connect } from 'react-redux';
import {postNewFood} from '../actions/foods';

export class PostFood extends React.Component{
  render(){
    return(
      <div id='PostFood' className='tabcontent'>
      
        <div className='postfood'>
        
          <h2>Contribute a New Food to the Database for Public Use!</h2>
        
          <p>To contribute a new listing into our open-source 
          database, please sign up, if you haven't already.</p>
        
          <p className='italic'>Please note that duplicate items 
          can not be created.</p>

          <form onSubmit={e => {
            e.preventDefault();
            console.log(e.target.elements.ingredients.value,
              e.target.ingredients.value.split(' '),  '---');
            const el = e.target.elements;
            this.props.dispatch(postNewFood(
              el.foodName.value, 
              el.ingredients.value.split(' ')));}}>
          
            <div className='input'>
              <label>Name</label><br />
              <input type='text' 
                className='name' 
                name='foodName'
                aria-labelledby="Add Food Name"></input>
          
            </div>
          
            <div className='input'>
              <label>Ingredients</label> <br/>
              <textarea 
                type='text' 
                name='ingredients' 
                className='postText' 
                aria-labelledby="Add Ingredients"></textarea>
              <br />
              <label className='post-footnote'>Separate ingredients with a space.</label>
         
            </div>
         
            <input 
              type="submit" 
              id="postButton" 
              className="postButton" 
              name="submit" 
              value="Create"/>

          </form>
     
        </div>
    
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.jwtR.currentUser
});

export default connect(mapStateToProps)(PostFood);