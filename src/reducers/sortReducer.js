import { SET_ACTIVE_PAGE, SET_SORT } from '../actions/type';

const initialState = {
  // Pagination
  activePage: 1,
  // Sort
  sortBy: 'id'
};

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload
      };
    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload
      };

    default:
      return state;
  }
}
