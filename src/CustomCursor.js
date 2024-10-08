import React, { useState, useEffect } from 'react';
import './styles/CustomCursor.css'; 

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Track the mouse position
    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const glowStyles = {
        left: `${position.x}px`,
        top: `${position.y}px`,
    };

    return <div className="glow-cursor" style={glowStyles}></div>;
}

export default CustomCursor;
