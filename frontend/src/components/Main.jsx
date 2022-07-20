import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Search from "../pages/Search";
import Form from "../pages/Form";
import ThingDetail from "../pages/ThingDetail";

export default function Main() {
  return (
    <main className="main-container">
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/form" element={<Form />} />
          <Route path="/thingdetail/:id" element={<ThingDetail />} />
        </Routes>
      </div>
    </main>
  );
}
