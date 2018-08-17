import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import NavBar from './components/nav-bar';
import App from './components/app';
import Register from './components/register';
import Login from './components/login';
import SearchFood from './components/aller-search-form';
import SearchPharma from './components/pharma-search-form';
import AddListing from './components/post-food';
import './Dashboard.css';

export default function Dashboard() {
  // const h1Style = {
  //   'text-decoration': 'none'
  // };
  return (
    <Router>
      <div className="dashboard" /* style={{ 'background-color': '#2B2C28'}} */>
        <NavBar />
        <div>
          <h1 className='headerTitle'><Link 
            to='/'
            style={{ textDecoration: 'none', color: 'black'}}
          >Food for You</Link>
          </h1>
        </div>
        <App/>
        <main role="main">
          <Switch>
            {/* <Redirect exact from="/" to="/inbox" /> */}
            <Route
              exact
              path="/"
              component={SearchFood}
            />

            <Route
              exact
              path="/search/pharmacy"
              component={SearchPharma}
            />

            <Route
              exact
              path="/add"
              component={AddListing}
            />

            <Route
              exact
              path="/register"
              component={Register}
            />

            <Route
              exact
              path="/login"
              component={Login}
            />
            
          </Switch>
        </main>
      </div>
    </Router>
  );
}