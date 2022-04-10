import React, { Component, useState } from "react";
/**
 * 高阶组件基础使用之强化props
 */

//  原组件
function WrapComponent(props) {
  const { classHocProps, functionHocProps } = props;
  return (
    <div>
      {classHocProps && (
        <p>this is classHocProps: {JSON.stringify(classHocProps)}</p>
      )}
      {functionHocProps && (
        <p>this is functionHocProps: {JSON.stringify(functionHocProps)}</p>
      )}
    </div>
  );
}

// class高阶组件
const classHoc = (WrapComponent) => {
  return class Index extends Component {
    state = {
      classHocProps: {
        name: "classHoc"
      }
    };
    render() {
      return <WrapComponent {...this.props} {...this.state} />;
    }
  };
};

// function 高阶组件
const functionHoc = (WrapComponent) => {
  return function Index(props) {
    const [state] = useState({
      functionHocProps: {
        name: "functionHoc"
      }
    });
    return <WrapComponent {...props} {...state} />;
  };
};

const ClassHocCoponent = classHoc(WrapComponent);
const FuntionHocComponet = functionHoc(WrapComponent);

class StrengthenProps extends Component {
  render() {
    return (
      <div>
        <ClassHocCoponent />
        <FuntionHocComponet />
      </div>
    );
  }
}

export default StrengthenProps;
