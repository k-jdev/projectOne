import React from "react";
import MainNavbar from "./../components/Navbar/MainNavbar";
import { Link } from "react-router-dom";

import rulesImg from "../assets/rulesImg.png";

function Rules() {
  return (
    <div>
      <MainNavbar />
      <div className="flex mx-48">
        <div className="mt-28 text-5xl text-white container mx-auto">
          <h1 className="mb-8">Правила</h1>
          <ul className="text-white text-xl bg-testdark-500 w-52 rounded-lg p-2">
            <Link to="/chat_rules">
              <li className=" hover:text-gray-400 duration-300">
                • Правила чата
              </li>
            </Link>
            <Link to="/server_rules">
              <li className=" hover:text-gray-400 duration-300">
                • Правила сервера
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <img className="mt-10 animate-wiggle" src={rulesImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Rules;
