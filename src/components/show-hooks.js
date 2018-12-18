import React from 'react';
import {connect} from 'react-redux';
// import SearchResults from './search-results';
import '../css/aller-search.css';
import {Link} from 'react-router-dom';
import PostFood from './post-hook';

import {fetchHooks, 
  fetchAHook, updateHook, detailsClear, 
  updateClear} from '../actions/hooks';

export class ShowHooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      updateId: 0,
    };
  }

  componentDidMount(){
    this.props.dispatch(fetchHooks());
    this.props.dispatch(detailsClear());
    this.props.dispatch(updateClear());
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
    if(this.state.clicked === true && id.length > 0){
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
           <form 
            key={id}
            onSubmit={e => {
            e.preventDefault();
            let obj = {};
            const el = e.target.elements;
            console.log(el);
            arrKeys.map(item => {
              return obj[item] = el[item].value;
            });

            console.log(obj);
            
            
            this.props.dispatch(updateHook(obj, id));}} >

            {arrKeys.map(keyI => {
              return(
                <div className='input' key={keyI}>
                <label>{keyI}</label><br />
                <input type='text' 
                className={keyI}
                name={keyI}
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

  updateUx(){
    if(this.props.update){
      return(
        <div>
          <p>Updated to {this.props.update}.</p>
        </div>
      );
    }
  }

  results(){
    if(this.props.list){
      return(
        <div>
          <ul>
          {this.props.list.map((item,i) => {
            return(
              <div key={i}>
              <div >
                <li key={item}>{item.details.website}</li>
                {/* <p>First Name: {item.details.first}</p>
                <p>Last Name: {item.details.last}</p>
                <p>Key: {item.details.key}</p> */}
              <button 
              onClick={() => {
                console.log(item._id),
                this.setState({clicked: !this.state.clicked,
                  updateId: item._id
                }),
                console.log('update');}}>Update</button>
              <button 
              onClick={() => {
                this.props.dispatch(fetchAHook(item._id)),
                console.log('test');}}>Test</button>
              </div>
             
              
              </div>
            );  
          })}
          {this.updateForm(this.state.updateId)}
          {this.updateUx()}
          {this.uXGetText()}
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
  details: state.websitesR.details,
  update: state.websitesR.update
});

export default connect(mapStateToProps)(ShowHooks);



