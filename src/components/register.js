import React from 'react';
import './register-login.css';
import { createUser } from '../actions/jwtauth';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

export class Register extends React.Component {

  onSubmit(val){
    this.props
      .dispatch(createUser(
        val.email.value, 
        val.newUser.value, 
        val.newPass.value, 
        this.props.history));
  }

  onSuccess(){
    if(this.props.registered){
      return(
        <div>
          <p>Successful registration! Redirecting to Login in 6 seconds...</p>
        </div>
      );
    }
    else{
      return(<div></div>);
    }
  }
  
  errorHandle(){
    if(this.props.error !== null){
      return(
        <div>
          <p className='red'>{this.props.error}</p>
        </div>
      );
    }
    else{
      return (<div></div>);
    }
  }
  
  render(){
    return(
      <div className='register'>

        <form onSubmit={e =>
        { e.preventDefault();
          const newCred = e.target.elements;
          // console.log(newCred, '=====new======');
          this.onSubmit(newCred);}}>

          <div className='input'>
            <label>Email</label>
            <input 
              type="text" 
              name="email" id="email"
              className="emailRC" 
              autoComplete="off" 
              aria-labelledby="Add E-mail"
            />
            <label style={{fontStyle: 'italic'}}>optional</label>
          </div>

          <div className='input'>
            <label>Username</label>
            <input 
              type="text" 
              name="newUser" 
              id="newUser"
              className="userRC" 
              autoComplete="off" 
              aria-labelledby="Add Username"
              required 
            />
            <label style={{fontStyle: 'italic'}}>required</label>
          </div>

          <div className='input'>
            <label>Password</label>
            <input 
              type="password" 
              name="newPass" 
              id="newPass"
              className="passRC" 
              autoComplete="off" 
              aria-labelledby="Add Password"
              required 
              /*  ref={ele => (this.input = ele)} required */
            />
            <label style={{fontStyle: 'italic'}}>required</label>
          </div>

          {this.errorHandle()}
          {this.onSuccess()}

          <input 
            type="submit" 
            id="registerButton" 
            className="registerButton" 
            name="submit" 
            value="Register" />

        </form>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  registered: state.jwtR.registered,
  error: state.jwtR.registerError
});

export default withRouter(connect(mapStateToProps)(Register));