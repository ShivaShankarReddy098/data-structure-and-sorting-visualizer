"use client";
import React, { useEffect, useRef, useState } from "react";
import { aiRes } from "@/utils/apiChat";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm here to help you. Ask me anything about learning concepts!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loader for bot response
  const messagesEndRef = useRef(null); // For auto-scroll

  // Toggle chat window
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Send user input and fetch bot response
  const handleSend = () => {
    if (input.trim() === "" || isLoading) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);
    setIsLoading(true); // Show loader
    const fetchBotResponse = async () => {
      try {
        const query = `${input}, give content as I asked, do not give more if not requested.`;
        const response = await aiRes(query);

        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: response.replace(/```|[*]+/g, ""), // Clean markdown formatting
          },
        ]);
      } catch (error) {
        console.error("Error fetching bot response:", error);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Oops! Something went wrong. Please try again.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBotResponse();
    setInput(""); // Clear input field
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          Chat
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="w-80 bg-white border border-gray-200 shadow-lg rounded-lg flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between">
            <h2 className="text-lg font-semibold">Learning Assistant</h2>
            <button
              onClick={handleToggle}
              className="text-white font-bold hover:opacity-80"
            >
              ×
            </button>
          </div>

          {/* Message Area */}
          <div className="p-4 flex-1 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  msg.sender === "bot"
                    ? "bg-blue-100 text-blue-800 self-start"
                    : "bg-gray-200 text-black self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Loader */}
            {isLoading && (
              <div className="text-gray-500 text-sm animate-pulse">
                Thinking...
              </div>
            )}

            {/* Auto-scroll Ref */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="flex items-center p-3 border-t">
            <input
              type="text"
              className="flex-1 border rounded-l-lg p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading} // Disable input while loading
            />
            <button
              onClick={handleSend}
              className={`bg-blue-600 text-white px-4 py-2 rounded-r-lg ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
              disabled={isLoading}
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
