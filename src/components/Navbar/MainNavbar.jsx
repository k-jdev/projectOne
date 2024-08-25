import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import square from "../../assets/square.svg";
import "./MainNavbar.css";

function MainNavbar() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveButton(path);
  };

  return (
    <div className="container mx-auto mt-4 flex items-center place-content-between ">
      <Link to="/">
        <div className="flex items-end text-white text-xl animate-fadeIn relative">
          <img src={logo} alt="logo" />
          <div className="flex flex-col relative">
            <p className="hidden sm:block z-30 relative">ProjectOne</p>
            <img className="z-10 absolute -top-5 left-20" src={square} alt="" />
          </div>
        </div>
      </Link>
      <ul className="flex gap-4 text-lg">
        <Link to="/" onClick={() => handleClick("/")}>
          <li className={activeButton === "/" ? "active" : "inactive"}>
            Главная
          </li>
        </Link>
        <Link to="/chat" onClick={() => handleClick("/chat")}>
          <li className={activeButton === "/chat" ? "active" : "inactive"}>
            Чат
          </li>
        </Link>
        <Link to="/rules" onClick={() => handleClick("/rules")}>
          <li className={activeButton === "/rules" ? "active" : "inactive"}>
            Правила
          </li>
        </Link>
        <div className="flex flex-col items-center">
          <Link to="/login" onClick={() => handleClick("/login")}>
            <li className={activeButton === "/login" ? "active" : "inactive"}>
              Войти
            </li>
          </Link>
          <Link to="/register" onClick={() => handleClick("/register")}>
            <li
              className={activeButton === "/register" ? "active" : "inactive"}
            >
              <button className="">Зарегестрироваться</button>
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default MainNavbar;
