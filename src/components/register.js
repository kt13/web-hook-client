import React from 'react';
import './register-login.css';
import { createUser } from '../actions/jwtauth';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

export class Register extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      registered: false
    };
  }
  onSubmit(val){
    this.props
      .dispatch(createUser(val.email.value, val.newUser.value, val.newPass.value, this.props.history));

    this.setState({registered: !this.state.registered});

  }
  
  render(){
    console.log(this.state.registered, 'react');
    // console.log(this.props.registered, 'redux');
    if(this.state.registered === false){
      return(
        <div className='register'>

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

            <input type="submit" id="registerButton" className="button5" 
              name="submit" value="Register" />

          </form>

        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

// const mapStateToProps = (state, props) => ({
//   registered: state.jwtR.registered
// });

export default withRouter(connect(/* mapStateToProps */)(Register));