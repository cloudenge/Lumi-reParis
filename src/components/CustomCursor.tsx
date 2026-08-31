import React, { useEffect, useState, useRef } from 'react';
import { Plane } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let particles: Array<{ x: number, y: number, vx: number, vy: number, life: number, maxLife: number, color: string }> = [];

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add sprinkle particles on move
      if (Math.random() > 0.4) {
        particles.push({
          x: e.clientX,
          y: e.clientY + 10, // slightly below cursor
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 + 1, // drift downwards
          life: 0,
          maxLife: 30 + Math.random() * 20,
          color: '#FFFFFF'
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over an interactive element
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    // Canvas animation loop for sprinkles
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const render = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        
        const progress = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - progress);
        
        ctx.beginPath();
        // Sprinkles look like little stars or circles
        ctx.arc(p.x, p.y, Math.max(0, (1 - progress) * 2.5), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]"
      />
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div className={`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isHovering ? 'scale-[1.3] -rotate-12 translate-x-1 -translate-y-1' : 'scale-100 rotate-12'
        }`}>
          <Plane 
            className={`w-9 h-9 transition-colors duration-300 ${
              isHovering 
                ? 'text-yellow-500 fill-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]' 
                : 'text-[#0284c7] fill-[#0284c7] drop-shadow-[0_0_8px_rgba(2,132,199,0.5)]'
            }`} 
            style={{ transform: 'translate(-30%, -30%)' }} // Align center of icon near actual cursor tip
          />
        </div>
      </div>
    </>
  );
};
