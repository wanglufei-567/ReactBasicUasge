function reducer(state = { orderName: "耳机" }, action) {
  switch (action.type) {
    case "ORDER/ADJUST":
      return {
        ...state,
        orderName: action.payload // dispatch({type: 'EDIT', payload: '眼镜'})
      };
    default:
      return state;
  }
}
export default reducer;
