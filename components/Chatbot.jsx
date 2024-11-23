"use client";
import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm here to help you. Ask me anything about learning concepts!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);

    // Simulate bot response (You can replace this with an AI API integration)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `You asked about "${input}". Let me provide some learning resources!`,
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          Chat
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="w-80 bg-white border border-gray-200 shadow-lg rounded-lg">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between">
            <h2 className="text-lg">Learning Assistant</h2>
            <button onClick={handleToggle} className="text-white font-bold">
              ×
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-blue-100 text-blue-800 self-start"
                    : "bg-gray-200 text-gray-800 self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center p-3 border-t">
            <input
              type="text"
              className="flex-1 border rounded-l-lg p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
