import { asset } from "../lib/asset.js";
export default function About() {
  return (
    <section id="about">
      <div className="section-label reveal">{"About Me"}</div>
      <h2 className="section-title reveal">
        {"A marketer who "}
        <em>{"works from the numbers."}</em>
      </h2>
      <div className="about-grid">
        <div className="about-bio reveal">
          <p>
            {
              "I am a marketing professional with hands-on experience across performance marketing, digital growth, B2B sales and marketing analytics. My work has involved auditing Google and Meta campaigns, analysing creative and audience performance, working with SEO and GA4 data, and turning reporting into specific campaign-level decisions."
            }
          </p>
          <p>
            {
              "At Krutanic, I worked on Meta lead generation for the Data Analytics program, from campaign setup and creative testing to daily performance checks, audience changes, funnel analysis and measurement-gap diagnosis. The supplied work records also document SEO, content planning and social-media/creative messaging work during the same period."
            }
          </p>
          <p>
            {
              "At NYX.today, I worked as a Growth Marketing Intern across client campaigns, auditing 50+ Google and Meta campaigns, reviewing budgets and creative fatigue, and contributing to SEO, reporting, campaign planning and automation projects. At Mittsure Technologies, my role has been more sales-led: managing B2B relationships, prospecting, negotiations, Salesforce pipeline activity and institutional revenue."
            }
          </p>
          <p>
            {
              "I completed my PGDM in Marketing from JAGSoM, Bengaluru. I enjoy work where media, customer behaviour, data and commercial outcomes have to be understood together."
            }
          </p>
        </div>
        <div className="about-details reveal-left">
          <div className="detail-row">
            <span className="detail-key">{"Location"}</span>
            <span className="detail-val">{"Kolkata, West Bengal, India"}</span>
          </div>
          <div className="detail-row">
            <span className="detail-key">{"Education"}</span>
            <span className="detail-val">
              {"PGDM Marketing | JAGSoM, 2025"}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-key">{"Current Role"}</span>
            <span className="detail-val">
              {"Relationship Manager | Mittsure"}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-key">{"Marketing Focus"}</span>
            <span className="detail-val">
              {"Paid Media, Growth, SEO, Analytics"}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-key">{"Commercial Focus"}</span>
            <span className="detail-val">
              {"B2B Sales, Lead Generation, CRM"}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-key">{"Languages"}</span>
            <span className="detail-val">{"English · Bengali · Hindi"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
