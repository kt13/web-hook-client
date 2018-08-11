import React from 'react';
import {connect} from 'react-redux';
import './search-results.css';
function SearchResults (props){
  console.log(props.listHide);
  console.log(props.foods);
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
 
}

const mapStateToProps = (state, props) => ({
  listHide: state.searchR.listHide
});

export default connect(mapStateToProps)(SearchResults);