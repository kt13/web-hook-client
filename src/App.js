import React from 'react';
import './App.css';
import {fetchFoods} from '../src/actions/foods';
import {connect} from 'react-redux';
import AllergyForm from './components/aller-search-form';
import SearchResults from './components/search-results';
import NavBar from './components/nav-bar';
class App extends React.Component {
  componentDidMount(){
    // this.props.dispatch(fetchFoods());
    document.getElementById('defaultOpen').click();
  }

  openSearch(e, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('active', '');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = 'block';
    e.currentTarget.className += 'active';
  }

  render() {
    return (
      <div className='App'>
        <NavBar/>
        <h1>Food for You</h1>
        <div className="tab">
          <button id='defaultOpen' className="tablinks" onClick={e => this.openSearch(e, 'AllergySearch')}>Search a Food</button>
          <button className="tablinks" /* onClick={e => openSearch(e, 'PharmaSearch')} */>Search Local Pharmacy</button>
          <button className="tablinks" /* onClick={e => openSearch(e, 'PostFood')} */>Add a Listing</button>
        </div>
        <div className='AppBody'>
          <AllergyForm handleSubmit={e => this.props.dispatch(fetchFoods(e))}/>
          <SearchResults foods={this.props.foods}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  foods: state.foodsR.foods,
});

export default connect(mapStateToProps)(App);
