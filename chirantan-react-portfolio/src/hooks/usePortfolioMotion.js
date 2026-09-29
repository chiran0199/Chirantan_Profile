import { useEffect } from "react";

export default function usePortfolioMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    function setup() {
      dispose();
      const cleanups = [];
      const items = [...document.querySelectorAll(".reveal,.reveal-left")];
      if (preference.matches || !("IntersectionObserver" in window)) {
        items.forEach((el) => el.classList.add("visible"));
        document.documentElement.classList.remove("motion-ready");
        dispose = () => {};
        return;
      }
      document.documentElement.classList.add("motion-ready");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      items.forEach((el, index) => {
        el.style.setProperty("--delay", `${Math.min(index * 30, 180)}`);
        observer.observe(el);
      });
      cleanups.push(() => observer.disconnect());
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        document
          .querySelectorAll(".btn-primary,.btn-outline,.hobby-card")
          .forEach((el) => {
            const move = (event) => {
              const r = el.getBoundingClientRect();
              const x = (event.clientX - r.left - r.width / 2) / r.width;
              const y = (event.clientY - r.top - r.height / 2) / r.height;
              el.style.transform = el.classList.contains("hobby-card")
                ? `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 5}deg)`
                : `translate(${x * 8}px,${y * 8}px)`;
            };
            const reset = () => {
              el.style.transform = "";
            };
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", reset);
            cleanups.push(() => {
              el.removeEventListener("pointermove", move);
              el.removeEventListener("pointerleave", reset);
              reset();
            });
          });
      }
      dispose = () => {
        cleanups.forEach((fn) => fn());
        document.documentElement.classList.remove("motion-ready");
      };
    }
    setup();
    preference.addEventListener("change", setup);
    return () => {
      dispose();
      preference.removeEventListener("change", setup);
    };
  }, []);
}
