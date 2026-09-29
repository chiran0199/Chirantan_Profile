import { asset } from "../lib/asset.js";
export default function Hero() {
  return (
    <section id="hero" style={{ padding: "0", border: "none" }}>
      <div className="hero-left">
        <div className="hero-tag">
          {"Performance Marketing & Growth Specialist"}
        </div>
        <h1 className="hero-name">
          {"Chirantan"}
          <br />
          {"Dutta "}
          <span>{"Banik"}</span>
        </h1>
        <p className="hero-desc">
          {
            "I turn campaign data into practical decisions: which creative to back, where to spend, and what needs fixing before scaling. Explore my work across paid media, growth strategy and marketing analytics."
          }
        </p>
        <div className="hero-cta-row">
          <a className="btn-primary" href="#case-studies">
            <span>{"Explore Case Studies"}</span>
          </a>
          <a className="btn-outline" href="#contact">
            {"Get in Touch"}
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-location">
          <svg className="inline-icon" aria-hidden="true">
            <use href="#i-pin" />
          </svg>
          {"Kolkata, West Bengal, India"}
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">{"75.56%"}</div>
            <div className="stat-label">
              {"Lower CPL · selected Meta ad comparison"}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">{"63.27%"}</div>
            <div className="stat-label">
              {"Higher CTR · Escape Plan retargeting"}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">{"3.33×"}</div>
            <div className="stat-label">
              {"ROAS · Escape Plan Zone A brand search"}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num">{"50+"}</div>
            <div className="stat-label">
              {"Google & Meta campaigns audited"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
