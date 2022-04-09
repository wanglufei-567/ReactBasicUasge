import React, { useState, useEffect } from "react";

const BatchUpdateUsageF = () => {
  const [num, setNum] = useState(0);
  console.log("num", num);

  /**
   * 同步代码batchUpdate
   */
  // useEffect(() => {
  //   console.log("wd1", num);
  //   setNum(num + 1);
  //   console.log("wd2", num);
  //   setNum(num + 1);
  //   console.log("wd3", num);
  //   /**
  //    * num 0
  //    * render
  //    * wd1 0
  //    * wd2 0
  //    * wd3 0
  //    * num 1
  //    * render
  //    */
  // }, []);

  /**
   * 同步代码setState(updater) batchUpdate
   */
  // useEffect(() => {
  //   console.log("wd1", num);
  //   setNum(num + 1);
  //   setNum((param) => {
  //     console.log("wd2", num);
  //     console.log("wd3", param);
  //     return param + 1;
  //   });
  //   setNum((param) => {
  //     console.log("wd4", num);
  //     console.log("wd5", param);
  //     return param + 1;
  //   });
  //   console.log("wd6", num);
  //   /**
  //    * num 0
  //    * render
  //    * wd1 0
  //    * wd6 0
  //    * wd2 0
  //    * wd3 1
  //    * wd4 0
  //    * wd5 2
  //    * num 3
  //    * render
  //    */
  // }, []);

  /**
   * 异步代码un_batchUpdate
   */
  useEffect(() => {
    async function test() {
      await Promise.resolve(100);
      console.log("wd1", num);
      setNum(1);
      console.log("wd2", num);
      setNum(2);
      console.log("wd3", num);
    }
    test();
    /**
     * num 0
     * render
     * wd1 0
     * num 1
     * render
     * wd2 0
     * num 2
     * render
     * wd3 0
     */
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
