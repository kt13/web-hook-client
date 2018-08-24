// import React from 'react';
// import {connect} from 'react-redux';
// import {postComment, fetchFoods} from '../actions/foods';

// export class Comment extends React.Component{
//   render(){
//     return(
//       <div className='comments'>

//         <div className='commentContainer'>
//           <p className='commentSection'>Comments:</p>

//           <ul className='commentUl'>
//             {this.props}
//           </ul>

//         </div>
      
//         <form className='commentForm' onSubmit={e =>  
//         { e.preventDefault();
//           this.props.dispatch(postComment(
//             e.target.commentArea.value, 
//             this.props.id));
//           this.props.dispatch(fetchFoods(this.props.searchTerm));
//         // console.log(this.input.value, '============');
//         }}>

//           <textarea 
//             type="text" 
//             name="commentArea"
//             id="addComment"
//             className="commentText" 
//             autoComplete="off"
//             aria-labelledby="Comment Textbox"
//             placeholder={`Add a comment for ${this.props.name}.`} required 
//           />
//           <br/>
//           <input 
//             type="submit"
//             id="addCommButton" 
//             className="commentButton" 
//             name="submit" 
//             value="Add Comment"/>
//         </form>

//         <br/>
      
//       </div>
//     );
//   }
// }

// export default connect()(Comment);