import React from 'react';
import './register-login.css';
import { createUser, loginUser } from '../actions/jwtauth';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class Register extends React.Component {

  onSubmit(val){
    return this.props
      .dispatch(createUser(val.email.value, val.newUser.value, val.newPass.value));
  }
  
  render(){
    console.log(this.props.registered);

    if(this.props.registered === false){
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
    } else if(this.props.registered === true){
      return (<Redirect to='/login' />);
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state, props) => ({
  registered: state.jwtR.registered
});

export default connect(mapStateToProps)(Register);