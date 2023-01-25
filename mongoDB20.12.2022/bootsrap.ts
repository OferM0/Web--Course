import mongoose from "mongoose";

//callBack function
export const bootstrap = async (callBack: Function) => {
  let dbName = "zionet2021";
  let connectionString = `mongodb://localhost:27017/${dbName}`;
  await mongoose.connect(connectionString);
  callBack();
};
