import { asset } from "../lib/asset.js";
export default function CampaignCharts() {
  return (
    <section
      className="results-visuals"
      aria-labelledby="results-visuals-title"
    >
      <div className="section-label">{"Campaign snapshots"}</div>
      <h2 className="section-title" id="results-visuals-title">
        {"A clearer view of "}
        <em>{"the change."}</em>
      </h2>
      <p className="section-intro">
        {
          "Two report-based comparisons from the case studies. The bars show the values in the supplied campaign reports."
        }
      </p>
      <div className="visual-grid">
        <article className="visual-card">
          <div className="visual-card-top">
            <div>
              <span className="visual-kicker">
                {"KRUTANIC · META LEAD GENERATION"}
              </span>
              <h3>{"Cost per lead"}</h3>
            </div>
            <span className="visual-change">{"75.56% lower"}</span>
          </div>
          <div
            className="bar-chart"
            role="img"
            aria-label="Cost per lead decreased from 243 rupees 77 paise for the original ad to 59 rupees 59 paise for the selected testimonial ad. These ads had different delivery windows."
          >
            <div className="bar-row">
              <span>{"Original ad"}</span>
              <div className="bar-track">
                <div
                  className="bar-fill bar-red"
                  style={{ "--bar": "100%" }}
                ></div>
              </div>
              <strong>{"₹243.77"}</strong>
            </div>
            <div className="bar-row">
              <span>{"Testimonial"}</span>
              <div className="bar-track">
                <div
                  className="bar-fill bar-blue"
                  style={{ "--bar": "24.45%" }}
                ></div>
              </div>
              <strong>{"₹59.59"}</strong>
            </div>
          </div>
          <p className="visual-note">
            {
              "Selected ads, 19 Aug to 7 Sep 2026 export. Different delivery windows, so this is an observed comparison, not a controlled test."
            }
          </p>
        </article>
        <article className="visual-card">
          <div className="visual-card-top">
            <div>
              <span className="visual-kicker">
                {"ESCAPE PLAN · META RETARGETING"}
              </span>
              <h3>{"CTR and cost per click"}</h3>
            </div>
            <span className="visual-change">{"Nov 1–5 vs Nov 6–9"}</span>
          </div>
          <div className="dual-chart">
            <div
              className="mini-chart"
              role="img"
              aria-label="Click-through rate rose from 2.23 percent to 3.64 percent."
            >
              <h4>{"Click-through rate"}</h4>
              <div className="bar-row">
                <span>{"Nov 1–5"}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill bar-red"
                    style={{ "--bar": "55.75%" }}
                  ></div>
                </div>
                <strong>{"2.23%"}</strong>
              </div>
              <div className="bar-row">
                <span>{"Nov 6–9"}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill bar-blue"
                    style={{ "--bar": "91%" }}
                  ></div>
                </div>
                <strong>{"3.64%"}</strong>
              </div>
            </div>
            <div
              className="mini-chart"
              role="img"
              aria-label="Cost per click decreased from 19 rupees 38 paise to 12 rupees 59 paise."
            >
              <h4>{"Cost per click"}</h4>
              <div className="bar-row">
                <span>{"Nov 1–5"}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill bar-red"
                    style={{ "--bar": "100%" }}
                  ></div>
                </div>
                <strong>{"₹19.38"}</strong>
              </div>
              <div className="bar-row">
                <span>{"Nov 6–9"}</span>
                <div className="bar-track">
                  <div
                    className="bar-fill bar-blue"
                    style={{ "--bar": "64.96%" }}
                  ></div>
                </div>
                <strong>{"₹12.59"}</strong>
              </div>
            </div>
          </div>
          <p className="visual-note">
            {
              "Windows and calculations are described in the Escape Plan case study. CTR increased by 1.41 percentage points."
            }
          </p>
        </article>
      </div>
    </section>
  );
}
