import React from 'react';

import './nav-bar.css';

export default function NavBar(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li /* onClick={e => props.onClick(e)} */>
          <a className="register" href='#'>
                        Register
          </a>
        </li>
        <li /* onClick={e => props.newGame(e)} */>
          <a className="login" href='#'>
                        Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
