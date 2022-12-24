import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Page404 from "./components/common/Page404";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard";
import Gallery from "./components/Gallery";
import Calculator from "./components/Calculator";
import Navigation from "./components/Navigation";
import PlotConverted from "./components/PlotConverted";
import Slider from "./components/Slider";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <BrowserRouter>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
        <Route path="/calculator" element={<Protected Component={Calculator} />} />
        <Route path="/gallery" element={<Protected Component={Gallery} />} />
        <Route path="/navigation" element={<Protected Component={Navigation} />} />
        <Route path="/plot" element={<Protected Component={PlotConverted} />} />
        <Route path="/slider" element={<Protected Component={Slider} />} />
        <Route path="/todo" element={<Protected Component={TodoLists} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;