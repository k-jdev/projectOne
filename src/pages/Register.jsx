import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/slices/authSlice";
import MainNavbar from "../components/Navbar/MainNavbar";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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
        console.error("Login error:", error.message || error);
      }
    });
  };
  console.log(user);

  return (
    <>
      <MainNavbar />
      <div>
        <form
          className="mt-40 mx-auto text-white bg-slate-800 w-1/3 p-6 rounded-lg animate-fadeIn text-center"
          onSubmit={handleRegister}
        >
          {user == null ? (
            <>
              {" "}
              <h1 className="text-2xl mb-6">Реєстрація</h1>
              <div className="mb-4">
                <label htmlFor="email">E-mail</label>
                <input
                  className="text-black w-full rounded-md p-0.5 mt-1"
                  type="email"
                  id="email"
                  placeholder="Введите e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Пароль</label>
                <input
                  className="text-black w-full rounded-md p-0.5 mt-1"
                  type="password"
                  id="password"
                  placeholder="Введіть пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Ім'я користувача</label>
                <input
                  className="text-black w-full rounded-md p-0.5 mt-1"
                  type="text"
                  id="name"
                  placeholder="JhonDoe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className=" text-white text-xl bg-yellow-700 p-2 rounded-lg hover:scale-105 transition shadow-lg hover:shadow-yellow-500/50"
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
