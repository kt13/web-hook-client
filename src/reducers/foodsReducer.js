import { 
  NEW_REQUEST, 
  NEW_SUCCESS, 
  NEW_ERROR, 
  EXPAND_RESULT, 
  NEW_FOOD_SEARCH,
  NEW_ALLERGEN_SUCCESS,
  POST_COMMENT_SUCCESS} from '../actions/foods';

const initialState = {
  foods: [],
  loading: false,
  error: null,
  expandFood: false,
  searchListHide: true,
  allergens: []
};  

// console.log(initialState.foods,'sadfasdfasfdsf');

export const foodsReducer = (state=initialState, action) => {
  if(action.type === NEW_REQUEST){
    return Object.assign({}, state, {
      loading: true
    });

  } else if(action.type === NEW_SUCCESS){
    // console.log(action.foods);
    return Object.assign({}, state, {
      foods: [...action.foods]
    });
          
    // action.data.map(item => state.foods[item])]});
  } else if(action.type === NEW_FOOD_SEARCH){
    return Object.assign({}, state, {
      searchListHide: action.listHide
    });

  } else if(action.type === EXPAND_RESULT){
    return Object.assign({}, state, {
      expandFood: action.torf
    });

  } else if(action.type === NEW_ERROR){
    return Object.assign({}, state, {
      loading: false, error: action.error
    });

  } else if(action.type === NEW_ALLERGEN_SUCCESS){
    return Object.assign({}, state, {
      allergens: [...action.allergy]
    });

  } else if(action.type === POST_COMMENT_SUCCESS){

    return Object.assign({}, state, {
      foods:  action.newFoods
      // foods: state.foods.map(item => {
      //   (item.id === action.content.id) ? 
      //     [...state.foods.slice(0,state.foods.findIndex(item.id===action.content.id)),
      //       ...state.foods.slice(state.foods.findIndex(item.id===action.content.id) + 1, state.foods.length), 
      //       action.content ] : state.foods; 
      // })
    });
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
