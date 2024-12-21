import React, { useState, useEffect } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false); // Стан для drop-down меню
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false); // Закриваємо меню при переході до десктопного вигляду
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClick = (path) => {
    setActiveButton(path);
    setMenuOpen(false); // Закриваємо меню після кліку на посилання
  };

  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container mx-auto mt-4 flex items-center justify-between">
      <Link to="/">
        <div className="flex items-end text-white text-xl relative">
          <img src={logo} alt="logo" />
          <div className="flex flex-col relative">
            <p className="hidden sm:block z-30 relative ml-2">ProjectOne</p>
            <img className="z-10 absolute -top-5 left-20" src={square} alt="" />
          </div>
        </div>
      </Link>

      {/* Кнопка для відкриття меню */}
      <button
        className="block md:hidden text-white "
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Меню навігації */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute md:static top-16 left-0 w-full md:w-auto md:flex bg-testdark-500 md:bg-transparent z-50 text-lg`}
      >
        <Link to="/" onClick={() => handleClick("/")}>
          <li
            className={`${
              activeButton === "/" ? "active" : "inactive"
            } px-4 py-2 md:py-0`}
          >
            Головна
          </li>
        </Link>
        <Link to="/chat" onClick={() => handleClick("/chat")}>
          <li
            className={`${
              activeButton === "/chat" ? "active" : "inactive"
            } px-4 py-2 md:py-0`}
          >
            Чат
          </li>
        </Link>
        <Link to="/rules" onClick={() => handleClick("/rules")}>
          <li
            className={`${
              activeButton === "/rules" ? "active" : "inactive"
            } px-4 py-2 md:py-0`}
          >
            Правила
          </li>
        </Link>

        {user ? (
          <div className="flex flex-col items-center px-4 py-2 md:py-0">
            <span className="text-white mb-1">{userData.user.name}</span>
            <button
              className="bg-yellow-700 text-white py-1 px-3 rounded hover:scale-105 transition shadow-lg hover:shadow-yellow-500/50"
              onClick={handleLogout}
            >
              Вийти
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-2 px-4 py-2 md:py-0">
            <Link to="/login" onClick={() => handleClick("/login")}>
              <li
                className={`${
                  activeButton === "/login" ? "active" : "inactive"
                }`}
              >
                Увійти
              </li>
            </Link>
            <Link to="/register" onClick={() => handleClick("/register")}>
              <li
                className={`${
                  activeButton === "/register" ? "active" : "inactive"
                }`}
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
