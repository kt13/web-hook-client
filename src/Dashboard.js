import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import App from './components/app';
import DisplayHooks from './components/show-hooks';
import AddListing from './components/post-hook';
// import Listening from './components/listening';
import './Dashboard.css';
// import { stayLoggedIn } from './actions/jwtauth';

export class Dashboard extends React.Component {

  render(){
    return (
      <Router>
        <div className="dashboard">
          <div>
            <h1 className='headerTitle'>
              <Link 
                to='/'
                style={{ textDecoration: 'none', color: 'black'}}
              >Web Hooks</Link>
            </h1>
          </div>
          <App/>
          <main role="main" style={{padding: '30px'}}>
            <Switch>

              <Route
                exact
                path="/all"
                component={DisplayHooks}
              />

              {/* <Route
                exact
                path="/listening"
                component={Listening}
              /> */}

              <Route
                exact
                path="/add"
                component={AddListing}
              />
            
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect()(Dashboard);