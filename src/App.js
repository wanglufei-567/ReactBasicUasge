import "./styles.css";
import SetStateBatchUpdate from "./components/setStateBatchUpdate";

//  React常用的api基本使用
export default function App() {
  return (
    <div className="App">
      {/* setState 批量更新机制 */}
      <SetStateBatchUpdate />
    </div>
  );
}
