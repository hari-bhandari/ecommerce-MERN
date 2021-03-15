import {AUTH, FORM, GLOBAL} from "../defines";
import {globalStates} from "@/redux/ReduxIntefaces";

const initialState:globalStates = {
  currency: {
    locales: "us-US",
    currency: "USD",
  },
  category: "any",
  isAuthenticated:false,
  user:null,
  error:null
};

const globalReducer = (state:globalStates = initialState, action:any) => {
  switch (action.type) {
    case GLOBAL.SET_LANGUAGE:
      return {
        ...state,
        language: action.lang,
      };
    case GLOBAL.SET_CURRENCY:
      return {
        ...state,
        currency: {
          locales:
            action.cur === "JPY"
              ? "jp-JP"
              : action.cur === "VND"
              ? "vn-VN"
              : "en-EN",
          currency: action.cur,
        },
      };
    case GLOBAL.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case GLOBAL.SET_SEARCH:
      return {
        ...state,
        keyword: action.keyword,
      };
    case FORM.SET_CURRENT_FORM:
      return {
        ...state,
        currentForm: action.form
      }
    case AUTH.LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case AUTH.SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case AUTH.LOG_IN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      }
    case AUTH.SIGN_UP_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      }
    case AUTH.LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
      }
    case AUTH.LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      }
    case AUTH.LOAD_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state;
  }
};

export default globalReducer;
