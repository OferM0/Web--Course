import "./App.css";
import {
  AboutPage,
  MoviesPage,
  ContactsPage,
  GamesPage,
  HomePage,
  NotFoundPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { SideBar } from "./components/sideBar/sidebar.component";

function App() {
  return (
    <div className="app">
      <SideBar></SideBar>
      <Routes>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="/games" element={<GamesPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
