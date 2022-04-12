import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/counter/counterSlice";

// configureStore内置了createStore,且默认包含的一些Redux中间件
export default configureStore({
  // “切片”是应用中单个功能的 Redux reducer 逻辑和 action 的集合, 通常一起定义在一个文件中。
  // 该名称来自于将根 Redux 状态对象拆分为多个状态“切片”。
  reducer: {
    counter: counterReducer
  }
});
