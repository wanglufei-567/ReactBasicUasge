import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class UnstableBatchedUpdatesUsage extends Component {
  state = {
    num: 0
  };

  async componentDidMount() {
    const num1 = await Promise.resolve(1);
    console.log("wd1", this.state.num);
    this.setState({ num: num1 });
    console.log("wd2", this.state.num);
    this.setState({ num: num1 + 1 });
    console.log("wd3", this.state.num);

    ReactDOM.unstable_batchedUpdates(() => {
      console.log("wd4", this.state.num);
      this.setState({ num: this.state.num + 1 });
      console.log("wd5", this.state.num);
    });

    const num2 = await Promise.resolve(2);
    ReactDOM.unstable_batchedUpdates(() => {
      console.log("wd6", this.state.num);
      this.setState({ num: num2 });
      console.log("wd7", this.state.num);
    });

    /**
     * render
     * wd1 0
     * render
     * wd2 1
     * render
     * wd3 2
     * wd4 2
     * wd5 2
     * render
     * wd6 3
     * wd7 3
     * render
     */
  }

  // async componentDidMount() {
  //   ReactDOM.unstable_batchedUpdates(async () => {
  //     console.log("wd1", this.state.num);
  //     this.setState({ num: this.state.num + 1 });
  //     console.log("wd2", this.state.num);
  //     this.setState({ num: this.state.num + 1 });
  //     console.log("wd3", this.state.num);
  //     this.setState({ num: this.state.num + 1 });
  //     console.log("wd4", this.state.num);

  //     const num1 = await Promise.resolve(1);
  //     this.setState({ num: num1 });
  //     console.log("wd5", this.state.num);
  //     const num2 = await Promise.resolve(2);
  //     this.setState({ num: num2 });
  //     console.log("wd6", this.state.num);
  //   });
  // }

  render() {
    console.log("render");
    return (
      <div>
        <p>unstable_batchedUpdateds usage</p>
        <p>num: {this.state.num}</p>
      </div>
    );
  }
}
