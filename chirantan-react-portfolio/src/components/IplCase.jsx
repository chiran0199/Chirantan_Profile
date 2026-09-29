import { asset } from "../lib/asset.js";
import KrutanicCase from "./KrutanicCase.jsx";
import EscapePlanCase from "./EscapePlanCase.jsx";
export default function IplCase() {
  return (
    <article className="case-study" id="ipl">
      <div className="case-top">
        <span className="case-label">{"03 / ESCAPE PLAN · JIOHOTSTAR"}</span>
        <span className="status planned">{"Media planning / projections"}</span>
      </div>
      <h3>
        {
          "IPL burst planning: translating a media opportunity into a buying plan"
        }
      </h3>
      <p className="case-lead">
        {
          "Modelled city-level reach, frequency, media cost and response assumptions for a short IPL advertising burst."
        }
      </p>
      <div className="metric-grid">
        <div>
          <strong>{"₹28,86,800"}</strong>
          <span>{"Modelled net media cost"}</span>
        </div>
        <div>
          <strong>{"48,55,000"}</strong>
          <span>{"Projected reach"}</span>
        </div>
        <div>
          <strong>{"6 cities"}</strong>
          <span>{"Proposed geographic coverage"}</span>
        </div>
        <div>
          <strong>{"10 sec"}</strong>
          <span>{"Pre-/mid-roll video format"}</span>
        </div>
      </div>
      <ul>
        <li>
          {
            "Compared city allocations across Mumbai, Bengaluru, Delhi NCR, Chennai, Hyderabad and Ahmedabad."
          }
        </li>
        <li>
          {
            "Mapped HRX video creative and male 18–44 cohort targeting to the proposed inventory."
          }
        </li>
        <li>
          {
            "Modelled a 25% same-day conversion uplift as a planning assumption, not an achieved result."
          }
        </li>
      </ul>
      <p className="source-note">
        {
          "Source: EP - IPL Blast, “Final plan ” rows 13–19 and 32, 37–52. Figures refer to this specific six-city scenario; the workbook contains other budget versions. No post-campaign delivery evidence is supplied."
        }
      </p>
    </article>
  );
}
