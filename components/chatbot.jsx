'use client';
import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);
    // Here you can add logic to handle the bot's response
    // For demonstration purposes, let's just echo the user's message
    setTimeout(() => {
      setMessages([...messages, { text: `You said: ${message}`, sender: "bot" }]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default Chatbot;
