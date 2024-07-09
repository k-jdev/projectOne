import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

function MainNavbar() {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveButton(path);
  };

  return (
    <div className="container mx-auto mt-8 flex items-center place-content-between">
      <Link to="/">
        <div className="flex items-end text-white text-base">
          <img src={logo} alt="logo" />
          <p>ProjectOne</p>
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
      </ul>
    </div>
  );
}

export default MainNavbar;
