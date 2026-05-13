import { Vector } from './Vector.js';
import { randomRange, mapRange } from './utils.js';

export class Agent {

  constructor(x, y, width, height) {
    this.pos    = new Vector(x, y);
    this.vel    = new Vector(randomRange(-1.5, 1.5), randomRange(-1.5, 1.5));
    this.radius = randomRange(3, 10);
    this.width  = width;
    this.height = height;

    this.hue         = randomRange(220, 300);   
    this.alpha       = randomRange(0.6, 1.0);   

    this.pulseOffset = randomRange(0, Math.PI * 2);
    this.pulseSpeed  = randomRange(0.02, 0.05);
    this.time        = 0;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    this.time  += this.pulseSpeed;
  }


  bounce() {
    if (this.pos.x <= this.radius || this.pos.x >= this.width  - this.radius) this.vel.x *= -1;
    if (this.pos.y <= this.radius || this.pos.y >= this.height - this.radius) this.vel.y *= -1;
  }


  attract(mx, my) {
    const dx   = mx - this.pos.x;
    const dy   = my - this.pos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 180 && dist > 1) {
      const force = 0.3 / dist;
      this.vel.x += dx * force;
      this.vel.y += dy * force;

      const maxSpeed = 3;
      const speed    = Math.sqrt(this.vel.x ** 2 + this.vel.y ** 2);
      if (speed > maxSpeed) {
        this.vel.x = (this.vel.x / speed) * maxSpeed;
        this.vel.y = (this.vel.y / speed) * maxSpeed;
      }
    }
  }


  draw(ctx) {
    const pulsedRadius = this.radius + Math.sin(this.time + this.pulseOffset) * 1.5;

    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);

    const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, pulsedRadius * 3);
    glow.addColorStop(0, `hsla(${this.hue}, 80%, 75%, 0.15)`);
    glow.addColorStop(1, `hsla(${this.hue}, 80%, 75%, 0)`);

    ctx.beginPath();
    ctx.arc(0, 0, pulsedRadius * 3, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, pulsedRadius, 0, Math.PI * 2);
    ctx.fillStyle   = `hsla(${this.hue}, 60%, 85%, ${this.alpha})`;
    ctx.strokeStyle = `hsla(${this.hue}, 80%, 70%, 0.9)`;
    ctx.lineWidth   = 1.5;
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}