import React, { Component } from "react";

export default class ForceUpdateUsage extends Component {
  state = {
    forceUpdateUsage_num: 0
  };
  componentDidMount() {
    this.setState({ forceUpdateUsage_num: 1 });
    console.log("wd1", this.state.forceUpdateUsage_num);
    this.forceUpdate();
    console.log("wd2", this.state.forceUpdateUsage_num);
    this.setState({ forceUpdateUsage_num: 2 });
    console.log("wd3", this.state.forceUpdateUsage_num);
  }

  /**
   * ForceUpdateUsage_render
   * wd1 0
   * wd2 0
   * wd3 0
   * ForceUpdateUsage_render
   * batchUodate 不能通过forceUpdate()跳出
   */

  render() {
    console.log("ForceUpdateUsage_render");
    return (
      <div>
        <p>forceUpdate usage</p>
        <p>forceUpdateUsage_num: {this.state.forceUpdateUsage_num}</p>
      </div>
    );
  }
}
