import React from 'react';
import './post-food.css';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PostFoodForm from './post-food-form';
// import { loadAuthToken } from '../local-storage';
// import { setReduxTokenFrmLocalStore } from '../actions/jwtauth';
// import jwtDecode from 'jwt-decode';

export class PostFood extends React.Component{

  credentials(){
    // console.log(this.props.currentUser === null);
    if(this.props.currentUser === null){
      setTimeout(() => {this.props.history.push('/login');}, 3000);
      return(
        <div>
          <p style={{color: 'rgb(172, 4, 4)'}}>You need to be logged in to 
          contribute a new listing to the database.
          Redirecting you to login in 3 seconds...
          </p>
        </div>);
    }
    else{
      return (<div></div>);
    }
  }

  render(){
    return(
      <div id='PostFood' className='tabcontent'>
      
        <div className='postfood'>
        
          <h2>Contribute a New Food to the Database for Public Use!</h2>
        
          <p className='italic'>Please note that duplicate items 
          can not be created.</p>

          {this.credentials()}
          <PostFoodForm />
      
        </div>
    
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.jwtR.currentUser
});

export default withRouter(connect(mapStateToProps)(PostFood));