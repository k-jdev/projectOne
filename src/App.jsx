import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Rules from "./pages/Rules";
import ChatRules from "./pages/ChatRules";
import ServerRules from "./pages/ServerRules";

function App() {
  return (
    <div className="font-Ubuntu font-bold">
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Rules />} path="/rules"></Route>
        <Route element={<Chat />} path="/chat"></Route>
        <Route element={<ChatRules />} path="/chat_rules"></Route>
        <Route element={<ServerRules />} path="/server_rules"></Route>
      </Routes>
    </div>
  );
}

export default App;
