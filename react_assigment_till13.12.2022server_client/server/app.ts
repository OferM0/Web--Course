//import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import { Student } from "./database/models/student.model";
import { arrayOfStudent } from "./database/student.db";
import { logger } from "./myMiddleWare";
import cors from "cors";

let data = arrayOfStudent;
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World");
});

app.get("/api/students", function (req: Request, res: Response) {
  console.log("handle request");
  let students = data;
  res.send(students);
});

app.post("/api/students", function (req: Request, res: Response) {
  let idVal;
  if (data.length > 0) {
    idVal = data[data.length - 1].id + 1;
  } else {
    idVal = 1;
  }
  let student: Student = {
    id: idVal,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };
  data.push(student);
  res.send(student);
});

app.delete("/api/students/:id", function (req: Request, res: Response) {
  let id = Number(req.params.id);
  let temp = data.filter((s) => s.id !== id);
  data = temp;
  res.send();
});

app.delete("/api/students/:firstName", function (req: Request, res: Response) {
  let firstName = req.params.firstName;
  let temp = data.filter((s) => s.firstName !== firstName);
  data = temp;
  res.send();
});

app.listen(3000, () => {
  console.log("app is running");
});
