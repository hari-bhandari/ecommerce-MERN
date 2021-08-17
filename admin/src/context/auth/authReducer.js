import {AUTH_ERROR_GET_ME, LOGOUT, USER_LOADED} from '../types';

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      console.log({payload:action.payload})
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading:false
      };
    case AUTH_ERROR_GET_ME:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading:false
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};
