import React, { useState } from "react";
import fon from "../../assets/fon.png";
import copy from "copy-to-clipboard";
import copyIcon from "../../assets/copyIcon.png";

function Header() {
  const [buttonText, setButtonText] = useState("play.project01.dev");

  const handleCopy = () => {
    copy("play.project01.dev");
    setButtonText("Скопійовано!");
    setTimeout(() => setButtonText("play.project01.dev"), 2000); // Повернути текст через 2 секунди
  };

  return (
    <div className="mt-32 flex flex-col md:flex-row place-content-around items-center animate-fadeIn">
      {/* Текстова частина */}
      <div className="content-center text-center md:text-left">
        <div className="text-slate-400 font-normal sm:text-xl w-full md:w-3/4">
          <h1 className="text-white text-4xl font-bold">
            <span className="bg-yellow-700">Найкращий</span> Minecraft сервер
          </h1>
          <p className="mt-4 text-xl">
            PO - сервер можливостей, тут ви можете втілювати свої ідеї в
            будівництві, виживанні та інших аспектах гри.
          </p>
        </div>

        {/* Кнопка */}
        <div className="mt-8 flex justify-center md:justify-start">
          <button
            onClick={handleCopy}
            className="text-white text-xl bg-yellow-700 p-2 rounded-lg flex items-center gap-2 hover:scale-105 transition shadow-lg hover:shadow-yellow-500/50"
          >
            {buttonText}
            <img src={copyIcon} alt="Копіювати" />
          </button>
        </div>
      </div>

      {/* Зображення */}
      <div className="mt-8 md:mt-0">
        <img src={fon} className="w-3/2" alt="Фон" />
      </div>
    </div>
  );
}

export default Header;
