import { useEffect, useRef } from "react";

export default function Background() {
  const canvas = useRef(null);
  useEffect(() => {
    const el = canvas.current;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId,
      width,
      height,
      particles = [];
    const colors = ["#eb0d0d", "#0080FE", "#ffffff"];
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      el.width = width * scale;
      el.height = height * scale;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      particles = Array.from({ length: width < 700 ? 25 : 50 }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 0.8 + Math.random(),
        c: colors[index % 3],
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j],
            d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 125) {
            ctx.strokeStyle = `rgba(0,128,254,${(1 - d / 125) * 0.14})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      frameId = requestAnimationFrame(draw);
    }
    function sync() {
      cancelAnimationFrame(frameId);
      ctx.clearRect(0, 0, width, height);
      if (!preference.matches && !document.hidden) draw();
    }
    resize();
    sync();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", sync);
    preference.addEventListener("change", sync);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", sync);
      preference.removeEventListener("change", sync);
    };
  }, []);
  return <canvas id="bg-canvas" ref={canvas} aria-hidden="true" />;
}
