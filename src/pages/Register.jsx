import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../store/slices/authSlice";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ email, password })).then((action) => {
      if (action.meta.requestStatus === "fulfilled") {
        navigate("/"); // Перенаправление на главную страницу
      }
    });
  };

  return (
    <div>
      <form
        className="mt-40 mx-auto text-white bg-slate-800 w-1/3 p-6 rounded-lg animate-fadeIn text-center"
        onSubmit={handleRegister}
      >
        <h1 className="text-2xl mb-6">Реєстрація</h1>
        <div className="mb-4">
          <label htmlFor="email">E-mail</label>
          <input
            className="text-black w-full"
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
            className="text-black w-full"
            type="password"
            id="password"
            placeholder="Уведіть пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded"
          disabled={isLoading}
        >
          {isLoading ? "Реєстрація..." : "Зареєструватись"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}

export default Register;
