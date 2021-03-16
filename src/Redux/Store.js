import { createStore, applyMiddleware, combineReducers, compose } from "redux";



const initialState = {
  sidebarShow: 'responsive'
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      console.log('test');
      return {...state, ...rest }
    default:
      return state
  }
}
const Store = createStore(changeState);
export default Store;

