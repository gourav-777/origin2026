import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
}

const MouseParticles = () => {
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Create subtle particles on mouse move
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          id: particleId++,
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          life: 1,
        });
      }
      
      // Limit particles
      if (particlesRef.current.length > 80) {
        particlesRef.current = particlesRef.current.slice(-80);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life -= 0.025;
        particle.y -= 0.8;
        particle.x += (Math.random() - 0.5) * 1.5;
        
        if (particle.life <= 0) return false;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity * particle.life})`;
        ctx.fill();
        
        return true;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
      />
      {/* Subtle cursor follower */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div 
          className="w-6 h-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, transparent 70%)',
            filter: 'blur(6px)',
          }}
        />
      </motion.div>
    </>
  );
};

export default MouseParticles;
