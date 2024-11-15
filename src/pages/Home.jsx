import React from "react";
import Navbar from "../components/Navbar/MainNavbar.jsx";
import Header from "../components/Header/Header.jsx";
import LoginForm from "../components/LoginForm.jsx";

function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <LoginForm />
    </div>
  );
}

export default Home;
