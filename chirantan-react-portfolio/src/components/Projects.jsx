import { asset } from "../lib/asset.js";
import { useState } from "react";
export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects-panel");
  function handleTabKey(event) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? "projects-panel"
        : event.key === "End"
          ? "blog-panel"
          : activeTab === "projects-panel"
            ? "blog-panel"
            : "projects-panel";
    setActiveTab(next);
    event.currentTarget.parentElement
      .querySelector('[aria-controls="' + next + '"]')
      .focus();
  }
  return (
    <section id="projects">
      <div className="section-label reveal">{"Academic Projects"}</div>
      <h2 className="section-title reveal">
        {"From "}
        <em>{"Classroom"}</em>
        {" to Practical Marketing Problems"}
      </h2>
      <p className="projects-intro reveal">
        {
          "A selection of PGDM projects where I worked through the problem, research approach, strategic thinking and measurable or proposed outcomes. The figures below are retained from the supplied academic project document; targets are clearly marked as targets."
        }
      </p>
      <div
        className="work-tabs reveal"
        role="tablist"
        aria-label="Academic projects and blog"
      >
        <button
          aria-controls="projects-panel"
          id="tab-projects"
          role="tab"
          type="button"
          className={
            activeTab === "projects-panel" ? "work-tab active" : "work-tab"
          }
          aria-selected={activeTab === "projects-panel"}
          tabIndex={activeTab === "projects-panel" ? 0 : -1}
          onClick={() => setActiveTab("projects-panel")}
          onKeyDown={handleTabKey}
        >
          {"Academic Projects"}
        </button>
        <button
          aria-controls="blog-panel"
          id="tab-blog"
          role="tab"
          type="button"
          className={
            activeTab === "blog-panel" ? "work-tab active" : "work-tab"
          }
          aria-selected={activeTab === "blog-panel"}
          tabIndex={activeTab === "blog-panel" ? 0 : -1}
          onClick={() => setActiveTab("blog-panel")}
          onKeyDown={handleTabKey}
        >
          {"Blog"}
        </button>
      </div>
      <div
        aria-labelledby="tab-projects"
        id="projects-panel"
        role="tabpanel"
        className={
          activeTab === "projects-panel" ? "tab-panel active" : "tab-panel"
        }
        hidden={activeTab !== "projects-panel"}
      >
        <div className="projects-grid">
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Fitness studio training session"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-megaphone" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Project 01 · Social Media Marketing"}
                </div>
                <div className="project-title">
                  {"Unleash Fitness | Campaign Strategy & Execution"}
                </div>
                <div className="project-obj">
                  {
                    "Built a social media marketing plan around audience analysis, competitor research and market trends. Developed content pillars, a content calendar and concepts for static posts, carousels and reels across Instagram and Facebook."
                  }
                </div>
                <div className="project-tags">
                  <span>{"Audience Analysis"}</span>
                  <span>{"Competitor Research"}</span>
                  <span>{"Content Strategy"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">
                  {"Reported academic outcome"}
                </div>
                <div className="project-outcome">
                  <strong>{"686,592"}</strong>
                  {
                    " Facebook reach in one week, with 72% men and 28% women. Cost per result was ₹1.51 for men and ₹1.18 for women; strong engagement was also observed on Instagram, particularly among 18–25 and 35–45 groups."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Fine jewellery display"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-gem" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Project 02 · Marketing Analytics"}
                </div>
                <div className="project-title">
                  {"Bluestone | Social Listening & Brand Analysis"}
                </div>
                <div className="project-obj">
                  {
                    "Analysed Bluestone's social presence against competitors using social listening, with attention to brand mentions, audience engagement and sentiment. The project translated observed market signals into growth recommendations."
                  }
                </div>
                <div className="project-tags">
                  <span>{"Social Listening"}</span>
                  <span>{"Competitor Analysis"}</span>
                  <span>{"Engagement"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">
                  {"Reported academic outcome"}
                </div>
                <div className="project-outcome">
                  <strong>{"3,674"}</strong>
                  {
                    " mentions, 61.7% reported social share and 961,518 engagements. Recommendations included influencer partnerships, greater personalization and sustainability initiatives."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Natural beauty and skincare products"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-store" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Project 03 · Managing Online Stores"}
                </div>
                <div className="project-title">
                  {"Ashkev Health & Beauty | D2C Marketing Strategy"}
                </div>
                <div className="project-obj">
                  {
                    "Worked on positioning a coconut-based health and beauty brand and connecting product-level economics with digital marketing activity. The analysis covered product sales, profitability and Google campaign interactions."
                  }
                </div>
                <div className="project-tags">
                  <span>{"D2C Strategy"}</span>
                  <span>{"Product Analysis"}</span>
                  <span>{"Google Ads"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">
                  {"Reported academic outcome"}
                </div>
                <div className="project-outcome">
                  {
                    "Coco Glow Face Serum reported ₹3,49,500 revenue from 699 units and ₹1,08,000 net profit. Performance Max recorded 12,791 impressions / 485 interactions; Search recorded 2,250 / 91."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Distribution warehouse and logistics"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-building" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Project 04 · Sales & Distribution"}
                </div>
                <div className="project-title">
                  {"Multi-Brand Distributor Health Analysis"}
                </div>
                <div className="project-obj">
                  {
                    "Evaluated distributor health across Rite Bite Max Protein, Godrej Cosmetics, Continental Coffee and Naturals. The analysis focused on ROI, GMROI, sales, receivables, credit periods, margins and cash-flow health."
                  }
                </div>
                <div className="project-tags">
                  <span>{"ROI / GMROI"}</span>
                  <span>{"Margin Analysis"}</span>
                  <span>{"Distributor Health"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">
                  {"Reported academic outcome"}
                </div>
                <div className="project-outcome">
                  {
                    "₹48.1L net investment, 16% annual ROI and ₹50L monthly sales with ₹66,000 net income. Product margins ranged from 15–35%; ₹30L receivables were reported with no pending company claims."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Eco-friendly sustainable packaging"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-leaf" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Project 05 · Brand Management & Marcom"}
                </div>
                <div className="project-title">
                  {"Rahaat | Eco-Friendly Period Pamper Box"}
                </div>
                <div className="project-obj">
                  {
                    "Developed a brand and marketing strategy for an eco-friendly period pamper box, combining market research, product curation and promotional planning around menstrual wellness, self-care and sustainability."
                  }
                </div>
                <div className="project-tags">
                  <span>{"Brand Strategy"}</span>
                  <span>{"Market Research"}</span>
                  <span>{"Marcom"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">{"Project outcome"}</div>
                <div className="project-outcome">
                  {
                    "Created the brand identity and campaign direction with a clear value proposition aimed at millennial and Gen Z women, supported by research and product curation."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Hospital patient care corridor"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Project 06 · Design Thinking"}
                </div>
                <div className="project-title">
                  {"Narayana Health Care | Patient Experience"}
                </div>
                <div className="project-obj">
                  {
                    "Applied design thinking to the appointment journey, focusing on reducing waiting friction, increasing online bookings and introducing virtual consultations for eligible cases."
                  }
                </div>
                <div className="project-tags">
                  <span>{"Journey Mapping"}</span>
                  <span>{"Service Design"}</span>
                  <span>{"KPI Framework"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">
                  {"Proposed KPI targets"}
                </div>
                <div className="project-outcome">
                  {
                    "The project defined targets of +20% online bookings, −15% average wait time, +10% patient satisfaction, virtual appointments for eligible cases and training for at least 80% of staff within one year."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Modern furniture showroom"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-basket" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Project 07 · Business Application"}
                </div>
                <div className="project-title">
                  {"Furniture Business | Excel Management Solution"}
                </div>
                <div className="project-obj">
                  {
                    "Designed an Excel-based application concept to track consumer spending, employee-generated revenue and furniture-item sales while bringing inventory and customer behaviour into one management view."
                  }
                </div>
                <div className="project-tags">
                  <span>{"Excel"}</span>
                  <span>{"Business Analytics"}</span>
                  <span>{"Inventory"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">
                  {"Expected project outcome"}
                </div>
                <div className="project-outcome">
                  {
                    "The proposed solution aimed to improve visibility into financial performance and purchasing patterns, strengthen inventory management and increase employee accountability."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Real estate architecture exterior"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-layout" />
                  </svg>
                </div>
                <div className="project-num">{"Project 08 · UI / UX"}</div>
                <div className="project-title">
                  {"Real Estate Website | Engagement-Focused Wireframe"}
                </div>
                <div className="project-obj">
                  {
                    "Created a real-estate website wireframe focused on usability, navigation, visual hierarchy and conversion. The design incorporated clear CTAs and an enquiry form to make user interaction easier."
                  }
                </div>
                <div className="project-tags">
                  <span>{"Wireframing"}</span>
                  <span>{"Usability"}</span>
                  <span>{"Conversion Flow"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">{"Project outcome"}</div>
                <div className="project-outcome">
                  {
                    "Addressed satisfaction, learnability, efficiency and accessibility while adding enquiry functionality to capture user needs and improve interaction."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="Sports retail store aisle"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-price" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Project 09 · Category Management"}
                </div>
                <div className="project-title">
                  {"Decathlon | Category & Pricing Strategy"}
                </div>
                <div className="project-obj">
                  {
                    "Studied the customer journey across Decathlon's retail and online environments, examining product categorisation, pricing consistency, digital presentation and customer retention mechanisms."
                  }
                </div>
                <div className="project-tags">
                  <span>{"Category Management"}</span>
                  <span>{"Pricing"}</span>
                  <span>{"Customer Journey"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">{"Project outcome"}</div>
                <div className="project-outcome">
                  {
                    "Identified intuitive product grouping, observed competitive pricing adjustments, compared online versus store experiences and evaluated personalization and community engagement for customer stickiness."
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="project-wrap reveal">
            <div className="project-card-inner">
              <div className="project-face front">
                <div
                  className="project-thumb"
                  style={{
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                  }}
                >
                  <img
                    alt="D2C fashion e-commerce styling"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&h=420&fit=crop&auto=format"
                    width="700"
                    height="420"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                <div className="project-icon">
                  <svg aria-hidden="true">
                    <use href="#i-marketing" />
                  </svg>
                </div>
                <div className="project-num">
                  {"Applied Strategy · NYX Client Planning"}
                </div>
                <div className="project-title">
                  {"IKONIC World | 10-Month Marketing Strategy"}
                </div>
                <div className="project-obj">
                  {
                    "An applied strategy project included in the previous portfolio version. Built a 10-month growth roadmap around brand awareness, D2C sales, promotions, influencer activity, co-branding and competitive pricing."
                  }
                </div>
                <div className="project-tags">
                  <span>{"Growth Strategy"}</span>
                  <span>{"Media Planning"}</span>
                  <span>{"D2C"}</span>
                </div>
              </div>
              <div className="project-face back">
                <div className="project-outcome-label">
                  {"Planning deliverable"}
                </div>
                <div className="project-outcome">
                  {
                    "₹10Cr planned budget with a full promotional, influencer, digital, co-branding and pricing framework. This is a strategy plan, not reported media spend delivered."
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-labelledby="tab-blog"
        id="blog-panel"
        role="tabpanel"
        className={
          activeTab === "blog-panel" ? "tab-panel active" : "tab-panel"
        }
        hidden={activeTab !== "blog-panel"}
      >
        <p className="blog-intro reveal">
          {
            "Notes on the campaign work above, written for the same reason the case studies are: to show how a decision got made, not just what the number was."
          }
        </p>
        <div className="blog-grid">
          <article className="blog-card reveal">
            <div className="blog-img-wrap">
              <img
                alt="Meta Ads reporting dashboard with charts"
                loading="lazy"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=420&fit=crop&auto=format"
              />
              <span className="blog-cat">{"Performance Marketing"}</span>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span className="blog-date">{"Sep 2026"}</span>
                <span className="blog-read">{"6 min read"}</span>
              </div>
              <h3 className="blog-title">
                {"Reading a Meta ad report past the vanity metrics"}
              </h3>
              <p className="blog-excerpt">
                {
                  "What the Krutanic account taught me about separating a genuine creative win from a delivery-window artefact, and why the ad name alone can't tell you if it's a static or a video."
                }
              </p>
              <a className="blog-link" href="#krutanic">
                <svg aria-hidden="true" className="tiny-icon">
                  <use href="#i-arrow" />
                </svg>
                {"Read the Krutanic case study"}
              </a>
            </div>
          </article>
          <article className="blog-card reveal">
            <div className="blog-img-wrap">
              <img
                alt="Luggage and travel retail product shelf"
                loading="lazy"
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&h=420&fit=crop&auto=format"
              />
              <span className="blog-cat">{"Search Strategy"}</span>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span className="blog-date">{"Aug 2026"}</span>
                <span className="blog-read">{"7 min read"}</span>
              </div>
              <h3 className="blog-title">
                {
                  "Zone A, Zone B: structuring search around intent, not geography alone"
                }
              </h3>
              <p className="blog-excerpt">
                {
                  "Splitting branded, generic and competitor intent into separate campaigns made the Escape Plan account easier to read and easier to defend budget for."
                }
              </p>
              <a className="blog-link" href="#escape-plan">
                <svg aria-hidden="true" className="tiny-icon">
                  <use href="#i-arrow" />
                </svg>
                {"Read the Escape Plan case study"}
              </a>
            </div>
          </article>
          <article className="blog-card reveal">
            <div className="blog-img-wrap">
              <img
                alt="Cricket stadium under floodlights at night"
                loading="lazy"
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=700&h=420&fit=crop&auto=format"
              />
              <span className="blog-cat">{"Media Planning"}</span>
            </div>
            <div className="blog-body">
              <div className="blog-meta">
                <span className="blog-date">{"Jul 2026"}</span>
                <span className="blog-read">{"5 min read"}</span>
              </div>
              <h3 className="blog-title">
                {
                  "Modelling an IPL burst: reach, frequency and the assumptions in between"
                }
              </h3>
              <p className="blog-excerpt">
                {
                  "A six-city media plan is only as good as its assumptions. Here's how city allocation, cohort targeting and a same-day-uplift assumption fit together on paper."
                }
              </p>
              <a className="blog-link" href="#ipl">
                <svg aria-hidden="true" className="tiny-icon">
                  <use href="#i-arrow" />
                </svg>
                {"Read the IPL planning case study"}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
