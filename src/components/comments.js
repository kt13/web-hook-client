import React from 'react';
import {connect} from 'react-redux';

export function Comment (props){
  return(
    <form className='commentForm' onSubmit={e =>  
    { e.preventDefault();
      // console.log(this.input.value, '============');
      /* this.props.dispatch(fetchFoods(this.input.value)); */ }}>
      <textarea type="text" name="foodSearch" id="foodSearch"
        className="commentText" autoComplete="off"
        placeholder={`Add a comment for ${props.name}.`} required 
        ref={comm => (this.input = comm)} required
      />
      <br/>
      <input type="submit" id="addCommButton" className="commentButton" 
        name="submit" value="Add Comment"/>
    </form>
  );
}

export default connect()(Comment);