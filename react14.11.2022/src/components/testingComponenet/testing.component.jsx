import React from "react";

export const TestingComponent = (props) => {
  const getLargeDataFromServer = () => {
    //gonna take 1 sec
    let pr = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("getting large data from dataBase");
        let obj = "good morning";
        resolve(obj);
      }, 1000);
    });
    return pr;
  };
  const handleData = async () => {
    console.log("starting getting large data");
    let result = await getLargeDataFromServer();
    console.log(result);
    console.log("done");
  };
  return (
    <div>
      <h1>Testing Component</h1>
      <button onClick={() => handleData()}>Load</button>
    </div>
  );
};
