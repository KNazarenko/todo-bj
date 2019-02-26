import {
  GET_TASKS,
  ADD_TASK,
  SET_CURRENT_TASK,
  CLEAR_CURRENT_TASK
} from '../actions/type';

const initialState = {
  //First page tasks
  items: [],
  // All tasks
  allTasksNumber: 0,
  // Current task
  currentTask: {}
};

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        items: action.payload.tasks,
        allTasksNumber: +action.payload.total_task_count
      };
    case ADD_TASK:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: state.items.filter(item => item.id === action.payload)[0]
      };
    case CLEAR_CURRENT_TASK:
      return {
        ...state,
        currentTask: {}
      };

    default:
      return state;
  }
}
