import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route Component={<Home />} path="/" />
      </Routes>
    </>
  );
}

export default App;
