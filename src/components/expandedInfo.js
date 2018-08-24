import React from 'react';
import './expandedInfo.css';
import {fetchAllergens, postComment, fetchFoods} from '../actions/foods';
import { connect } from 'react-redux';
import Comment from './comments';

export class ExpandedInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expanded: false,
    };
  }

  // shouldComponentUpdate(){
  //   return false;
  // }

  // componentWillReceiveProps(){

  // }

  expandFood(){
    this.setState({expanded: !this.state.expanded});
  }

  comments(){
    return this.props.comments.map((item, index) => (
      <li key={index} className='commentLi'>
        {item}
      </li>
    ));
  }

  render(){

    // console.log(this.props, 'this props');
    const newSet = Array.from(new Set(this.props.allergens.map(item => item.category)));
    // console.log(newSet, '-----');

    const expandedDisplay = this.state.expanded ? 'expanded' : 'hidden';
    const hiddenDisplay = this.state.expanded ? 'hidden' : 'expandedSpan'; 

    return(
      <div id='SearchResult'>

        <li className='oneFood'>

          <div className='preview' onClick={() => {
            this.expandFood();
            this.props.dispatch(fetchAllergens(this.props.id));}}>
            <h2 className='listing' >{this.props.name}</h2> <span className={`${hiddenDisplay} prevDesc`}>
              {this.props.ingredients.length <= 4 ? this.props.ingredients.join(', ') : 
                this.props.ingredients.slice(0,4).join(', ').concat('...')}</span>
          </div>

          <div id='ExpandedInformation' className={`${expandedDisplay}`}>
            {(this.props.ingredients.join(', ')/*, item.etc */)}
            <p><b style={{color: 'red'}}>Allergy Warning</b>: <b>Contains {newSet.join(', ')}</b></p>
            
            <div className='comments'>
              {/* <Comment {...this.props.ingredients}/> */}

              <div className='commentContainer'>
                <p className='commentSection'>Comments:</p>

                <ul className='commentUl'>
                  {this.comments()}
                </ul>

              </div>
              
              <form className='commentForm' onSubmit={e =>  
              { e.preventDefault();
                this.props.dispatch(postComment(
                  e.target.commentArea.value, 
                  this.props.id));
                this.props.dispatch(fetchFoods(this.props.searchTerm));
                // console.log(this.input.value, '============');
              }}>

                <textarea 
                  type="text" 
                  name="commentArea"
                  id="addComment"
                  className="commentText" 
                  autoComplete="off"
                  aria-labelledby="Comment Textbox"
                  placeholder={`Add a comment for ${this.props.name}.`} required 
                />
                <br/>
                <input 
                  type="submit"
                  id="addCommButton" 
                  className="commentButton" 
                  name="submit" 
                  value="Add Comment"/>
              </form>

              <br/>
              
            </div>
          
          </div>
        </li>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  allergens: state.foodsR.allergens,
  searchTerm: state.foodsR.searchTerm
});

export default connect(mapStateToProps)(ExpandedInfo);