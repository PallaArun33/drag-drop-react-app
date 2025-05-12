import React from 'react';
import './App.css';
import AgentSidebar from './components/aiagent/AgentSidebar';
import FlowCanvas from './components/aiagent/FlowCanvas';
import './components/aiagent/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const handleDragStart = (event, type, shape) => {
    event.dataTransfer.setData('application/reactflow', type);
    event.dataTransfer.setData('shape', JSON.stringify(shape));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="app">
      <AgentSidebar onDragStart={handleDragStart} />
      <div className="canvas">
        <FlowCanvas />
      </div>
      <ToastContainer position="top-center" autoClose={1500} closeOnClick hideProgressBar />
    </div>
  );
}

export default App; 

