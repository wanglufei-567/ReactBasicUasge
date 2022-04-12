import "./styles.css";
import SetStateBatchUpdate from "./pages/01setStateBatchUpdate";
import HocComponent from "./pages/02hoc";
import ReduxUsage from "./pages/03ReduxUsage";
import Counter from "./components/counter/Counter";

//  React常用的api基本使用
export default function App() {
  return (
    <div className="App">
      {/* setState 批量更新机制 */}
      {/* <SetStateBatchUpdate /> */}
      {/* React高阶组件使用 */}
      {/* <HocComponent /> */}
      {/* Redux基本使用 */}
      <ReduxUsage userName={"liusuolong"} />
      {/* ReduxToolKit 模式的Redux使用 */}
      {/* <Counter /> */}
    </div>
  );
}
