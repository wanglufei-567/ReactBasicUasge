import React, { Component } from "react";
import { connect } from "react-redux";

export class index extends Component {
  render() {
    return (
      <div>
        <p>{JSON.stringify(this.props)}</p>
        <br />
        <p>{this.props.user.userName}</p>
        <button onClick={this.props.chageUserName}>
          修改store中的user.userName
        </button>
        <p>{this.props.order.orderName}</p>
        <button onClick={this.props.changeOrderName}>
          修改store中的order.orderName
        </button>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({
    ...props,
    ...state
  }),
  (dispatch, props) => ({
    chageUserName: () => {
      dispatch({
        type: "USER/EDIT",
        payload: props.userName
      });
    },
    changeOrderName: () =>
      dispatch(async (dispatch, getState) => {
        console.log("getState", JSON.stringify(getState()));
        const orderName = await Promise.resolve("眼镜");
        dispatch({
          type: "ORDER/ADJUST",
          payload: orderName
        });
      })
  })
)(index);
