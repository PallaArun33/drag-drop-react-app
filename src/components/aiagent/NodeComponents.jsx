import React, { memo, useCallback } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { shapeDefinitions } from './shapeDefinitions';
import { MdClose } from 'react-icons/md';


const NodeComponents = ({ data, id }) => {
  const { setNodes } = useReactFlow();

  const IconComponent = shapeDefinitions[data.shape]?.icon;
  const shapeName = shapeDefinitions[data.shape]?.name;

  const { setEdges } = useReactFlow();
  const onDelete = useCallback((e) => {
  e.stopPropagation();
  setNodes((nodes) => {
    const newNodes = nodes.filter((node) => node.id !== id);
    // Use setTimeout to allow React Flow to process the deletion before fitting view
    setTimeout(() => {
      const flowInstance = document.querySelector('.react-flow');
      if (flowInstance) {
        flowInstance.__rf.instance.fitView();
      }
    }, 50);
    return [...newNodes];
  });
  setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));
}, [id, setNodes, setEdges]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5px',
      border: '1px solid #0ec2a1',
      borderRadius: '8px',
      background: '#ebfffb',
      position: 'relative', // Ensure this is relative
    transform: 'none !important', // Prevent any transform issues
    
    }}>
     {/* Delete button - positioned top right */}
      <button
        className="delete-button"
        onClick={onDelete}
        style={{
          position: 'absolute',
          top: '-7px',
          right: '-7px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '16px',
          height: '16px',
          color: '#ff6b6b',
          fontSize: '12px',
          zIndex: 10,
        }}
        title="Delete node"
      >
        <MdClose size={12} />
      </button>

      <Handle type="target" position={Position.Left} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding:"0px",
      }}>
        {IconComponent && (
          <div >
            <IconComponent size={20} />
          </div>
        )}
        <div style={{
          fontSize: '8px',
          textAlign: 'center',
          wordBreak: 'break-word',
          maxWidth: '80px',
        }}>
          {shapeName}
        </div>
      </div>
      <Handle type="source" position={Position.Right} />
      
    </div>
  );
};

export default memo(NodeComponents); 