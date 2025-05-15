import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";
import './styles/ChatBot.css';
import { Commet } from 'react-loading-indicators';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://4a00-34-125-186-65.ngrok-free.app/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('API error!!', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Something went wrong!!' }]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
        <h1 style={{textAlign:'center', color: '#fff'}}>Online ChatBot 💻</h1>
        <div className="chat-container">
        <div className="chat-box">
            {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
                <div className="message-text">{msg.text}</div>
            </div>
            ))}
            {loading && <div className="chat-message bot"><div className="message-text">Typing... <Commet color="red" style={{fontSize:5}} /></div></div>}
        </div>
        <div className="input-area">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            />
            <IoIosSend  onClick={sendMessage} color='lightblue' size={32} style={{justifyContent: 'center', alignSelf: 'center', cursor: 'pointer', marginLeft: 10, padding: 5}}/> 
        </div>
        </div>
    </>
  );
};

export default ChatBot;
