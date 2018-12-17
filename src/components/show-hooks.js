import React from 'react';
import {connect} from 'react-redux';
// import SearchResults from './search-results';
import '../css/aller-search.css';

import {toggleFoodsList, fetchHooks,/* newSearchTerm */} from '../actions/hooks';

export class AllergyForm extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchHooks());
  }

  results(){
    if(this.props.list){
      return(
        <div>
          <ul>
          {this.props.list.map(item => {
            return(
              <div>
                <li>{item.website}</li>
              </div>
            );  
          })}
          </ul>
        </div>
      );
    } else {
      return (
        // <SearchResults/>
        <div>
          <p>No web hooks being tracked.</p>
        </div>
      );
    }
  }

  render(){
    return (
      <div id="AllergySearch" className="tabcontent">
        <div className='foodSearch'>

          <h2>All Web Hooks</h2>
          <div className='allergyForm'>

          </div>
        
          {this.results()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  // zero: state.websitesR.zero
  list: state.websitesR.websites
});

export default connect(mapStateToProps)(AllergyForm);



