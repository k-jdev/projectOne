import React from "react";
import MainNavbar from "./../components/Navbar/MainNavbar";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <div>
      <MainNavbar />
      <div className="mt-28 text-5xl text-white container mx-auto">
        <h1 className="mb-8">Правила</h1>
        <ul className=" text-xl ">
          <Link to="/chat_rules">
            <li>- Правила чата</li>
          </Link>
          <Link to="/server_rules">
            <li>- Правила сервера</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Rules;
