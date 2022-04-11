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
    // state是store中的state，在这里可以进行筛选及派生
    // props是该组件自己的props
    // 这里返回的对象就是该组件最终的props
    ...props,
    ...state
  }),
  (dispatch, props) => ({
    //  dispatch就是store上的dispatch
    // props是该组件自己原始的props
    chageUserName: () => {
      dispatch({
        type: "USER/EDIT",
        payload: props.userName
      });
    },
    changeOrderName: () =>
      dispatch(async (dispatch, getState) => {
        // 这里打印出来的值是更新之后的，待研究
        console.log("getState", JSON.stringify(getState()));
        const orderName = await Promise.resolve("眼镜");
        dispatch({
          type: "ORDER/ADJUST",
          payload: orderName
        });
      })
  })
)(index);
