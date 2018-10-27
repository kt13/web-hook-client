import React from 'react';
import '../css/app.css';
// import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default function App (props) {

//add in superuser access to delete and update listings

  return (
    <div className='App'>
      <div className="tab">

        <Link to='/search/food'>
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

