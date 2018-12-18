// import React from 'react';
// import {connect} from 'react-redux';
// import { deleteHook } from '../actions/hooks';

// export class Listening extends React.Component{

//   // console.log(props.listHide);

//   displayLog(){
//     console.log(this.props.deletes);
//     if(this.props.deletes){
//       this.props.deletes.map((item =>{
//         // <ExpandedInfo key={index} {...item}/>
//         return(<div>
//           <ul className='newList'
//             style={{padding: '10px'}}>
//             <ul>{item}</ul>
//           </ul>
//           </div>
//         );
//         }));
//     }
    
//   else {
//     return <div id='SearchResults'></div>;
//   }
//   }

//   render(){  
//     return(<div>
//        <form onSubmit={e => {
//             e.preventDefault();
//             const el = e.target.elements;
//             this.props.dispatch(deleteHook(
//               el.id.value));}}>

//             <div className='input'>
//               <label>Id</label><br />
//               <input type='text' 
//                 className='name' 
//                 name='id'
//                 aria-labelledby='choose a website to delete'></input>

//             </div>

//             <input 
//               type='submit' 
//               id='postButton' 
//               className='postButton' 
//               name='submit' 
//               value='Delete'/>
//       </form>
//       {this.displayLog()}
//     </div>);
//   }
// }

// const mapStateToProps = (state, props) => ({
//   deletes: state.websitesR.deletes
// });

// export default connect(mapStateToProps)(Listening);