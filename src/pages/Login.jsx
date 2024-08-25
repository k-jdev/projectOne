import React from "react";
import MainNavbar from "./../components/Navbar/MainNavbar";

function Login() {
  return (
    <div>
      <MainNavbar />
      <form
        className="mt-40 mx-auto text-white bg-slate-800 w-1/3 p-6 rounded-lg animate-fadeIn text-center place-self-center"
        action=""
        method="get"
      >
        <h1 className="text-2xl mb-6 text-center">Войти</h1>

        <div className="mb-4 w-full flex flex-col items-center">
          <label htmlFor="name">Ник </label>
          <input className="text-black w-2/3" type="text" id="name" />
        </div>
        <div className="mb-4 w-full flex flex-col items-center">
          <label htmlFor="pass">Пароль </label>
          <input className="text-black w-2/3" type="password" id="pass" />
        </div>
        <button className="place-content-center">Отправить</button>
      </form>
    </div>
  );
}

export default Login;
