import "./App.css";
import { HomePage } from "./pages/home/home.page";
import { NotFoundPage } from "./pages/pageNotFound/pageNotFound.component.page";
import { AddStudentPage } from "./pages/addStudent/addStudent.page";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { Header } from "./components/header/header.component";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/addStudent" element={<AddStudentPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
