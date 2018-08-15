import React from 'react';
import {connect} from 'react-redux';
import './search-results.css';
import {expandResult} from '../actions/foods';

class SearchResults extends React.Component{
  
  // console.log(props.listHide);
  // console.log(props.foods);
  constructor(props){
    super(props);
    this.state ={
      foods: []
    };
  }
  //this.setState({foods: this.state.foods[index].show})
  componentDidMount(){
    this.setState({ foods: this.props.foods.map((item, index) => {
      return {
        id: index,
        // name: item.name,
        show: false,
      };
    }) });
  }

  render(){
    if(!this.props.listHide){
  
      const foods = this.props.foods.map((item, index) =>(
        <div id='SearchResult'>
          <li key={index} 
            onClick={() => {
              this.setState({});
              this.props.dispatch(expandResult((!this.props.expandFood)));}}>
            <h2>{item.name}</h2> <span>{
              item.ingredients.length <= 5 ? item.ingredients.join(', ') : 
                item.ingredients.slice(0,5).join(', ').concat('...')}</span> 
            {/*   <p>Contains: </p> */}
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
}

const mapStateToProps = (state, props) => ({
  listHide: state.searchR.listHide,
  foods: state.foodsR.foods,
  expandFood: state.foodsR.expandFood
});

export default connect(mapStateToProps)(SearchResults);