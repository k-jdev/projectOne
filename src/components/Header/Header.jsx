import React from "react";
import fon from "../../assets/fon.png";
import copy from "copy-to-clipboard";
import copyIcon from "../../assets/copyIcon.png";

function Header() {
  return (
    <div className="mt-32 flex place-content-around animate-fadeIn">
      <div className="content-center">
        <div className="text-white text-xl  sm:text-xl  w-3/4">
          <span className=" bg-yellow-700">Найкращий</span> Bedrock сервер
          побудований на Гейзері. Прекрасні плагіни, які не заважають ванільній
          грі та добре ком'юніті
        </div>

        <button
          onClick={() => {
            copy("play.project01.dev");
            alert("Скопировано");
          }}
          className="mt-12 text-white text-xl bg-yellow-700 p-2 rounded-lg flex items-center gap-2 hover:scale-105 transition shadow-lg hover:shadow-yellow-500/50"
        >
          play.project01.dev
          <img src={copyIcon} alt="" />
        </button>
      </div>

      <div>
        <img src={fon} className="w-3/2 hidden sm:block" alt="" />
      </div>
    </div>
  );
}

export default Header;
