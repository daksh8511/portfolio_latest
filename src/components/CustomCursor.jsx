import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Only enable custom cursor on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);

      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive');
      
      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '48px' : '24px',
          height: isPointer ? '48px' : '24px',
          borderRadius: '50%',
          backgroundColor: isPointer ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
          border: '1px solid rgba(0, 242, 254, 0.6)',
          transform: `translate3d(${position.x - (isPointer ? 24 : 12)}px, ${position.y - (isPointer ? 24 : 12)}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s ease, height 0.2s ease, transform 0.05s linear, background-color 0.2s ease',
          boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)'
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#00f2fe',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: '0 0 10px #00f2fe'
        }}
      />
    </>
  );
}
