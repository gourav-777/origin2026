import { useEffect, useRef } from "react";

const BinaryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = new Array(columns).fill(1);
    const speeds: number[] = new Array(columns).fill(0).map(() => Math.random() * 0.5 + 0.5);
    const brightness: number[] = new Array(columns).fill(0).map(() => Math.random());

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? "1" : "0";
        
        // Varying brightness - some columns are brighter streaks
        const isBrightStreak = brightness[i] > 0.85;
        const baseOpacity = isBrightStreak ? 0.6 : 0.15;
        const glowOpacity = isBrightStreak ? 0.9 : 0.3;
        
        // Draw glow effect for bright streaks
        if (isBrightStreak) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(34, 197, 94, 0.8)";
          ctx.fillStyle = `rgba(34, 197, 94, ${glowOpacity})`;
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(34, 197, 94, ${baseOpacity})`;
        }
        
        ctx.font = isBrightStreak ? "bold 14px JetBrains Mono" : "14px JetBrains Mono";
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Draw trail effect for bright streaks
        if (isBrightStreak && drops[i] > 1) {
          for (let j = 1; j <= 3; j++) {
            const trailOpacity = glowOpacity - (j * 0.2);
            if (trailOpacity > 0) {
              ctx.fillStyle = `rgba(34, 197, 94, ${trailOpacity})`;
              const trailText = Math.random() > 0.5 ? "1" : "0";
              ctx.fillText(trailText, i * 20, (drops[i] - j) * 20);
            }
          }
        }

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          // Randomize speed and brightness on reset
          speeds[i] = Math.random() * 0.5 + 0.5;
          brightness[i] = Math.random();
        }
        drops[i] += speeds[i];
      }
      
      // Reset shadow
      ctx.shadowBlur = 0;
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default BinaryBackground;
