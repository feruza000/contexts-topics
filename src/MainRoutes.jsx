import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTopic from "./components/AddTopic/AddTopic";
import Home from "./components/Home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTopic />} />
    </Routes>
  );
};

export default MainRoutes;
