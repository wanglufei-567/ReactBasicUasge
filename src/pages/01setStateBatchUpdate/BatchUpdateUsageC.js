import React, { Component } from "react";

export default class BatchedUpdatesUsage extends Component {
  state = {
    num: 0
  };

  /**
   * 同步代码batchUpdate
   */
  // componentDidMount() {
  //   console.log("wd1", this.state.num);
  //   this.setState({ num: this.state.num + 1 });
  //   console.log("wd2", this.state.num);
  //   this.setState({ num: this.state.num + 1 });
  //   console.log("wd3", this.state.num);
  //   /**
  //    * render
  //    * wd1 0
  //    * wd2 0
  //    * wd3 0
  //    * render
  //    */
  // }

  /**
   * 同步代码this.setState(updater) batchUpdate
   */
  // componentDidMount() {
  //   console.log("wd1", this.state.num);
  //   this.setState({ num: this.state.num + 1 });
  //   this.setState((state) => {
  //     console.log("wd2", this.state.num);
  //     console.log("wd3", state.num);
  //     return {
  //       ...state,
  //       num: state.num + 1
  //     };
  //   });
  //   this.setState((state) => {
  //     console.log("wd4", this.state.num);
  //     console.log("wd5", state.num);
  //     return {
  //       ...state,
  //       num: state.num + 1
  //     };
  //   });
  //   console.log("wd6", this.state.num);

  //   /**
  //    * render
  //    * wd1 0
  //    * wd6 0
  //    * wd2 0
  //    * wd3 0
  //    * wd4 0
  //    * wd5 0
  //    * render
  //    */
  // }

  /**
   * 异步代码un_batchUpdate
   */
  async componentDidMount() {
    await Promise.resolve(100);
    console.log("wd4", this.state.num);
    this.setState({ num: this.state.num + 1 });
    console.log("wd5", this.state.num);
    this.setState({ num: this.state.num + 1 });
    console.log("wd6", this.state.num);
    /**
     * render
     * wd4 0
     * render
     * wd5 1
     * render
     * wd6 2
     */
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>batchedUpdateds usage</p>
        <p>num: {this.state.num}</p>
      </div>
    );
  }
}
