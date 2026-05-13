import { initSketch } from './sketch'
import { useState, useEffect, useRef } from 'react'
import "./CreativeLab.css"


export default function CreativeLab () {

  const canvasRef = useRef(null);

  const [stats, setStats] = useState({
    agents: 0,
    connection: 0,
    fps: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    
    if(!canvas) return;
    const ctx = canvas.getContext("2d");

    const SIZE = Math.min(window.innerWidth * 0.8, 900);

    canvas.width = SIZE;
    canvas.height = SIZE;

    const mouse = {
      x: -9999,
      y: -9999,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();

      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;

      const handleMouseLeave = () => {
        mouse.x = -9999;
        mouse.y = -9999;
      };

      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);

      initSketch (canvas, ctx, SIZE, mouse, setStats);

      return() => {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="creative-lab">
      <div className="creative-lab__header">
        <span className="creative-lab__label">
          Creative Experiment        
        </span>

        <h2>
          Agent Network Simulation
        </h2>

        <p>
          Interactive particle system built with Canvas API,
          vector math and real-time rendering.
        </p>
      </div>
      <div className="creative-lab__stats">
        <span>Agents: {stats.agents}</span>
        <span>Links: {stats.connection}</span>
        <span>FPS: {stats.fps}</span>
      </div>

      <div className="creative-lab__canvasWrapper">
        <canvas ref={canvasRef}></canvas>
      </div>
    </section>
  )
}
