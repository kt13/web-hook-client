import React from 'react';
import './app.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export default class App extends React.Component {

  // openTab(e, chooseTab) {
  //   // Declare all variables
  //   var i, tabcontent, tablinks;

  //   // Get all elements with class="tabcontent" and hide them
  //   tabcontent = document.getElementsByClassName('tabcontent');
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = 'none';
  //   }

  //   // Get all elements with class="tablinks" and remove the class "active"
  //   tablinks = document.getElementsByClassName('tablinks');
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace('active', '');
  //   }

  //   // Show the current tab, and add an "active" class to the button that opened the tab
  //   document.getElementById(chooseTab).style.display = 'block';
  //   e.currentTarget.className += 'active';
  // }

  render() {
    return (
      <div className='App'>

        <div className="tab">

          <button className="tablinks">
            <Link to='/'>Search a Food </Link></button>
       
          <button className="tablinks" 
            /* onClick={e => this.openTab(e, 'PharmaSearch')} */>
            <Link to='/search/pharmacy'> Search Local Pharmacy </Link></button>

          <button className="tablinks" 
            /* onClick={e => this.openTab(e, 'PostFood')} */>
            <Link to='/add'> Add a Listing</Link></button>

        </div>
      </div>
    );
  }
}
