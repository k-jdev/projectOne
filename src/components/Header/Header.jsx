import React from "react";
import fon from "../../assets/fon.png";
import copy from "copy-to-clipboard";
import copyIcon from "../../assets/copyIcon.png";

function Header() {
  return (
    <div className="mt-44 flex place-content-around animate-fadeIn">
      <div className="content-center">
        <div className="text-white text-xl  w-3/4">
          <span className=" bg-yellow-700">Лучший</span> Bedrock сервер
          основаный на Гейзере. Прекрасные плагины которые не мешают ванильной
          игре и доброе комьюнити
        </div>
        <div></div>
        <button
          onClick={() => {
            copy("play.project01.dev");
            alert("Скопировано");
          }}
          className="mt-12 text-white text-xl bg-yellow-700 p-2 rounded-lg flex items-center gap-2 hover:scale-105 transition"
        >
          play.project01.dev
          <img src={copyIcon} alt="" />
        </button>
      </div>

      <div>
        <img src={fon} className="w-2/2" alt="" />
      </div>
    </div>
  );
}

export default Header;
