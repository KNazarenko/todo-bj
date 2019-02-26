import { DO_LOG_IN, DO_LOG_OUT } from '../actions/type';

const initialState = {
  loginData: {
    loginName: 'admin',
    loginPassword: '123'
  },
  doLogin: false
};

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case DO_LOG_IN:
      return {
        ...state,
        doLogin: action.payload
      };
    case DO_LOG_OUT:
      return {
        ...state,
        doLogin: action.payload
      };

    default:
      return state;
  }
}
