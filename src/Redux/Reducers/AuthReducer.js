import ActionButton from "antd/lib/modal/ActionButton";

const initialState = {
  token: null,
  client: null,
  new_command:null,
  current_command:null,
  canceled_command:null,
  steps1:{},
  steps2:{},
  steps3:{},
  product:null,
  isLogIn:false,
  offre:null,
  shops:null
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TOKEN":
      return {
        ...state,
        token: action.token,
        isLogIn: action.isLogIn,
        username: action.username,
        password: action.password

      };
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
            case "OFFRE":
            return{
              ...state,
              offre:action.value
            };
            case "SHOPS":
            return{
              ...state,
              shops:action.value
            };
    case "LOGOUT":
      return {
        token: action.token,
        client: action.client,
        new_command:action.new_command,
        current_command:action.current_command,
        canceled_command:action.canceled_command,
        steps1:action.steps1,
        steps2:action.steps2,
        steps3:action.steps3,
        product:action.product,
        isLogIn:action.isLogIn
      };
    default:
      return state;
  }
}

export default AuthReducer;
