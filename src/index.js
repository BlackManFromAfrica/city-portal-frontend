import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Main from "./Pages/Main/Main";
import Header from "./Components/Header/Header";
import Auth from "./Pages/Authorization/Auth";
import Profile from "./Pages/Profile/Profile";
import Applications from "./Pages/Applications/Applications";
import Application from "./Pages/Application/Application";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authorization/*" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
