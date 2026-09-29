import { asset } from "../lib/asset.js";
import KrutanicCase from "./KrutanicCase.jsx";
import EscapePlanCase from "./EscapePlanCase.jsx";
import IplCase from "./IplCase.jsx";
export default function CaseStudies() {
  return (
    <section aria-labelledby="work-title" id="case-studies">
      <div className="section-label">{"Selected campaign work / 01"}</div>
      <h2 className="section-title" id="work-title">
        {"The work. "}
        <em>{"The numbers."}</em>
      </h2>
      <p className="section-intro">
        {
          "A closer look at the decisions behind the results, with reporting windows and measurement context included."
        }
      </p>
      <div className="case-index">
        <a href="#krutanic">
          {"01 / Krutanic "}
          <svg className="tiny-icon" aria-hidden="true">
            <use href="#i-arrow" />
          </svg>
        </a>
        <a href="#escape-plan">
          {"02 / Escape Plan "}
          <svg className="tiny-icon" aria-hidden="true">
            <use href="#i-arrow" />
          </svg>
        </a>
        <a href="#ipl">
          {"03 / IPL media planning "}
          <svg className="tiny-icon" aria-hidden="true">
            <use href="#i-arrow" />
          </svg>
        </a>
      </div>
      <KrutanicCase />
      <EscapePlanCase />
      <IplCase />
    </section>
  );
}
