import React from 'react';
import './register-login.css';

export default function Register (props){
  return(
    <div>
      <form onSubmit={e =>  
      { e.preventDefault();
        console.log(this.input.value, '============'); 
        this.props.handleSubmit(this.input.value); }}>
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
          name="submit" value="Register" /* onClick={() => this.props.dispatch(toggleFoodsList(false))} */ />
      </form>
    </div>
  );
}