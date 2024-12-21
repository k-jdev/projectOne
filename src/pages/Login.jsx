import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";
import MainNavbar from "../components/Navbar/MainNavbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState({ email: false, password: false });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password })).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        navigate("/");
      } else if (action.meta.requestStatus === "rejected") {
        if (error) {
          console.error("Login error:", error.message || error);
        }
      }
    });
  };

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    setFocused((prev) => ({ ...prev, [field]: value !== "" }));
  };

  return (
    <>
      <MainNavbar />
      <div className="flex justify-center items-center min-h-screen ">
        <form
          className="w-11/12 sm:w-2/3 md:w-1/3 text-white bg-testdark-500 p-6 rounded-lg animate-fadeIn text-center shadow-lg"
          onSubmit={handleLogin}
        >
          {user == null ? (
            <>
              <h1 className="text-xl md:text-2xl mb-6">Увійти</h1>
              <div className="relative mb-6">
                <label
                  htmlFor="email"
                  className={`absolute left-2 transition-all duration-300 
                    ${
                      focused.email || email
                        ? "-top-5 text-sm text-yellow-500"
                        : "top-2 text-gray-400"
                    }`}
                >
                  E-mail
                </label>
                <input
                  className="text-black w-full rounded-md p-3 border focus:border-yellow-500 outline-none"
                  type="email"
                  id="email"
                  value={email}
                  onFocus={() => handleFocus("email")}
                  onBlur={(e) => handleBlur("email", e.target.value)}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="relative mb-6">
                <label
                  htmlFor="password"
                  className={`absolute left-2 transition-all duration-300 
                    ${
                      focused.password || password
                        ? "-top-5 text-sm text-yellow-500"
                        : "top-2 text-gray-400"
                    }`}
                >
                  Пароль
                </label>
                <input
                  className="text-black w-full rounded-md p-3 border focus:border-yellow-500 outline-none"
                  type="password"
                  id="password"
                  value={password}
                  onFocus={() => handleFocus("password")}
                  onBlur={(e) => handleBlur("password", e.target.value)}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white text-lg md:text-xl bg-yellow-700 p-3 rounded-lg w-full hover:scale-105 transition shadow-lg hover:shadow-yellow-500/50"
                disabled={isLoading}
              >
                {isLoading ? "Вхід..." : "Увійти"}
              </button>
            </>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default Login;
