import React from 'react';
import {connect} from 'react-redux';
import './search-results.css';
function SearchResults (props){
  // console.log(props.listHide);
  // console.log(props.foods);
  if(!props.listHide){
    const foods = props.foods.map((item, index) =>(
      <div id='SearchResults'>
        <li key={index}>
          <a href='#'>{item.name}</a>
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
  }
  else {
    return <div id='SearchResults'></div>;
  }
}

const mapStateToProps = (state, props) => ({
  listHide: state.searchR.listHide,
  foods: state.foodsR.foods
});

export default connect(mapStateToProps)(SearchResults);