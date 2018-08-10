import React from 'react';
import './register-login.css';

export default function Login (props){
  return(
    <div>
      <form onSubmit={e =>  
      { e.preventDefault(); 
        console.log(this.input.value, '============'); 
        this.props.handleSubmit(this.input.value); }}>
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