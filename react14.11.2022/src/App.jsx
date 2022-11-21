import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, NavBar } from "./components";
import { TestingComponent } from "./components/testingComponenet/testing.component";
import { DvdsPage } from "./pages/dvdsPage/dvds.page";
import { HomePage } from "./pages/homePage/home.page";
import { NotFoundPage } from "./pages/notFoundPage/not.found.page";
//import { HomePage, DvdsPage, NotFoundPage } from "./pages";

export const App = () => {
  return (
    <div className="grid-container">
      <div className="header">
        <NavBar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/dvd-shop" element={<DvdsPage></DvdsPage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
