import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { assets } from "../assets/assets";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  // Ref for the chat messages container
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSend = async () => {
    if (inputMessage.trim() === "") {
      return; // Prevent sending empty messages
    }

    // Add user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: inputMessage },
    ]);

    setInputMessage(""); // Clear input field
    setIsThinking(true); // Show "thinking" indicator

    try {
      // Send user message to Flask API
      const response = await axios.post("http://127.0.0.1:5000/", {
        message: inputMessage,
      });

      // Add chatbot response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: response.data.answer },
      ]);
    } catch (error) {
      console.error("Error communicating with chatbot API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setIsThinking(false); // Remove "thinking" indicator
    }
  };

  // Auto-scroll to the bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {/* Chatbot Button */}
      <button
        className="fixed bottom-3 left-3 focus:outline-none"
        onClick={toggleChat}
      >
        <img
          src={assets.chatbot}
          alt="Chatbot Icon"
          className="w-28 h-28 animate-vibrate hover:scale-105 hover:opacity-80 active:scale-95 hover:rotate-12 transition-transform"
        />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 left-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="bg-[#068082] text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
            <h4 className="text-lg font-medium">Medical Chatbot</h4>
            <button
              className="text-white font-bold hover:text-gray-300"
              onClick={toggleChat}
            >
              ✖
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto max-h-60">
            {/* Display Chat Messages */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "user"
                    ? "text-right text-[#068082]"
                    : "text-left text-gray-600"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}

            {/* Thinking Indicator */}
            {isThinking && (
              <div className="text-left text-gray-500 italic">
                Chatbot is typing...
              </div>
            )}

            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center border-t border-gray-300 px-4 py-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring focus:ring-[#068082]"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="ml-2 bg-[#068082] text-white px-2 py-1 rounded-md hover:bg-[#23aeb1] focus:outline-none"
              onClick={handleSend}
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
