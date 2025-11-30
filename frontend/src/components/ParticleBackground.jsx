import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

// Moved class outside component to fix lint error
class Particle {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.x = Math.random() * canvasWidth;
      this.y = Math.random() * canvasHeight;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
      if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;
    }

    draw(ctx, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
}

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 60;
    const connectionDistance = 150;

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Determine colors based on current theme
      // We use a direct DOM check here as fallback or specific hexes
      // But ideally we use the theme prop passed to dependency
      const isLight = theme === 'light'; 
      const particleColor = isLight ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)';
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx, particleColor);
      });

      // Draw connections
      const baseColor = isLight ? '0, 0, 0' : '255, 255, 255';
      
      particles.forEach((a, index) => {
        for (let j = index + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.strokeStyle = `rgba(${baseColor}, ${0.1 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run when theme changes to update colors immediately

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50"
    />
  );
};

export default ParticleBackground;
