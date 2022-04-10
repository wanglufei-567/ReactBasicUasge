function reducer(state = { userName: "wanglufei" }, action) {
  switch (action.type) {
    case "USER/EDIT":
      return {
        ...state,
        userName: action.payload // dispatch({type: 'USER/EDIT', payload: 'liusuolong'})
      };
    default:
      return state;
  }
}
export default reducer;
