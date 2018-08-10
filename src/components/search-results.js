import React from 'react';
import {connect} from 'react-redux';
import './search-results.css';
function SearchResults (props){
  // console.log(props.listHide);
  if(!props.listHide){
    const foods = props.foods.map((item, index) =>(
      <div id='SearchResults'>
        <li key={index}>
          {item.name}
          <p>{item.ingredients.join(', ')}</p> 
        </li>
      </div>
    )
    );
    return(
      <ul>
        {foods}
      </ul>
    );
  } else {
    return <div id='SearchResults'></div>;
  }
}

const mapStateToProps = (state, props) => ({
  listHide: state.searchR.listHide
});

export default connect(mapStateToProps)(SearchResults);