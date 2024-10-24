import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ChatBot from 'react-chatbotify';
import 'react-chatbotify/build/index.css'; // Ensure you import the styles
import './App.css';

function ChatApp() {
  const [count, setCount] = useState(0);

  const flow = {
    "id": "chatbot-flow",
    "messages": [
      {
        "id": "1",
        "message": "Hello! How can I assist you today?",
        "trigger": "user-response" // Trigger for the next part of the flow
      }
    ],
    "states": [
      {
        "id": "user-response",
        "user": true,
        "message": "Please type your question.",
        "next": "1" // Loop back to the first message or handle responses
      }
    ]
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChatBot flow={flow} />
    </>
  );
}

export default ChatApp;
