const initialState = {
  token: null,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        token: action.value.token,
      };
    case "LOGOUT":
      return {
        token: null,
      };
    default:
      return state;
  }
}

export default AuthReducer;
