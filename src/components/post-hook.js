import React from 'react';
import '../css/post-food.css';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {postNewHook} from '../actions/hooks';
// import PostHookForm from './post-hook-form';
// import { loadAuthToken } from '../local-storage';
// import { setReduxTokenFrmLocalStore } from '../actions/jwtauth';
// import jwtDecode from 'jwt-decode';

export class PostHook extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      i: 0
    }
  }

  uxText(newH){
    if(newH){
      return(
        <div>
          <p>{this.props.newHook} is now being tracked on our database.</p>
        </div>
      );
      // console.log(newH);
    }
  }

  additionalForm(i){
    let val = 'val'+i;
    let nam = 'nam'+i;
    if(this.state.clicked === true){
      return(
        <div>
          <div className='input'>
              <label>Name of Parameter</label><br />
              <input type='text'
                className={nam}
                name={nam}></input>
          </div>
          <div className='input'>
              <label>Value of Parameter</label><br />
              <input type='text'
                className={val}
                name={val}></input>
          </div>
        </div>
      );
    }
  }

  render(){
    return(
      <div id='PostFood' className='tabcontent'>
      
        <div className='postfood'>
        
          <h2>Add a web hook</h2>
            <form onSubmit={e => {
            e.preventDefault();
            // console.log(e.target.elements.ingredients.value,
            //   e.target.ingredients.value.split(' '),  '---');
            const el = e.target.elements;
            console.log(el);
            if(this.state.i > 0 ){
              console.log(el);
            this.props.dispatch(postNewHook(
              el.website.value, 
              el.first.value, 
              el.last.value, 
              el.key.value))
              }
              else{
                this.props.dispatch(postNewHook(
                  el.website.value, 
                  el.first.value, 
                  el.last.value, 
                  el.key.value))
              };
              }}>

            <div className='input'>
              <label>Website Name</label><br />
              <input type='text' 
                className='website' 
                name='website'
                aria-labelledby='Add a Parameter to track'></input>

            </div>

            <div className='input'>
              <label>First Name</label><br />
              <input type='text' 
                className='first' 
                name='first'
                aria-labelledby='Add a Parameter to Track'></input>

            </div>

            <div className='input'>
              <label>Last Name</label><br />
              <input type='text' 
                className='last' 
                name='last'
                aria-labelledby='Add a Parameter to Track'></input>

            </div>

            <div className='input'>
              <label>Key</label><br />
              <input type='text' 
                className='key' 
                name='key'
                aria-labelledby='Add a Parameter to Track'></input>

            </div>

            <button onClick={() => {
              this.setState({
              clicked: !this.state.clicked, 
              i: this.state.i++})}}>Add another Parameter</button>
            
            {this.additionalForm(this.state.i)}
            <input 
              type='submit' 
              id='postButton' 
              className='postButton' 
              name='submit' 
              value='Create'/>

          </form>
              
              {this.uxText(this.props.newHook)}

        </div>
    
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  newHook: state.websitesR.newPost
});

export default withRouter(connect(mapStateToProps)(PostHook));