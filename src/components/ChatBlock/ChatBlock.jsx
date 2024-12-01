import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/slices/chatSlice";

function ChatBlock() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    // Подключение к WebSocket серверу
    const socket = new WebSocket("ws://localhost:3001"); // Укажите адрес WebSocket сервера

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(addMessage(data)); // Отправляем сообщение в Redux
    };

    return () => {
      socket.close(); // Закрытие соединения при размонтировании
    };
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <div className="mt-10 h-dvh text-white bg-slate-800 rounded-xl">
        {messages.length === 0 ? (
          <p className="text-center text-white text-2xl p-5">
            Поки немає повідомлень
          </p>
        ) : (
          messages.map((msg, index) => (
            <li className="mx-4" key={index}>
              <strong className="text-yellow-500">{msg.player}:</strong>{" "}
              {msg.message}
            </li>
          ))
        )}
      </div>
      {/* <input
        type="text"
        placeholder="Type a message..."
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSendMessage({
              player: "You",
              message: event.target.value,
            });
            event.target.value = "";
          }
        }}
      /> */}
    </div>
  );
}

export default ChatBlock;
