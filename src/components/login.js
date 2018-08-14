import React from 'react';
import './register-login.css';
import {loginUser} from '../actions/jwtauth';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
  render(){
    if(this.props.currentUser === null){
      return(
        <div>
          <form onSubmit={e =>  
          { e.preventDefault(); 
            const creds = e.target.elements;
            console.log(creds.username.value, creds.password.value, '============');
            this.props.dispatch(loginUser(creds.username.value, creds.password.value)); }}>
            <div className='input'>
              <label>Username</label>
              <input type="text" name="username" id="username"
                className="text" autoComplete="off"
                required 
                /*  ref={ele => (this.input = ele)} required */
              />
            </div>
            <div className='input'>
              <label>Password</label>
              <input type="password" name="password" id="password"
                className="text" autoComplete="off"
                required 
                /*  ref={ele => (this.input = ele)} required */
              />
            </div>
            <input type="submit" id="loginButton" className="button4" 
              name="submit" value="Login" /* onClick={() => this.props.dispatch(toggleFoodsList(false))} */ />
          </form>
        </div>
      );
    }
    // else if(this.props.)
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.jwtR.currentUser
});

export default connect(mapStateToProps)(Login);