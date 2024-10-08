import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="font-Ubuntu font-bold">
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Chat />} path="/chat"></Route>
      </Routes>
    </div>
  );
}

export default App;
