import { initSketch } from "./sketch";
import { useState, useEffect, useRef } from "react";
import "./CreativeLab.css";

const DEFAULT_CONFIG = {
  agentCount: 40,
  connectionDist: 200,
  speed: 1,
};

export default function CreativeLab() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const sketchRef = useRef(null);

  const [stats, setStats] = useState({
    agents: 0,
    connections: 0,
    fps: 0,
  });

  const configRef = useRef({ ...DEFAULT_CONFIG });

  const [sliders, setSliders] = useState({ ...DEFAULT_CONFIG });

  const handleSlider = (e) => {
    const { name, value } = e.target;
    const parsed = Number(value);
    setSliders((prev) => ({ ...prev, [name]: parsed }));
    configRef.current[name] = parsed;
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;
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
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    sketchRef.current = initSketch(
      canvas,
      ctx,
      SIZE,
      mouse,
      setStats,
      configRef.current,
    );

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      sketchRef.current?.stop();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sketchRef.current?.start();
        } else {
          sketchRef.current?.stop();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="creative-lab">
      <div className="creative-lab__header">
        <span className="creative-lab__label">Creative Experiment</span>

        <h2>Agent Network Simulation</h2>

        <p>
          Interactive particle system built with Canvas API, vector math and
          real-time rendering.
        </p>
      </div>
      <div className="creative-lab__stats">
        <span>Agents: {stats.agents}</span>
        <span>Links: {stats.connections}</span>
        <span>FPS: {stats.fps}</span>
      </div>

      <div className="creative-lab__controls">
        <label className="creative-lab__slider">
          <span>
            Agents <em>{sliders.agentCount}</em>
          </span>
          <input
            type="range"
            name="agentCount"
            min="5"
            max="80"
            step="1"
            value={sliders.agentCount}
            onChange={handleSlider}
          />
        </label>

        <label className="creative-lab__slider">
          <span>
            Connection <em>{sliders.connectionDist}px</em>
          </span>
          <input
            type="range"
            name="connectionDist"
            min="50"
            max="400"
            step="10"
            value={sliders.connectionDist}
            onChange={handleSlider}
          />
        </label>

        <label className="creative-lab__slider">
          <span>
            Speed <em>{sliders.speed}x</em>
          </span>
          <input
            type="range"
            name="speed"
            min="0.1"
            max="3"
            step="0.1"
            value={sliders.speed}
            onChange={handleSlider}
          />
        </label>
      </div>

      <div className="creative-lab__canvasWrapper">
        <canvas ref={canvasRef}></canvas>
      </div>
    </section>
  );
}
