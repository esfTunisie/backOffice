const initialState = {
  token: null,
  client: null,
  new_command:null,
  current_command:null,
  canceled_command:null,
  steps1:{},
  steps2:{},
  steps3:{},
  product:null
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
          case "GET_PRODUCT":
          return{
            ...state,
            product:action.value,
          };
          case "GET_CANCELED_COMMAND":
            return{
              ...state,
              canceled_command:action.value,
            };
        case "STEP_FORM_ONE":
          return{
            ...state,
            steps1:action.value,
          };
          case "STEP_FORM_TWO":
            return{
              ...state,
              steps2:action.value
            };
          case "STEP_FORM_THREE":
            return{
              ...state,
              steps3:action.value
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
