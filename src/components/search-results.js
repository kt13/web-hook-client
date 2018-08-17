import React from 'react';
import {connect} from 'react-redux';
import './search-results.css';
import ExpandedInfo from './expandedInfo';

export class SearchResults extends React.Component{

  // console.log(props.listHide);

  render(){
    if(!this.props.listHide){
      let foods = [];
      if(this.props.foods.length > 0 ){
        foods = this.props.foods.map((item, index) =>(
          <ExpandedInfo key={index} {...item}/>
        ));
      }
      return(
        <ul className='newList'>
          {foods}
        </ul>
      );
    }
    else {
      return <div id='SearchResults'></div>;
    }
  }
}

const mapStateToProps = (state, props) => ({
  listHide: state.foodsR.searchListHide,
  foods: state.foodsR.foods
});

export default connect(mapStateToProps)(SearchResults);