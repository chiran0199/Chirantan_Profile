import { asset } from "../lib/asset.js";
export default function KrutanicCase() {
  return (
    <article className="case-study" id="krutanic">
      <div className="case-top">
        <span className="case-label">{"01 / EDTECH · META ADS"}</span>
        <span className="status">{"Live campaign results"}</span>
      </div>
      <h3>{"Krutanic: finding a more efficient lead-generation creative"}</h3>
      <p className="case-lead">
        {
          "Built and monitored Meta acquisition for a Data Analytics program, testing messaging and reviewing ad-level costs to identify stronger creative options."
        }
      </p>
      <div className="metric-grid">
        <div>
          <strong>{"75.56%"}</strong>
          <span>{"Lower CPL: testimonial vs original"}</span>
        </div>
        <div>
          <strong>{"₹59.59"}</strong>
          <span>{"Selected testimonial ad CPL"}</span>
        </div>
        <div>
          <strong>{"113"}</strong>
          <span>{"Leads in the supplied Meta export"}</span>
        </div>
        <div>
          <strong>{"₹137.13"}</strong>
          <span>{"Blended export CPL"}</span>
        </div>
      </div>
      <div className="case-columns">
        <div>
          <h4>{"Objective & approach"}</h4>
          <ul>
            <li>
              {
                "Generate program enquiries from students, professionals and career switchers."
              }
            </li>
            <li>
              {
                "Test creative variants, pause weak ads and review spend against lead outcomes."
              }
            </li>
            <li>
              {
                "Move from Advantage+ audience discovery toward AI, data and career-development interests and job titles; documented minimum age moved from 24 to 22."
              }
            </li>
          </ul>
        </div>
        <div>
          <h4>{"What this demonstrates"}</h4>
          <ul>
            <li>
              {
                "Creative-level analysis that makes budget decisions more specific."
              }
            </li>
            <li>
              {
                "A funnel view connecting lead acquisition with reported enrollments."
              }
            </li>
            <li>
              {
                "Measurement audits covering GA4 attribution and missing key events."
              }
            </li>
          </ul>
        </div>
      </div>
      <details open={true}>
        <summary>{"View the ad comparison and campaign economics"}</summary>
        <div className="table-scroll">
          <table>
            <caption>
              {
                "Selected ads within the 19 Aug–7 Sep 2026 export; differing delivery windows, not a controlled A/B test."
              }
            </caption>
            <thead>
              <tr>
                <th scope="col">{"Metric"}</th>
                <th scope="col">{"Original ad"}</th>
                <th scope="col">{"Selected testimonial ad"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{"Spend"}</th>
                <td>{"₹2,193.97"}</td>
                <td>{"₹1,191.81"}</td>
              </tr>
              <tr>
                <th scope="row">{"Leads"}</th>
                <td>{"9"}</td>
                <td>{"20"}</td>
              </tr>
              <tr>
                <th scope="row">{"Cost per lead"}</th>
                <td>{"₹243.77"}</td>
                <td>{"₹59.59"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          {
            "The complete export records ₹15,496.06 spend, 113 leads and 61,356 impressions. The selected testimonial row is separate from the “Old” testimonial ad. Ad names establish the messaging variant; the supplied export does not establish whether it was a static or video asset."
          }
        </p>
        <div className="outcome-note">
          <strong>{"Reported final funnel · through 9 September:"}</strong>
          {
            " 146 leads → 5 enrollments → 3.42% lead-to-enrollment conversion. At the reported ₹60,000 AOV, that represents ₹3,00,000 gross program revenue. Final spend is unavailable, so final ROAS and enrollment CPA remain unreported."
          }
        </div>
        <p className="source-note">
          {
            "Source: Krutanic Meta CSV, ad/day rows; academic/work report, Krutanic §§1 and 5. CPL reduction = 1 − (₹1,191.81 ÷ 20) ÷ (₹2,193.97 ÷ 9). Revenue is report-derived, not a cash-collection audit."
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
              aria-label="Open Campaign results at a glance image in a new tab"
              href={asset("assets/analytics/krutanic-meta-dashboard.png")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Campaign results at a glance. Spend, daily leads and the selected creative CPL comparison."
                decoding="async"
                height="1540"
                loading="lazy"
                src={asset("assets/analytics/krutanic-meta-dashboard.png")}
                width="2520"
              />
            </a>
            <figcaption>
              <strong>{"Campaign results at a glance"}</strong>
              <span>
                {"Spend, daily leads and the selected creative CPL comparison."}
              </span>
            </figcaption>
          </figure>
          <figure className="evidence-item">
            <a
              aria-label="Open Ad-level performance image in a new tab"
              href={asset("assets/analytics/meta-ads-creative-report.png")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Ad-level performance. All supplied ads grouped by name, with spend, leads, CPL and CTR."
                decoding="async"
                height="1800"
                loading="lazy"
                src={asset("assets/analytics/meta-ads-creative-report.png")}
                width="3000"
              />
            </a>
            <figcaption>
              <strong>{"Ad-level performance"}</strong>
              <span>
                {
                  "All supplied ads grouped by name, with spend, leads, CPL and CTR."
                }
              </span>
            </figcaption>
          </figure>
          <figure className="evidence-item">
            <a
              aria-label="Open Delivery and acquisition trends image in a new tab"
              href={asset("assets/analytics/meta-ads-overview-report.png")}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt="Delivery and acquisition trends. Daily spend and leads, with reporting-window summaries."
                decoding="async"
                height="1800"
                loading="lazy"
                src={asset("assets/analytics/meta-ads-overview-report.png")}
                width="3000"
              />
            </a>
            <figcaption>
              <strong>{"Delivery and acquisition trends"}</strong>
              <span>
                {"Daily spend and leads, with reporting-window summaries."}
              </span>
            </figcaption>
          </figure>
          <figure className="evidence-item">
            <a
              aria-label="Open supplied Meta Ads Manager screenshot"
              href={asset(
                "assets/analytics/krutanic-ads-manager-screenshot.png",
              )}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={asset(
                  "assets/analytics/krutanic-ads-manager-screenshot.png",
                )}
                alt="Supplied Meta Ads Manager screenshot showing Krutanic ad set reporting"
                loading="lazy"
                decoding="async"
              />
            </a>
            <figcaption>
              <strong>{"Supplied Ads Manager screenshot"}</strong>
              <span>
                {
                  "Actual account interface supplied by Chirantan. This screen has its own reporting view and does not verify every metric above."
                }
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}
