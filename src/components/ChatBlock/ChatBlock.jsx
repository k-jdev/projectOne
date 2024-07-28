import React, { useState, useEffect } from "react";
import io from "socket.io-client";

function ChatBlock() {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io("http://localhost:5000");
    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("Server connected");
    });

    socketInstance.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const handleSendMessage = (message) => {
    if (socket) {
      socket.emit("message", message);
    }
  };

  return (
    <div className="container mx-auto">
      <div className=" mt-10 h-dvh text-white bg-slate-800 rounded-xl">
        {messages.map((message) => (
          <p key={message.player}>
            {message.player}: {message.message}
          </p>
        ))}
      </div>
      <input
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
      />
    </div>
  );
}

export default ChatBlock;
