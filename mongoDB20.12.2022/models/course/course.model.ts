import mongoose, { ObjectId } from "mongoose";
import { courseSchema } from "./course.schema";
//Model compile our schema into model in order to create instance
//based on this model in MongoDB

export interface ICourse {
  _id?: ObjectId;
  title: String;
  description: String;
  author: String;
  tags: [String];
  date?: Date;
  isPublish: Boolean;
}
//~ sql adapter
export const Course = mongoose.model<ICourse>("Course", courseSchema);
