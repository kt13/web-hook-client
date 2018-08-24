import React from 'react';
import {
  BrowserRouter as Router,
  Route,
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
import LandingPage from './components/landing-page';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <Router>
      <div className="dashboard">
        <NavBar />
        <div>
          <h1 className='headerTitle'><Link 
            to='/search/food'
            style={{ textDecoration: 'none', color: 'black'}}
          >Food for You</Link>
          </h1>
        </div>
        <App/>
        <main role="main" style={{padding: '20px'}}>
          <Switch>
            <Route
              exact
              path="/"
              component={LandingPage}
            />

            <Route
              exact
              path="/search/food"
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