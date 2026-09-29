import { asset } from "../lib/asset.js";
export default function Education() {
  return (
    <section id="education">
      <div className="section-label reveal">{"Education"}</div>
      <h2 className="section-title reveal">
        {"Academic "}
        <em>{"Foundation"}</em>
      </h2>
      <div className="edu-list">
        <div className="edu-item reveal">
          <div>
            <div className="edu-inst">
              {"Jagdish Sheth School of Management (JAGSoM)"}
            </div>
            <div className="edu-degree">{"PGDM | Marketing"}</div>
          </div>
          <div>
            <div className="edu-score">{"6.5 CGPA"}</div>
            <div className="edu-year">{"2023 – 2025 · Bengaluru"}</div>
          </div>
        </div>
        <div className="edu-item reveal">
          <div>
            <div className="edu-inst">
              {"Future Institute of Engineering and Management"}
            </div>
            <div className="edu-degree">
              {"Bachelor of Business Administration (BBA)"}
            </div>
          </div>
          <div>
            <div className="edu-score">{"79.8%"}</div>
            <div className="edu-year">{"2019 – 2022 · Kolkata"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
