import React from 'react';
import '../css/app.css';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default function App (props) {

  return (
    <div className='App'>
      <div className="tab">
      <Link to='/add'>
          <button className="tablinks">
             Add a Hook</button>
        </Link>

        <Link to='/all'>
          <button className="tablinks">
           View all Hooks</button> </Link>

        {/* <Link to='/listening'>
          <button className="tablinks">
             Listeners </button>
        </Link> */}

        

      </div>
    </div>
  );
}

