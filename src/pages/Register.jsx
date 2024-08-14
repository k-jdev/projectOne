import React from "react";
import MainNavbar from "./../components/Navbar/MainNavbar";

function Register() {
  return (
    <div>
      <MainNavbar />
      <form className="mt-40 mx-auto text-white" action="" method="get">
        <div>
          <label htmlFor="name">Введи свой ник в игре: </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="name">Введи свою почту: </label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="name">Введи пароль: </label>
          <input type="password" id="pass" />
        </div>
      </form>
    </div>
  );
}

export default Register;
