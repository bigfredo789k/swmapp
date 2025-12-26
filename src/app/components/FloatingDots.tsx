import { useEffect, useState } from 'react';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function FloatingDots({ count = 20, color = 'white' }: { count?: number; color?: string }) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generatedDots: Dot[] = [];
    for (let i = 0; i < count; i++) {
      generatedDots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 3,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      });
    }
    setDots(generatedDots);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full opacity-30 animate-float"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: color,
            animation: `float ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
