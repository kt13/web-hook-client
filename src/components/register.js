import React from 'react';
import './register-login.css';
import { createUser, loginUser } from '../actions/jwtauth';
import { connect } from 'react-redux';

class Register extends React.Component {

  onSubmit(val){
    return this.props
      .dispatch(createUser(val.email.value, val.newUser.value, val.newPass.value))
      .then(() => this.props.dispatch(loginUser(val.newUser, val.newPass)));
  }

  render(){
    return(
      <div>
        <form onSubmit={e =>
        { e.preventDefault();
          const newCred = e.target.elements;
          console.log(newCred, '=====new======');
          this.onSubmit(newCred);}}>
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