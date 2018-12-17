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

  uxText(newH){
    if(newH){
      return(
        <div>
          <p>{this.props.newHook} is now being tracked on our database.</p>
        </div>
      );
      // console.log(newH);
    }
  }

  render(){
    return(
      <div id='PostFood' className='tabcontent'>
      
        <div className='postfood'>
        
          <h2>Add a web hook</h2>
            <form onSubmit={e => {
            e.preventDefault();
            // console.log(e.target.elements.ingredients.value,
            //   e.target.ingredients.value.split(' '),  '---');
            const el = e.target.elements;
            this.props.dispatch(postNewHook(
              el.website.value));}}>

            <div className='input'>
              <label>Website Name</label><br />
              <input type='text' 
                className='name' 
                name='website'
                aria-labelledby='Add a Website to Track'></input>

            </div>

            <div className='input'>
              <label>First Name</label><br />
              <input type='text' 
                className='name' 
                name='firname'
                aria-labelledby='Add a Website to Track'></input>

            </div>

            <div className='input'>
              <label>Last Name</label><br />
              <input type='text' 
                className='name' 
                name='lasname'
                aria-labelledby='Add a Website to Track'></input>

            </div>

            <div className='input'>
              <label>Key</label><br />
              <input type='text' 
                className='name' 
                name='key'
                aria-labelledby='Add a Website to Track'></input>

            </div>

            <input 
              type='submit' 
              id='postButton' 
              className='postButton' 
              name='submit' 
              value='Create'/>

          </form>
              
              {this.uxText(this.props.newHook)}

        </div>
    
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  newHook: state.websitesR.newPost
});

export default withRouter(connect(mapStateToProps)(PostFood));