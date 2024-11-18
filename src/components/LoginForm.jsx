import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register, logout } from "../store/slices/authSlice";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Флаг: регистрация или вход
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.auth);

  const handleAuth = (e) => {
    e.preventDefault();
    if (isRegistering) {
      dispatch(register({ email, password }));
    } else {
      dispatch(login({ email, password }));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Привіт, {email || "користувачу"}!</h1>
          <button onClick={handleLogout}>Вийти</button>
        </div>
      ) : (
        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              isRegistering ? (
                "Registering..."
              ) : (
                "Logging in..."
              )
            ) : isRegistering ? (
              <Link to={"/register"}>Реєстрація</Link>
            ) : (
              <Link to={"/login"}>Ввійти</Link>
            )}
          </button>
          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering
              ? "Переключитись на логін"
              : "Переключитись на реєстрацію"}
          </button>
          {console.log(error)}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
