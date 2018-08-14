import React from 'react';
import {connect} from 'react-redux';
import './search-results.css';
import {expandResult} from '../actions/foods';

function SearchResults (props){
  // console.log(props.listHide);
  // console.log(props.foods);

  if(!props.listHide){
  
    const foods = props.foods.map((item, index) =>(
      <div id='SearchResult'>
        <li key={index} 
          onClick={() => {
            props.dispatch(expandResult());}}>
          <h2>{item.name}</h2> <span>{
            item.ingredients.length <= 5 ? item.ingredients.join(', ') : 
              item.ingredients.slice(0,5).join(', ').concat('...')}</span> 
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
  foods: state.foodsR.foods,
  singleFood: state.foodsR.singleFood
});

export default connect(mapStateToProps)(SearchResults);