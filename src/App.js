import "./styles.css";
import BatchedUpdatesUsageC from "./components/BatchUpdateUsageC";
import BatchedUpdatesUsageF from "./components/BatchUpdateUsageF";
import UnstableBatchedUpdatesUsageC from "./components/UnstableBatchedUpdatesUsageC";
import UnstableBatchedUpdatesUsageF from "./components/UnstableBatchedUpdatesUsageF";

import ForceUpdateUsage from "./components/ForceUpdateUsage";

//  React基本使用
export default function App() {
  return (
    <div className="App">
      {/* <BatchedUpdatesUsageC /> */}
      <BatchedUpdatesUsageF />
      {/* <UnstableBatchedUpdatesUsageC /> */}
      {/* <ForceUpdateUsage /> */}
    </div>
  );
}
