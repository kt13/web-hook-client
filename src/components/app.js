import React from 'react';
import './app.css';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default function App (props) {

  return (
    <div className='App'>
      <div className="tab">

        <Link to='/'>
          <button className="tablinks">
           Search a Food</button> </Link>

        <Link to='/search/pharmacy'>
          <button className="tablinks">
             Search Local Pharmacy </button>
        </Link>

        <Link to='/add'>
          <button className="tablinks">
             Add a Listing</button>
        </Link>

      </div>
    </div>
  );
}

