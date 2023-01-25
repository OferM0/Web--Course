import { bootstrap } from "./bootsrap";
//import { Course } from "./models/course/course.model";
import { getCoursesAsync } from "./services/course.service";
import express, { Request, Response } from "express";
const app = express();

// const start = async () => {
// console.log("Connecting to mongodb is up");
// write locic
// let course = new Course({
//   title: "NodeJs Course",
//   description: "nice course",
//   author: "Elias",
//   tags: ["mongoose", "express"],
//   isPublish: true,
// });
// addCourseAsync(course);
// let courses = await getCoursesAsync();
// console.log(courses);
// console.log("end");
// };

const start = async () => {
  app.get("/courses", async (req: Request, res: Response) => {
    let courses = await getCoursesAsync();
    res.json(courses);
  });

  app.listen(3000, () => {
    console.log("server listening on port 3000");
  });
};

bootstrap(start);
