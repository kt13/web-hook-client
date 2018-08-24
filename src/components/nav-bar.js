import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar.css';
import {connect} from 'react-redux';
import { logoutUser } from '../actions/jwtauth';
import {withRouter} from 'react-router-dom';

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
        <div>

          <li className='nav-user'>
            {this.props.currentUser}
          </li>

          <li className='nav-logout' /* style={{display: 'inline-block'}} */
            onClick={() => { 
              this.props.dispatch(logoutUser(this.props.history));}}>
          Logout
          </li>

        </div>
      );
    }
  }

  render(){
    return (
      <nav role="navigation">

        <ul className="clearfix">

          <div className='nav-left'>

            <li className='registerClass'>
              <Link to="/register" 
                className="register"  
                style={{ textDecoration: 'none' }}>
          Register
              </Link>
            </li>

          </div>

          <div className='nav-right'>
            {this.logout()}
          </div>

        </ul>

      </nav>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.jwtR.currentUser
});

export default withRouter(connect(mapStateToProps)(NavBar));