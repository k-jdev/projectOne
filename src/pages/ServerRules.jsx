import React from "react";
import MainNavbar from "../components/Navbar/MainNavbar";

function ServerRules() {
  return (
    <div>
      <MainNavbar />
      <div className="text-white text-lg container mx-auto mt-8">
        <p>
          Здесь ты можешь узнать все правила сервера и ответы на сопутствующие
          вопросы. Если понадобится, ты всегда можешь обратиться в чат или в{" "}
          <span className="underline">
            <a href="https://t.me/projectone_support">поддержку</a>
          </span>{" "}
          - тебе помогут при первой возможности.
        </p>
        <br />
        <br />
        <p className="text-xl text-yellow-500">На сервере запрещены: </p>

        <p>- 1. Убийство/снятие тотема игрока без его согласия. </p>

        <p>
          - 2. Использование ресурспаков (X-Ray, ночное зрение и т.п), модов и
          клиентов, дающих преимущество перед другими игроками (т.е. читов).
        </p>

        <p>
          {" "}
          - 2.1. Если сомневаешься, можно ли использовать определённый пак/мод,
          спроси у админов.
        </p>

        <p>
          - 3. Любые умышленные действия, приводящие к падению TPS на
          сервере/FPS у игроков или способствующих крашу сервера.
        </p>

        <p>
          - 4. Продажа дешевле, чем в списке минимальных цен - но только если об
          этом узнают админы или сдаст покупатель.
        </p>

        <p>
          - 5. Гриферство и самовольное изменение ландшафта/чужих построек.
          Хочешь что-то изменить в городе/постройке - спрашивай у их владельца.
        </p>
        <br />
        <br />
        <p className="text-xl text-yellow-500">Частично разрешено:</p>

        <p>
          - 1. Вторые аккаунты (твинки) на сервере разрешены, но только по
          одному на человека. Если ты хочешь зайти на сервер с твинка,
          обязательно предупреди админов для добавления в вайтлист.
        </p>
        <br />
        <br />
        <p className="text-xl text-yellow-500">
          {" "}
          Валюта сервера - алмазная руда (АР) и алмазы, выбранные игроками.
        </p>

        <p>
          {" "}
          Мы никак не ограничиваем развитие игроков - всё зависит лишь от вас и
          вашего умения игры. Но не стоит нарушать договорённости игроков об
          определённых рамках развития - например, не отправляться в Энд до
          того, как дракон будет убит.
        </p>

        <p>
          {" "}
          Ты можешь предлагать любые (в пределах разумного) идеи для добавления
          на сервер или новый функционал бота - мы прислушаемся.
        </p>

        <p>
          {" "}
          Также, чтобы у тебя всегда была возможность зайти на сервер, просим
          отключить автообновление Майнкрафта и обновлять его только при
          появлении в канале сервера новости о переходе на новую версию.
          Объясняется это тем, что переход всех серверных плагинов и ядра
          (разработкой которых занимаемся не мы) занимает определённое время.
        </p>
        <br />
        <br />
        <p className="text-xl text-yellow-500">
          Состав администрации
          <br />
          На момент изменения статьи состав админов сервера таков:
        </p>

        <p> - Денди - @Dendy_Two; создатель сервера, тех. админ.</p>

        <p> - Люц (Люцик) - @zxc_nightmares; админ в игре.</p>

        <p> - Элит (Элита) - @ElliTe_UK47; админ в игре, иногда тех. админ.</p>

        <p> - Али - @Coooki4, админ в игре.</p>

        <p> - Айрик - @aurikqq; тех. админ.</p>
        <br />
        <br />
        <p>
          <p className="text-xl text-yellow-500">Заключение</p>
          Эта статья будет дополняться в будущем, а игроки будут уведомлены об
          этом. Надеемся на твое понимание и соблюдение правил. Приятной игры!
        </p>
        <br />
        <br />
        <p>UPD: 06.07.2024</p>

        <p>От администрации Project One с заботой о игроках</p>

        <p>Составлено админами, написано Айриком</p>
      </div>
    </div>
  );
}

export default ServerRules;
