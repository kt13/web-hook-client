import React from 'react';
import '../css/post-food.css';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {postNewHook} from '../actions/hooks';
// import PostHookForm from './post-hook-form';
// import { loadAuthToken } from '../local-storage';
// import { setReduxTokenFrmLocalStore } from '../actions/jwtauth';
// import jwtDecode from 'jwt-decode';

export class PostFood extends React.Component{

  render(){
    return(
      <div id='PostFood' className='tabcontent'>
      
        <div className='postfood'>
        
          <h2>Add a web hook</h2>
        
          <p className='italic'>No duplicate hooks please.</p>
          <form onSubmit={e => {
            e.preventDefault();
            // console.log(e.target.elements.ingredients.value,
            //   e.target.ingredients.value.split(' '),  '---');
            const el = e.target.elements;
            this.props.dispatch(postNewHook(
              el.website.value));}}>

            <div className='input'>
              <label>Name</label><br />
              <input type='text' 
                className='name' 
                name='website'
                aria-labelledby='Add a Website to Track'></input>

            </div>

            <input 
              type='submit' 
              id='postButton' 
              className='postButton' 
              name='submit' 
              value='Create'/>

          </form>
      
        </div>
    
      </div>
    );
  }
}

export default withRouter(connect()(PostFood));