import mongoose from "mongoose";
//schema is to define the shape of document in collection
//collection ~ table
//document ~ row

//~ sql create table
export const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublish: Boolean,
});
