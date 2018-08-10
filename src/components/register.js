import React from 'react';
import './register-login.css';
import { createUser } from '../actions/jwtauth';
import { connect } from 'react-redux';

class Register extends React.Component {
  render(){
    return(
      <div>
        <form onSubmit={e =>
        { e.preventDefault();
          const newCred = e.target.elements;
          console.log(newCred, '=====new======');
          this.props.dispatch(
            createUser(newCred.email.value, newCred.newUser.value, newCred.newPass.value));}}>
          <div className='input'>
            <label>Email</label>
            <input type="text" name="email" id="email"
              className="text" autoComplete="off"
              required 
              /*  ref={ele => (this.input = ele)} required */
            />
          </div>
          <div className='input'>
            <label>Username</label>
            <input type="text" name="newUser" id="newUser"
              className="text" autoComplete="off"
              required 
              /*  ref={ele => (this.input = ele)} required */
            />
          </div>
          <div className='input'>
            <label>Password</label>
            <input type="password" name="newPass" id="newPass"
              className="text" autoComplete="off"
              required 
              /*  ref={ele => (this.input = ele)} required */
            />
          </div>
          <input type="submit" id="registerButton" className="button1" 
            name="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default connect()(Register);