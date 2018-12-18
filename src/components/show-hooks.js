import React from 'react';
import {connect} from 'react-redux';
// import SearchResults from './search-results';
import '../css/aller-search.css';
import {Link} from 'react-router-dom';
import PostFood from './post-hook';

import {toggleFoodsList, fetchHooks, fetchAHook, updateHook/* newSearchTerm */} from '../actions/hooks';

export class ShowHooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: false,
    };
  }

  componentDidMount(){
    this.props.dispatch(fetchHooks());
  }

  // componentDidUpdate(){
  //   this.props.dispatch(fetchHooks());
  // }

  // add(){
  //   if(props.clicked === true){
  //     return (
  //       <PostFood />
  //     );
  //   }
  // }

  uXGetText(){
    if(this.props.details.length > 0){
      console.log(this.props.details[0]);
      const deets = this.props.details[0].details;
      return(
        <div className='deets'>
          <p>Details:</p><p>
            website: {deets.website},
            first name: {deets.first},
            last name: {deets.last},
            key: {deets.key}
          </p>
        </div>
      );
    }
  }

  updateForm(id){
    let detailsUpdate;
    if(this.state.clicked === true){
      console.log(id);
      this.props.list.map(item => {
        if(item._id === id){
          detailsUpdate = item.details;
        }
      })
      // console.log(detailsUpdate);
      const arrKeys = Object.keys(detailsUpdate);
      const arrVals = Object.values(detailsUpdate);
      console.log(arrKeys, arrVals);
      if(detailsUpdate){
      return(
        <div>
           <form onSubmit={e => {
            e.preventDefault();
            let obj = {};
            // console.log(e.target.elements.ingredients.value,
            //   e.target.ingredients.value.split(' '),  '---');
            const el = e.target.elements;
            console.log(el);
            // let vals = {};
            // el.map(item => {
            //   vals[item.name] = item.name.value;
            // });
            // console.log(vals);
            arrKeys.map(item => {
              return obj[item] = el[item].value;
            });

            console.log(obj);
            
            
            this.props.dispatch(updateHook(obj, id));}} >

            {arrKeys.map(key => {
              return(
                <div className='input'>
                <label>{key}</label><br />
                <input type='text' 
                className={key}
                name={key}
                aria-labelledby='Add a parameter to Track'></input>
                </div>
                );
              })
            }

            <input 
              type='submit' 
              id='postButton' 
              className='postButton' 
              name='submit' 
              value='Update'/>

          </form>
        </div>
      );
    }
  }
  }

  results(){
    if(this.props.list){
      return(
        <div>
          <ul>
          {this.props.list.map(item => {
            return(
              <div>
              <div>
                <li key={item._id}>{item.details.website}</li>
                {/* <p>First Name: {item.details.first}</p>
                <p>Last Name: {item.details.last}</p>
                <p>Key: {item.details.key}</p> */}
              </div>
              <button onClick={() => {
                this.setState({clicked: !this.state.clicked}),
                console.log('update');}}>Update</button>
              <button onClick={() => {
                this.props.dispatch(fetchAHook(item._id)),
                console.log('test');}}>Test</button>
              {this.updateForm(item._id)}
              {this.uXGetText()}
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
          {/* <button type='button'
          onClick={() => !props.clicked}>Add New Hook</button> */}
          {/* {this.add()} */}
          {this.results()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  // zero: state.websitesR.zero
  list: state.websitesR.websites,
  details: state.websitesR.details
});

export default connect(mapStateToProps)(ShowHooks);



