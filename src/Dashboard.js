import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import {connect} from 'react-redux';
import App from './components/app';
import SearchFood from './components/aller-search-form';
import AddListing from './components/post-hook';
import './Dashboard.css';
// import { stayLoggedIn } from './actions/jwtauth';

export class Dashboard extends React.Component {

  // componentDidMount(){
  //   this.props.dispatch(stayLoggedIn());
  // }

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
                path="/search/food"
                component={SearchFood}
              />

              {/* <Route
                exact
                path="/search/pharmacy"
                component={SearchPharma}
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