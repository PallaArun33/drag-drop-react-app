import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import NodeComponents from './NodeComponents';
import { PiArrowBendUpRightLight } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { toast } from 'react-toastify';

import { Button } from '@mui/material';


const nodeTypes = {
  custom: NodeComponents,
};



const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [connectionType, setConnectionType] = useState('default'); // 'straight' or 'smoothstep'


  
  const connectionLineStyle = {
    strokeWidth: 2,
    stroke: '#000',
  };
  
  const edgeOptions = {
    
  markerEnd: {
      type: 'arrowclosed', // This adds an arrow at the end
      color: '#000',      // Arrow color
      width: 20,          // Arrow size
      height: 20,         // Arrow size
    },
  };
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ 
      ...params,
      type: connectionType, // Use the current connection type 
      ...edgeOptions, // Apply the edge options
    }, eds)),
    [connectionType, setEdges]
  );

  const connectionTypes = [
    { type: 'default', icon: <PiArrowBendUpRightLight size={20} />, tooltip: 'Curved' },
    { type: 'straight', icon: <BsArrowRight size={18} />, tooltip: 'Straight' },
    { type: 'smoothstep', icon: <HiMiniArrowTrendingUp size={18} />, tooltip: 'Smooth' }
  ];
  // const getConnectionTypeName = (type) => {
  //   switch(type) {
  //     case 'default': return 'Curved';
  //     case 'straight': return 'Straight';
  //     case 'smoothstep': return 'Smooth';
  //     default: return type;
  //   }
  // };

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const shapeData = JSON.parse(event.dataTransfer.getData('shape'));

      if (typeof type === 'undefined' || !type) {
        return;
      }

      // Get the exact position relative to the React Flow wrapper
    const reactFlowBounds = event.target.getBoundingClientRect();
    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };

      const newNode = {
        id: `${type}-${nodes.length + 1}`,
        type: 'custom',
        position,
        data: { 
          label: shapeData.name,
          shape: shapeData.id,
          type: shapeData.type
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [nodes, setNodes]
  );

  const resetFlow = () => {
    setNodes([]);
    setEdges([]);
    toast.success('Flow has been reset');
  };

  const saveFlow = async () => {
    if (nodes.length === 0) {
      toast.error('Please create a flow before saving');
      return;
    }

    try {
      // Prepare payload in sequence order
      const payload = {
        nodes: nodes.map(node => ({
          id: node.id,
          type: node.data.shape,
          name: node.data.label
        })),
        edges: edges.map(edge => ({
          source: edge.source,
          target: edge.target,
          type: edge.type
        })),
        createdAt: new Date().toISOString()
      };

      // Call your API here
      // const response = await api.post('/save-flow', payload);
      
      // Mock API call
      console.log('Saving flow:', payload);
      toast.success('Flow saved successfully!');
      
    } catch (error) {
      console.error('Error saving flow:', error);
      toast.error('Failed to save flow');
    }
  };

  console.log("edges", edges)

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
     {/* Action Buttons */}
      <div style={{ 
        position: 'absolute', 
        zIndex: 10, 
        top: 10, 
        right: 10,
        display: 'flex',
        gap: '10px'
      }}>
        <Button 
          variant="contained" 
          color="primary"
          onClick={saveFlow}
          style={{ textTransform: 'none' }}
        >
          Save Flow
        </Button>
        <Button 
          variant="outlined" 
          color="secondary"
          onClick={resetFlow}
          style={{ textTransform: 'none' }}
        >
          Reset
        </Button>
      </div>

      {/* Connection Type Selector */}
      <div style={{ 
        position: 'absolute', 
        zIndex: 10, 
        top: 10, 
        left: 10,
        display: 'flex',
        gap: '5px',
        background: 'white',
        padding: '8px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {connectionTypes.map(({ type, icon, tooltip }) => (
          <div 
            key={type}
            onClick={() => setConnectionType(type)}
            style={{
              padding: '5px',
              cursor: 'pointer',
              border: connectionType === type ? '2px solid #6366f1' : '1px solid #ddd',
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '50px',
              backgroundColor: connectionType === type ? '#eef2ff' : 'white'
            }}
            title={tooltip}
          >
            {icon}
            <span style={{ 
              fontSize: '12px', 
              
              color: connectionType === type ? '#6366f1' : '#666'
            }}>
              {tooltip}
            </span>
          </div>
        ))}
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDragOver={onDragOver}
        onDrop={onDrop}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        defaultEdgeOptions={{
          ...edgeOptions,
          type: connectionType,
        }}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas; 