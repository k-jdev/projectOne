import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register, logout } from "../store/slices/authSlice";

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
          <h1>Welcome, {user.name || "User"}!</h1>
          <button onClick={handleLogout}>Logout</button>
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
            {isLoading
              ? isRegistering
                ? "Registering..."
                : "Logging in..."
              : isRegistering
              ? "Register"
              : "Login"}
          </button>
          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Switch to Login" : "Switch to Register"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default LoginForm;
