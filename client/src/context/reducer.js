import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  } else if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  } else if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  } else if (action.type === REGISTER_USER_SUCCESS) {
    const { user, location, token } = action.payload;
    return {
      ...state,
      isLoading: false,
      user,
      token,
      jobLocation: location,
      userLocation: location,
      showAlert: true,
      alertType: "success",
      alertText: "User Created! Redirecting...",
    };
  } else if(action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    }
  }
  throw new Error(`no such action :${action.type}`);
};
export default reducer;
