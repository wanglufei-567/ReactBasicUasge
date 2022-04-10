import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { user, order } from "./reducers";

function address(state = { address: "china" }, action) {
  switch (action.type) {
    case "EDIT":
      return {
        ...state,
        address: action.payload // dispatch({type: 'EDIT', payload: 123})
      };
    default:
      return state;
  }
}

// 合并reducer
const reducer = combineReducers({
  user,
  order,
  address
});
const store = createStore(reducer, applyMiddleware(thunk));

// console.log("store", store);
// console.log("初始state", store.getState());
store.dispatch({
  type: "EDIT",
  payload: "beijing"
}); // dispatch默认是同步修改

// console.log("dispatch修改后的state", store.getState());

// 每当 dispatch action 的时候就会执行，
// state 树中的一部分可能已经变化,可以使用getState() 来拿到当前 state。
store.subscribe(() => console.log(store.getState()));

export default store;
