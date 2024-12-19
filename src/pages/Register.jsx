import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/slices/authSlice";
import MainNavbar from "../components/Navbar/MainNavbar";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [focused, setFocused] = useState({
    email: false,
    password: false,
    name: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, user } = useSelector((state) => state.auth);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ email, password, name })).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        navigate("/");
      }
      if (error) {
        console.error("Register error:", error.message || error);
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
      <div>
        <form
          className="mt-40 mx-auto text-white bg-testdark-500 w-1/3 p-6 rounded-lg animate-fadeIn text-center"
          onSubmit={handleRegister}
        >
          {user == null ? (
            <>
              <h1 className="text-2xl mb-6">Реєстрація</h1>
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
                  className="text-black w-full rounded-md p-2 border focus:border-yellow-500 outline-none"
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
                  className="text-black w-full rounded-md p-2 border focus:border-yellow-500 outline-none"
                  type="password"
                  id="password"
                  value={password}
                  onFocus={() => handleFocus("password")}
                  onBlur={(e) => handleBlur("password", e.target.value)}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="relative mb-6">
                <label
                  htmlFor="name"
                  className={`absolute left-2 transition-all duration-300 
                    ${
                      focused.name || name
                        ? "-top-5 text-sm text-yellow-500"
                        : "top-2 text-gray-400"
                    }`}
                >
                  Ім'я користувача
                </label>
                <input
                  className="text-black w-full rounded-md p-2 border focus:border-yellow-500 outline-none"
                  type="text"
                  id="name"
                  value={name}
                  onFocus={() => handleFocus("name")}
                  onBlur={(e) => handleBlur("name", e.target.value)}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white text-xl bg-yellow-700 p-2 rounded-lg hover:scale-105 transition shadow-lg hover:shadow-yellow-500/50"
                disabled={isLoading}
              >
                {isLoading ? "Реєстрація..." : "Зареєструватись"}
              </button>
            </>
          ) : null}
        </form>
      </div>
    </>
  );
}

export default Register;
