import React from 'react';
import '../css/register-login.css';
import {loginUser} from '../actions/jwtauth';
import {connect} from 'react-redux';
import {withRouter, Link, Redirect} from 'react-router-dom';

export class Login extends React.Component{
  
  notRegistererd(){
    return(
      <div>
        <p>Not Registered? <Link to="/register">Click here.</Link></p>
      </div>
    );
  }

  errorHandle(){
    if(this.props.error !== null){
      return(
        <div>
          <p className='red'>{this.props.error}</p>
        </div>);
    }
    else{
      return (<div></div>);
    }
  }

  render(){
    if(this.props.currentUser === null){
      return(
        <div className='login tabcontent'>
          <h2>Log In</h2>
          <form onSubmit={e =>  
          { e.preventDefault(); 
            const creds = e.target.elements;
            // console.log(creds.username.value, creds.password.value, '============');
            this.props.dispatch(loginUser(creds.username.value, creds.password.value, this.props.history)); }}>

            <div className='input'>
              <label>Username</label>
              <input 
                type="text" 
                name="username" 
                id="username"
                className="userLC" 
                autoComplete="off"
                aria-labelledby="Username"
                required 
              />
            </div>

            <div className='input'>
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                id="password"
                className="passLC" 
                autoComplete="off"
                aria-labelledby="Password"
                required 
              />
            </div>
            {this.notRegistererd()}
            {this.errorHandle()}
            <input 
              type="submit" 
              id="loginButton" 
              className="loginButton" 
              name="submit" 
              value="Login"/>
          </form>
        </div>
      );
    } else {
      return (<Redirect to='/add' />);
    }
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.jwtR.currentUser,
  error: state.jwtR.loginError
});

export default withRouter(connect(mapStateToProps)(Login));