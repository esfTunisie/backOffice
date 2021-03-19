const initialState = {
  token: null,
  sidebarShow: 'responsive'
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case "test":
      return {
        ...state,
        test: action.value,
      };
      case 'set':
        
        return {...state, ...action.rest }
     
    case "LOGOUT":
      return {
        token: null,
      };
    default:
      return state;
      
  }
}


export default AuthReducer;
