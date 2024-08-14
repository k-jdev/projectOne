import { Route, Routes } from "react-router-dom";

//імпорт роутов
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Rules from "./pages/Rules";
import ChatRules from "./pages/ChatRules";
import ServerRules from "./pages/ServerRules";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  //роути
  return (
    <div className="font-Ubuntu font-bold mr-10 ml-10">
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Rules />} path="/rules"></Route>
        <Route element={<Chat />} path="/chat"></Route>
        <Route element={<ChatRules />} path="/chat_rules"></Route>
        <Route element={<ServerRules />} path="/server_rules"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Login />} path="/login"></Route>
      </Routes>
    </div>
  );
}

export default App;
