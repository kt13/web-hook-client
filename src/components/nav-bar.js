import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar.css';
import {connect} from 'react-redux';
import { logoutUser } from '../actions/jwtauth';
import {Redirect} from 'react-router-dom';

class NavBar extends React.Component {

  logout(){
    if(this.props.currentUser === null){
      return (
        <li>
          <Link to="/login" 
            className="login"  
            style={{ textDecoration: 'none' }}>
          Login
          </Link>
        </li>
      );
    }
    //hovering over logout is a mouse cursor instead of a click. if have time,
    // do it
    else if(this.props.currentUser){
      return(
        <li
          onClick={() => { 
            this.props.dispatch(logoutUser());
            <Redirect to='/'/>;}}>
          Logout
        </li>
      );
    }
  }

  render(){
    return (
      <nav role="navigation">
        <ul className="clearfix">
          <li /* onClick={e => props.onClick(e)} */>
            <Link to="/register" 
              className="register"  
              style={{ textDecoration: 'none' }}>
          Register
            </Link>
          </li>
          {this.logout()}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.jwtR.currentUser
});

export default connect(mapStateToProps)(NavBar);