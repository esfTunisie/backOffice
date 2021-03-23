const initialState = {
  token: null,
  client: null,
  new_command:null,
  current_command:null
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
      case "GET_CLIENT":
      return {
        ...state,
        client: action.value,
      };
      case "GET_NEW_COMMAND":
        return{
          ...state,
          new_command:action.value,
        };
        case "GET_CURRENT_COMMAND":
          return{
            ...state,
            current_command:action.value,
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
