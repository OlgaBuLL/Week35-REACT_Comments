import { useState } from "react";

export default function Chat() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleSendMessage() {
    if (inputText.trim() === "") {
      return;
    }

    const newMessage = {
      id: Date.now(),
      text: inputText.trim(),
      highlighted: true,
    };

    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setInputText("");
  }

  return (
    <div className="container">
      <h1>Comments</h1>

      <input
        type="text"
        value={inputText}
        placeholder="comment here..."
        onChange={handleInputChange}
      ></input>

      <button onClick={handleSendMessage}>Send comment</button>

      <div className="messages-container">
        <ul>
          {messages.map((message) => (
            <li
              key={message.id}
              style={{
                backgroundColor: message.highlighted
                  ? "rgb(225, 247, 233)"
                  : "transparent",
              }}
            >
              {message.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
