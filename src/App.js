import "./styles.css";
import SetStateBatchUpdate from "./components/01setStateBatchUpdate";
import HocComponent from "./components/02hoc";
import ReduxUsage from "./pages/ReduxUsage";

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
    </div>
  );
}
