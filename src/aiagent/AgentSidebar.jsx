import React, { useRef, useState } from 'react';
import { shapeDefinitions } from './shapeDefinitions';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const AgentSidebar = ({ onDragStart }) => {
    const shapeListRef = useRef(null);
    const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });

    const scrollUp = () => {
        if (shapeListRef.current) {
        shapeListRef.current.scrollTop -= 50;
        }
    };

    const scrollDown = () => {
        if (shapeListRef.current) {
        shapeListRef.current.scrollTop += 50;
        }
    };

    const handleMouseEnter = (e, shapeName) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip({
        show: true,
        text: shapeName,
        x: rect.right + 10,  // Position to the right of the icon
        y: rect.top + (rect.height / 2) // Center vertically with the icon
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ show: false, text: '', x: 0, y: 0 });
    };

    return (
        <div className="agent-sidebar rounded-full border border-gray-200 shadow-sm">
        {/* Top Expand Icon */}
        <div
            className="cursor-pointer p-2 rounded-t-full hover:bg-gray-200 transition-all duration-200 flex justify-center items-center"
            onClick={scrollUp}
        >
            <MdExpandLess size={24} className="text-gray-600 hover:text-gray-900" />
        </div>
        <div 
            className="shape-list min-h-[300px] overflow-y-auto scrollbar-hide" 
            ref={shapeListRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {Object.values(shapeDefinitions).map((shape) => {
            const IconComponent = shape.icon;
            return (
                <div
                key={shape.id}
                className="shape-item hover:bg-gray-50 transition-all duration-200 cursor-move relative"
                draggable
                onDragStart={(event) => onDragStart(event, shape.type, shape)}
                onMouseEnter={(e) => handleMouseEnter(e, shape.name)}
                onMouseLeave={handleMouseLeave}
                >
                <span className="shape-icon">
                    <IconComponent size={25} className="text-gray-600 hover:text-gray-900" />
                </span>
                </div>
            );
            })}
        </div>
        {/* Bottom Expand Icon */}
        <div
            className="cursor-pointer rounded-b-full p-2 hover:bg-gray-200 transition-all duration-200 flex justify-center items-center"
            onClick={scrollDown}
        >
            <MdExpandMore size={24} className="text-gray-600 hover:text-gray-900" />
        </div>

        {/* Tooltip - positioned to the right of the icon */}
        {tooltip.show && (
            <div
            className="fixed bg-gray-800 text-white px-2 py-1 rounded text-sm pointer-events-none z-50"
            style={{
                left: tooltip.x,
                top: tooltip.y,
                transform: 'translateY(-50%)' // Center vertically
            }}
            >
            {tooltip.text}
            <div 
                className="absolute top-1/2 left-[-4px] w-2 h-2 bg-gray-800 transform -translate-y-1/2 rotate-45"
                style={{
                left: '-4px',
                top: '50%',
                transform: 'translateY(-50%) rotate(45deg)'
                }}
            ></div>
            </div>
        )}
        </div>
    );
};

export default AgentSidebar;