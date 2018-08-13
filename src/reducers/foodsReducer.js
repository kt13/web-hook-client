import { NEW_REQUEST, NEW_SUCCESS, NEW_ERROR} from '../actions/foods';

const initialState = {
  foods: [],
  loading: false,
  error: null,
};
console.log(initialState.foods,'sadfasdfasfdsf');

export const foodsReducer = (state=initialState, action) => {
  if(action.type === NEW_REQUEST){
    return Object.assign({}, state, {loading: true});
  }
  else if(action.type === NEW_SUCCESS){
    console.log(action.foods);
    return Object.assign({}, state, 
      {
        foods: [...state.foods, ...action.foods]
      });
          
    // action.data.map(item => state.foods[item])]});
  }
  else if(action.type === NEW_ERROR){
    return Object.assign({}, state, 
      {loading: false, error: action.error});
  }
  return state;
  // switch(action.type) {
  //   case(MAKE_GUESS):
  //     return Object.assign({}, state, {
  //       guessList: [...state.guessList, action.guess],
  //       feedback: generateFeedback(action.guess)
  //     });
  //   case(START_NEW_GAME):
  //     return Object.assign({}, state, {
  //       targetNumber: generateNewTarget(),
  //       feedback: 'Make your Guess!',
  //       guessList: [],
  //       showInfo: false
  //     });
  //   case(TOGGLE_MODAL):
  //     return Object.assign({}, state, {
  //       showInfo: !state.showInfo
  //     });
  //   default:
  //     return state;
  //   }
  // };
};
