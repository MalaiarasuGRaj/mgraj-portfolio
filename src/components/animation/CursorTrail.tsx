
import { useEffect, useState } from 'react';

type TrailDot = {
  x: number;
  y: number;
  opacity: number;
  id: number;
};

export const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Only add new dot when mouse moves
    if (mousePosition.x !== 0 || mousePosition.y !== 0) {
      // Add new dot
      const newDot = {
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: 0.8,
        id: counter,
      };
      
      setCounter(prev => prev + 1);
      
      // Update trail with new dot and decrease opacity of existing ones
      setTrail(prev => {
        const updatedTrail = prev
          .map(dot => ({ ...dot, opacity: dot.opacity - 0.08 }))
          .filter(dot => dot.opacity > 0);
          
        return [newDot, ...updatedTrail].slice(0, 15); // Limit to 15 dots maximum
      });
    }
    
    // Run this effect every 40ms for smooth animation
    const interval = setInterval(() => {
      setTrail(prev => 
        prev
          .map(dot => ({ ...dot, opacity: dot.opacity - 0.02 }))
          .filter(dot => dot.opacity > 0)
      );
    }, 40);
    
    return () => {
      clearInterval(interval);
    };
  }, [mousePosition, counter]);

  return (
    <>
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="fixed pointer-events-none z-50 w-6 h-6 rounded-full mix-blend-screen"
          style={{
            left: dot.x - 12, // Center the dot on cursor
            top: dot.y - 12,
            opacity: dot.opacity,
            transform: `scale(${0.5 + dot.opacity * 0.5})`,
            background: `radial-gradient(circle, rgba(214,180,250,${dot.opacity * 0.9}) 0%, rgba(168,85,247,${dot.opacity * 0.4}) 70%, transparent 100%)`,
            boxShadow: `0 0 10px rgba(214,180,250,${dot.opacity * 0.5})`
          }}
        />
      ))}
    </>
  );
};
