import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import logo from "../../assets/logo.svg";
import square from "../../assets/square.svg";
import "./MainNavbar.css";

function MainNavbar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState(location.pathname);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClick = (path) => {
    setActiveButton(path);
  };

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  return (
    <div className="container mx-auto mt-4 flex items-center place-content-between ">
      <Link to="/">
        <div className="flex items-end text-white text-xl animate-fadeIn relative">
          <img src={logo} alt="logo" />
          <div className="flex flex-col relative">
            <p className="hidden sm:block z-30 relative ml-2">ProjectOne</p>
            <img className="z-10 absolute -top-5 left-20" src={square} alt="" />
          </div>
        </div>
      </Link>
      <ul className="flex gap-4 text-lg ">
        <Link className="" to="/" onClick={() => handleClick("/")}>
          <li className={activeButton === "/" ? "active" : "inactive"}>
            <p className=""></p>
            Головна
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

        {user ? (
          <div className="flex flex-col items-center">
            <span className="text-white mb-1">{userData.user.name}</span>
            <button
              className="bg-yellow-700 text-white py-1 px-3 rounded hover:scale-105 transition shadow-lg hover:shadow-yellow-500/50"
              onClick={handleLogout}
            >
              Вийти
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" onClick={() => handleClick("/login")}>
              <li className={activeButton === "/login" ? "active" : "inactive"}>
                Увійти
              </li>
            </Link>
            <Link to="/register" onClick={() => handleClick("/register")}>
              <li
                className={activeButton === "/register" ? "active" : "inactive"}
              >
                Зареєструватись
              </li>
            </Link>
          </div>
        )}
      </ul>
    </div>
  );
}

export default MainNavbar;
