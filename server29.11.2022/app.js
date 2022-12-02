import * as dotenv from "dotenv";
import express, { response } from "express";
import { courses } from "./database/data.js";
dotenv.config();
const app = express();
app.use(express.json());
console.log("port", process.env.PORT);

// "/" endpint =>http://localhost:3000
app.get("/", function (req, res) {
  res.send("Hello world!");
});

// "/api/courses" endpoint =>http://localhost:3000/api/courses
app.get("/api/courses", function (req, res) {
  res.send(courses);
});

// "/api/courses/:id" endpoint =>http://localhost:3000/api/courses/:id
app.get("/api/courses/:id", function (req, res) {
  let id = parseInt(req.params.id);
  console.log("req.params.id", id);
  let course = courses.find((c) => c.id === id);
  res.send(course);
});

app.post("/api/courses", function (req, res) {
  if (!req.body.title || req.body.title.length < 2) {
    res.status(400).send({ msg: "title is invalid" });
    return;
  }
  let courseTitle = req.body.title;
  let newCourse = { id: courses.length + 1, title: courseTitle };
  courses.push(newCourse);
  res.status(201).send(newCourse);
});

app.listen(process.env.PORT);
