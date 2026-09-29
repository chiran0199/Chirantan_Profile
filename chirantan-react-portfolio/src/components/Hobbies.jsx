import { asset } from "../lib/asset.js";
export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="section-label reveal">{"Beyond Work"}</div>
      <h2 className="section-title reveal">
        {"Passions that "}
        <em>{"Drive Me"}</em>
      </h2>
      <div className="hobbies-grid">
        <div className="hobby-card reveal">
          <span className="hobby-icon">
            <svg aria-hidden="true">
              <use href="#i-cricket" />
            </svg>
          </span>
          <div className="hobby-title">{"Cricket"}</div>
          <p className="hobby-desc">
            {
              "A lifelong passion that taught me discipline, strategy, and how to perform under pressure, in the crease and in the boardroom."
            }
          </p>
          <span className="hobby-badge">{"CAB Under-17 Player"}</span>
        </div>
        <div className="hobby-card reveal">
          <span className="hobby-icon">
            <svg aria-hidden="true">
              <use href="#i-bike" />
            </svg>
          </span>
          <div className="hobby-title">{"Bike Riding"}</div>
          <p className="hobby-desc">
            {
              "Mountain trails, open highways, and high-altitude roads. Bike expeditions fuel my love for adventure and exploring the unknown."
            }
          </p>
          <span className="hobby-badge">{"Mountain Expedition Rider"}</span>
        </div>
        <div className="hobby-card reveal">
          <span className="hobby-icon">
            <svg aria-hidden="true">
              <use href="#i-camera" />
            </svg>
          </span>
          <div className="hobby-title">{"Photography"}</div>
          <p className="hobby-desc">
            {
              "Capturing the quiet drama of natural landscapes and fleeting moments, with a detail-oriented eye that carries into every campaign I build."
            }
          </p>
          <span className="hobby-badge">{"Nature & Travel Photography"}</span>
        </div>
      </div>
    </section>
  );
}
