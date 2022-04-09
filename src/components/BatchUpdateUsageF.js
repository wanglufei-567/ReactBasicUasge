import React, { useState, useEffect } from "react";

const BatchUpdateUsageF = () => {
  const [num, setNum] = useState(0);
  console.log("num", num);

  useEffect(() => {
    /**
     * 同步代码batchUpdate
     */
    // console.log("wd1", num);
    // setNum(num + 1);
    // console.log("wd2", num);
    // setNum(num + 1);
    // console.log("wd3", num);
    /**
     * 同步代码setState(updater) batchUpdate
     */
    // console.log("wd1", num);
    // setNum(num + 1);
    // setNum((param) => {
    //   console.log("wd2", num);
    //   console.log("wd3", param);
    //   return param + 1;
    // });
    // setNum((param) => {
    //   console.log("wd4", num);
    //   console.log("wd5", param);
    //   return param + 1;
    // });
    // console.log("wd6", num);
    /**
     * 异步代码un_batchUpdate
     */
    // async function test() {
    //   await Promise.resolve(100);
    //   console.log("wd1", num);
    //   setNum(2);
    //   console.log("wd2", num);
    //   setNum(3);
    //   console.log("wd3", num);
    // }
    // test();
  }, []);

  console.log("render");
  return (
    <div>
      <p>batchedUpdateds usage</p>
      <p>num: {num}</p>
    </div>
  );
};

export default BatchUpdateUsageF;
