import { asset } from "../lib/asset.js";
import KrutanicCase from "./KrutanicCase.jsx";
export default function EscapePlanCase() {
  return (
    <article className="case-study" id="escape-plan">
      <div className="case-top">
        <span className="case-label">{"02 / D2C · NYX.TODAY CLIENT WORK"}</span>
        <span className="status">{"Measured results + strategy"}</span>
      </div>
      <h3>
        {
          "Escape Plan: making acquisition decisions by audience, intent and zone"
        }
      </h3>
      <p className="case-lead">
        {
          "Worked on campaign architecture, keyword opportunities and daily performance analysis across Google and Meta for a luggage brand."
        }
      </p>
      <div className="metric-grid">
        <div>
          <strong>{"3.33×"}</strong>
          <span>{"Zone A brand-search ROAS"}</span>
        </div>
        <div>
          <strong>{"₹787.77"}</strong>
          <span>{"Zone A brand-search CPA"}</span>
        </div>
        <div>
          <strong>{"63.27%"}</strong>
          <span>{"Relative retargeting CTR increase"}</span>
        </div>
        <div>
          <strong>{"35.06%"}</strong>
          <span>{"Retargeting CPC reduction"}</span>
        </div>
      </div>
      <div className="case-columns">
        <div>
          <h4>{"Campaign strategy"}</h4>
          <ul>
            <li>
              {
                "Separate branded, generic and competitor search intent, with Zone A and Zone B campaign structures."
              }
            </li>
            <li>
              {
                "Review Shopping and Performance Max alongside Meta prospecting, catalogue and retargeting campaigns."
              }
            </li>
            <li>
              {
                "Develop keyword additions, negative-keyword recommendations and a phased Zone B expansion strategy."
              }
            </li>
          </ul>
        </div>
        <div>
          <h4>{"Audiences & formats"}</h4>
          <ul>
            <li>
              {
                "Business and luxury travellers, luggage-intent audiences, competitor interests, website visitors and Facebook engagers."
              }
            </li>
            <li>
              {
                "Search ads, product feeds, static images, GIFs and video assets documented in the campaign tracker."
              }
            </li>
            <li>
              {
                "Use daily reporting to identify where clicks fail to progress toward purchases."
              }
            </li>
          </ul>
        </div>
      </div>
      <details open={true}>
        <summary>{"See the before-and-after engagement comparison"}</summary>
        <div className="table-scroll">
          <table>
            <caption>
              {
                "Escape Plan | Oct 25 | Sales Retargeting · Website Visiters ad set · November 2025"
              }
            </caption>
            <thead>
              <tr>
                <th scope="col">{"Metric"}</th>
                <th scope="col">{"1–5 Nov"}</th>
                <th scope="col">{"6–9 Nov"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{"Spend"}</th>
                <td>{"₹12,636.00"}</td>
                <td>{"₹8,181.27"}</td>
              </tr>
              <tr>
                <th scope="row">{"Impressions"}</th>
                <td>{"29,235"}</td>
                <td>{"17,851"}</td>
              </tr>
              <tr>
                <th scope="row">{"Reported clicks/views"}</th>
                <td>{"652"}</td>
                <td>{"650"}</td>
              </tr>
              <tr>
                <th scope="row">{"CTR (clicks/views ÷ impressions)"}</th>
                <td>{"2.23%"}</td>
                <td>{"3.64%"}</td>
              </tr>
              <tr>
                <th scope="row">{"CPC"}</th>
                <td>{"₹19.38"}</td>
                <td>{"₹12.59"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          {
            "CTR increased by 1.41 percentage points. The second window is calculated by subtracting 1–5 November totals from the cumulative 1–9 November tracker. These are observed changes across unequal windows; purchase lift and the effect of any single optimization are not established."
          }
        </p>
        <div className="outcome-note">
          <strong>{"Search performance snapshot:"}</strong>
          {
            " Zone A HRX brand search recorded ₹47,266.11 spend, 60 conversions, 8.54% CTR and 3.33× reported conversion-value ROAS. This is a separate snapshot; its tab does not specify a reporting window."
          }
        </div>
        <p className="source-note">
          {
            "Sources: Daily Tracker, “Campaign Structure Nov25 (1-5)” row 32 and “Campaign Structure Nov25 (1-9)” row 35; Campaign Enhancements, “Campaign performance” row 2."
          }
        </p>
      </details>
      <details>
        <summary>
          {"Peak ROAS: the context behind the highest daily figure"}
        </summary>
        <p>
          {"The supplied “Date wise performance” table reports a peak of "}
          <strong>{"17.22× on 4 February 2026"}</strong>
          {
            ", with ₹240.33 spend, 9 clicks and 2 conversions in the “Conversions” column. This is a low-volume daily observation, not a sustained account ROAS. No matching campaign name is supplied in that table."
          }
        </p>
      </details>
      <div className="evidence-gallery">
        <h4>{"Campaign report gallery"}</h4>
        <p className="gallery-intro">
          {
            "Visualizations from the supplied campaign reports. Platform-style views are recreated reports, not account screenshots. Select an image to view it at full size."
          }
        </p>
        <div className="evidence-grid">
          <figure className="evidence-item">
            <a
              aria-label="Open Search intent performance image in a new tab"
              href={asset("assets/analytics/escape-plan-google-search.png")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Search intent performance. Brand, generic and competitor search comparisons."
                decoding="async"
                height="1540"
                loading="lazy"
                src={asset("assets/analytics/escape-plan-google-search.png")}
                width="2520"
              />
            </a>
            <figcaption>
              <strong>{"Search intent performance"}</strong>
              <span>{"Brand, generic and competitor search comparisons."}</span>
            </figcaption>
          </figure>
          <figure className="evidence-item">
            <a
              aria-label="Open Retargeting before and after image in a new tab"
              href={asset("assets/analytics/escape-plan-meta-retargeting.png")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Retargeting before and after. CTR and CPC across the documented November windows."
                decoding="async"
                height="1540"
                loading="lazy"
                src={asset("assets/analytics/escape-plan-meta-retargeting.png")}
                width="2520"
              />
            </a>
            <figcaption>
              <strong>{"Retargeting before and after"}</strong>
              <span>
                {"CTR and CPC across the documented November windows."}
              </span>
            </figcaption>
          </figure>
          <figure className="evidence-item">
            <a
              aria-label="Open Google Search report image in a new tab"
              href={asset("assets/analytics/google-ads-search-report.png")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Google Search report. Ad-group performance across Zone A and Zone B."
                decoding="async"
                height="1800"
                loading="lazy"
                src={asset("assets/analytics/google-ads-search-report.png")}
                width="3000"
              />
            </a>
            <figcaption>
              <strong>{"Google Search report"}</strong>
              <span>{"Ad-group performance across Zone A and Zone B."}</span>
            </figcaption>
          </figure>
          <figure className="evidence-item">
            <a
              aria-label="Open Daily search performance image in a new tab"
              href={asset("assets/analytics/google-ads-daily-overview.png")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Daily search performance. Conversion and reported ROAS observations from the supplied daily table."
                decoding="async"
                height="1800"
                loading="lazy"
                src={asset("assets/analytics/google-ads-daily-overview.png")}
                width="3000"
              />
            </a>
            <figcaption>
              <strong>{"Daily search performance"}</strong>
              <span>
                {
                  "Conversion and reported ROAS observations from the supplied daily table."
                }
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}
