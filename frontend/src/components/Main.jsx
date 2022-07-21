import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Profil from "../pages/Profil";
import Form from "../pages/Form";
import ThingDetail from "../pages/ThingDetail";

export default function Main() {
  return (
    <main className="pt-[100px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/form" element={<Form />} />
        <Route path="/thingdetail/:id" element={<ThingDetail />} />
      </Routes>
    </main>
  );
}
