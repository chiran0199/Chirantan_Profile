import groups from "../data/skills.json";

const marks = {
  "Salesforce CRM": "SF",
  "Pipeline Mgmt": "PM",
  "Cold Calling": "TEL",
  Negotiation: "B2B",
  "Follow-up Mgmt": "↻",
  "Campaign Audits": "AUD",
  "Budget Mgmt": "₹",
  "Performance Max": "G",
  "Ad Creative": "AD",
  "Blog Writing": "W",
  "Backlink Building": "✳",
  "On-page SEO": "SEO",
  "Content Strategy": "N",
  "Power BI": "BI",
  "Advanced Excel": "XL",
  "Data Visualisation": "DATA",
  Python: "Py",
  "LinkedIn Sales Nav": "in",
  "Apollo.io": "AP",
  Lusha: "LU",
  "Email Outreach": "M",
  "Cold Prospecting": "CP",
  "Brand Management": "BR",
  "Market Research": "MR",
  "Consumer Behaviour": "CB",
  "Distributor Mgmt": "DM",
};

function ToolMark({ label }) {
  if (label === "Google Ads")
    return (
      <svg viewBox="0 0 48 48">
        <path
          d="M27 7a7 7 0 0 1 10 3l10 21a7 7 0 0 1-12 7L23 17z"
          fill="currentColor"
        />
        <path
          d="M22 8a7 7 0 0 1 12 7L18 39a7 7 0 0 1-12-7z"
          fill="currentColor"
          opacity=".65"
        />
        <circle cx="12" cy="36" r="7" fill="currentColor" />
      </svg>
    );
  if (label === "Meta Ads")
    return (
      <svg viewBox="0 0 48 48">
        <path
          d="M3 30C5 4 16 7 25 23c7 13 13 22 19 10C49 17 38 6 32 14C25 23 20 40 12 40C4 40 1 35 3 30Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
    );
  if (label === "Google Analytics")
    return (
      <svg viewBox="0 0 48 48">
        <rect
          x="31"
          y="4"
          width="11"
          height="40"
          rx="5.5"
          fill="currentColor"
        />
        <rect x="17" y="20" width="10" height="24" rx="5" fill="currentColor" />
        <circle cx="8" cy="39" r="5" fill="currentColor" />
      </svg>
    );
  if (label === "Social Listening")
    return (
      <svg viewBox="0 0 48 48">
        <path
          d="m3 13 21-10 21 10-21 10ZM3 25l21 10 21-10M3 37l21 10 21-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
        />
      </svg>
    );
  if (label === "Keyword Research")
    return (
      <svg viewBox="0 0 48 48">
        <rect
          x="7"
          y="11"
          width="34"
          height="30"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M17 11V5h14v6M7 20h34"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="28"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path d="m28 32 7 7" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  if (label === "Lead Qualification")
    return (
      <svg viewBox="0 0 48 48">
        <circle
          cx="29"
          cy="26"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M29 15V5M21 20 8 8M21 34 11 43"
          stroke="currentColor"
          strokeWidth="4"
        />
        <circle cx="29" cy="5" r="4" fill="currentColor" />
        <circle cx="8" cy="8" r="4" fill="currentColor" />
        <circle cx="11" cy="43" r="4" fill="currentColor" />
      </svg>
    );
  return <span>{marks[label]}</span>;
}

export default function Skills() {
  return (
    <section id="skills" className="skills-showcase">
      <div className="section-label reveal">Core Skills</div>
      <h2 className="section-title reveal">
        Tools of <em>the Trade</em>
      </h2>
      <div className="tools-grid">
        {groups.map((group, index) => (
          <article className="tool-group reveal" key={group.title}>
            <header className="tool-group-heading">
              <span className="tool-group-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{group.title}</h3>
              <span className="tool-group-rule" aria-hidden="true" />
            </header>
            <ul className="tool-list">
              {group.items.map((label) => (
                <li key={label}>
                  <div className="tool-icon" aria-hidden="true">
                    <ToolMark label={label} />
                  </div>
                  <span className="tool-label">{label}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
