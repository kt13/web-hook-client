import React from 'react';
import './expandedInfo.css';
import {fetchAllergens, postComment} from '../actions/foods';
import { connect } from 'react-redux';
import Comment from './comments';

export class ExpandedInfo extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expanded: false,
    };
  }

  expandFood(){
    this.setState({expanded: !this.state.expanded});
    // setTimeout(() => {
    //   console.log('after', this.state.expanded);
    // }, 500);
  }

  render(){
    console.log(this.props, 'this props');
    const newSet = Array.from(new Set(this.props.allergens.map(item => item.category)));
    console.log(newSet, '-----');
    const expandedDisplay = this.state.expanded ? 'expanded' : 'hidden';
    const hiddenDisplay = this.state.expanded ? 'hidden' : 'expanded'; 
    return(
      <div id='SearchResult'>
        <li className='oneFood'>
          <div className='preview' onClick={() => {
            this.expandFood();
            this.props.dispatch(fetchAllergens(this.props.id));}}>
            <h2 className='listing' >{this.props.name}</h2>{/* <span className={`${hiddenDisplay} prevDesc`}>
              {this.props.ingredients.length <= 4 ? this.props.ingredients.join(', ') : 
                this.props.ingredients.slice(0,4).join(', ').concat('...')}</span> */}
          </div>
          <div id='ExpandedInformation' className={`${expandedDisplay}`}>
            {(this.props.ingredients.join(', ')/*, item.etc */)}
            <p><b style={{color: 'red'}}>Allergy Warning</b>: <b>Contains {newSet.join(', ')}</b></p>
            
            <div className='comments'>
              {/* <Comment {...this.props.ingredients}/> */}
              <form className='commentForm' onSubmit={e =>  
              { e.preventDefault();
                this.props.dispatch(postComment(
                  e.target.elements.foodSearch.value, 
                  this.props.id, 
                  this.props.searchTerm));
                // console.log(this.input.value, '============');
              }}>
                <textarea type="text" name="foodSearch" id="foodSearch"
                  className="commentText" autoComplete="off"
                  placeholder={`Add a comment for ${this.props.name}.`} required 
                />
                <br/>
                <input type="submit" id="addCommButton" className="commentButton" 
                  name="submit" value="Add Comment"/>
              </form>
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