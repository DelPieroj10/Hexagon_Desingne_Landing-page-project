import { Agent } from "./Agent";
import { randomRange, mapRange } from "./utils";
import { updateStats } from "./stats";

const MAX_DIST = 200;
const agentCount = window.innerWidth < 768 ? 20 : 40;

export function initSketch(canvas, ctx, SIZE, mouse, setStats, config) {

  const agents = Array.from(
    { length: config.agentCount },
    () => new Agent(randomRange(0, SIZE), randomRange(0, SIZE), SIZE, SIZE),
  );

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    agents.push(
      new Agent(
        (e.clientX - rect.left) * scaleX,
        (e.clientY - rect.top) * scaleY,
        SIZE,
        SIZE,
      ));
  });

  let lastTime = performance.now();
  let frameCount = 0;
  let fps = 0;
  let rafId = null;

  const draw = (now) => {
    frameCount++;
    if (now - lastTime >= 1000) {
      fps = frameCount;
      frameCount = 0;
      lastTime = now;
    }

    if (agents.length < config.agentCount) {
      agents.push(
        new Agent(randomRange(0, SIZE), randomRange(0, SIZE), SIZE, SIZE),
      );
    } else if (agents.length > config.agentCount) {
      agents.pop();
    }

    ctx.fillStyle = "rgba(25, 25, 26, 0.25)";
    ctx.fillRect(0, 0, SIZE, SIZE);

    let connectionCount = 0;

    const threshold = config.connectionDist;

    for (let i = 0; i < agents.length; i++) {
      const agentA = agents[i];

      for (let j = i + 1; j < agents.length; j++) {
        const agentB = agents[j];
        const dist = agentA.pos.getDistance(agentB.pos);

        if (dist > threshold) continue;

        connectionCount++;
        const alpha = mapRange(dist, 0, MAX_DIST, 0.8, 0);
        const lineWidth = mapRange(dist, 0, MAX_DIST, 8, 0.5);

        ctx.strokeStyle = `rgba(155, 127, 255, ${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(agentA.pos.x, agentA.pos.y);
        ctx.lineTo(agentB.pos.x, agentB.pos.y);
        ctx.stroke();
      }
    }

    agents.forEach((agent) => {
      agent.speed = config.speed;
      agent.attract(mouse.x, mouse.y);
      agent.update();
      agent.bounce();
      agent.draw(ctx);
    });

    setStats({
      agents: agents.length,
      connections: connectionCount,
      fps,
    });

    // updateStats(agents.length, connectionCount, fps, setStats);

    rafId = requestAnimationFrame(draw);
  };

  rafId = requestAnimationFrame(draw);

  return {
    stop: () => cancelAnimationFrame(rafId),
    start: () => {
      rafId = requestAnimationFrame(draw);
    },
  };
}
