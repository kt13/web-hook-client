import React from 'react';
import {Link} from 'react-router-dom';
import './nav-bar.css';

export default function NavBar(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li /* onClick={e => props.onClick(e)} */>
          <Link to="/register" className="register">
                        Register
          </Link>
        </li>
        <li /* onClick={e => props.newGame(e)} */>
          <Link to="/login" className="login">
                        Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
