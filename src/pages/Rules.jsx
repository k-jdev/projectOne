import React from "react";
import MainNavbar from "./../components/Navbar/MainNavbar";
import { Link } from "react-router-dom";

import rulesImg from "../assets/rulesImg.png";

function Rules() {
  return (
    <div>
      <MainNavbar />
      <div className="flex flex-col md:flex-row items-center mx-4 md:mx-16 lg:mx-48 mt-10 md:mt-28">
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl mb-6">Правила</h1>
          <ul className="text-xl bg-testdark-500 rounded-lg p-4 space-y-4">
            <Link to="/chat_rules">
              <li className="hover:text-gray-400 duration-300">
                • Правила чата
              </li>
            </Link>
            <Link to="/server_rules">
              <li className="hover:text-gray-400 duration-300">
                • Правила сервера
              </li>
            </Link>
          </ul>
        </div>
        <div className="mt-6  md:mt-0 md:ml-10 lg:ml-24">
          <img
            className="w-64 md:w-80 lg:w-auto animate-wiggle"
            src={rulesImg}
            alt="Правила"
          />
        </div>
      </div>
    </div>
  );
}

export default Rules;
