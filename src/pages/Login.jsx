
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";
import MainNavbar from "../components/Navbar/MainNavbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <>
      <MainNavbar />
      <div>
        <form
          className="mt-40 mx-auto text-white bg-slate-800 w-1/3 p-6 rounded-lg animate-fadeIn text-center"
          onSubmit={handleLogin}
        >
          {user == null ? (
            <>
              <h1 className="text-2xl mb-6">Увійти</h1>
              <div className="mb-4">
                <label htmlFor="email">E-mail</label>
                <input
                  className="text-black w-full"
                  type="email"
                  id="email"
                  placeholder="Уведіть e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Пароль</label>
                <input
                  className="text-black w-full"
                  type="password"
                  id="password"
                  placeholder="Введіть пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
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
