import { Course, ICourse } from "../models/course/course.model";

export const addCourseAsync = async (course: ICourse) => {
  let courseModel = new Course(course);
  await courseModel.save();
};

export const getCoursesAsync = async (): Promise<ICourse[]> => {
  return await Course.find();
};
