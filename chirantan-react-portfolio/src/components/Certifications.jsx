import { asset } from "../lib/asset.js";
export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-title">
      <div className="section-label">{"Certifications"}</div>
      <h2 className="section-title" id="certifications-title">
        {"Learning behind "}
        <em>{"the work."}</em>
      </h2>
      <p className="cert-intro">
        {
          "My completed courses and guided projects in marketing, analytics and AI. Select any certificate to read the original image at full size."
        }
      </p>
      <div className="credential-grid">
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset(
              "assets/certifications/certificate-advanced-google-analytics.jpg",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Advanced Google Analytics certificate at full size"
          >
            <img
              src={asset(
                "assets/certifications/certificate-advanced-google-analytics.jpg",
              )}
              alt="Advanced Google Analytics certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>{"Advanced Google Analytics"}</h3>
            <p className="credential-issuer">{"Google Analytics Academy"}</p>
            <p className="credential-date">
              {"Certificate expires 2 August 2027"}
            </p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-advanced-google-analytics.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {": Advanced Google Analytics (opens in a new tab)"}
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset(
              "assets/certifications/certificate-marketing-analytics-dashboard.jpg",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Create a Custom Marketing Analytics Dashboard in Data Studio certificate at full size"
          >
            <img
              src={asset(
                "assets/certifications/certificate-marketing-analytics-dashboard.jpg",
              )}
              alt="Create a Custom Marketing Analytics Dashboard in Data Studio certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>
              {"Create a Custom Marketing Analytics Dashboard in Data Studio"}
            </h3>
            <p className="credential-issuer">{"Coursera Guided Project"}</p>
            <p className="credential-date">{"5 December 2024"}</p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-marketing-analytics-dashboard.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {
                  ": Create a Custom Marketing Analytics Dashboard in Data Studio (opens in a new tab)"
                }
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset(
              "assets/certifications/certificate-excel-power-tools.jpg",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Excel Power Tools for Data Analysis certificate at full size"
          >
            <img
              src={asset(
                "assets/certifications/certificate-excel-power-tools.jpg",
              )}
              alt="Excel Power Tools for Data Analysis certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>{"Excel Power Tools for Data Analysis"}</h3>
            <p className="credential-issuer">
              {"Macquarie University · Coursera"}
            </p>
            <p className="credential-date">{"13 March 2024"}</p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-excel-power-tools.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {": Excel Power Tools for Data Analysis (opens in a new tab)"}
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset("assets/certifications/certificate-brand-to-image.jpg")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View From Brand to Image: Creating High Impact Campaigns That Tell Brand Stories certificate at full size"
          >
            <img
              src={asset(
                "assets/certifications/certificate-brand-to-image.jpg",
              )}
              alt="From Brand to Image: Creating High Impact Campaigns That Tell Brand Stories certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>
              {
                "From Brand to Image: Creating High Impact Campaigns That Tell Brand Stories"
              }
            </h3>
            <p className="credential-issuer">
              {"IE Business School · Coursera"}
            </p>
            <p className="credential-date">{"8 December 2023"}</p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-brand-to-image.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {
                  ": From Brand to Image: Creating High Impact Campaigns That Tell Brand Stories (opens in a new tab)"
                }
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset(
              "assets/certifications/certificate-marketing-strategy.jpg",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Fundamentals of Marketing Strategy certificate at full size"
          >
            <img
              src={asset(
                "assets/certifications/certificate-marketing-strategy.jpg",
              )}
              alt="Fundamentals of Marketing Strategy certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>{"Fundamentals of Marketing Strategy"}</h3>
            <p className="credential-issuer">
              {"University of London · Coursera"}
            </p>
            <p className="credential-date">{"5 December 2023"}</p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-marketing-strategy.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {": Fundamentals of Marketing Strategy (opens in a new tab)"}
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset("assets/certifications/certificate-generative-ai.jpg")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Introduction to Generative AI certificate at full size"
          >
            <img
              src={asset("assets/certifications/certificate-generative-ai.jpg")}
              alt="Introduction to Generative AI certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>{"Introduction to Generative AI"}</h3>
            <p className="credential-issuer">{"Google Cloud · Coursera"}</p>
            <p className="credential-date">{"24 October 2024"}</p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-generative-ai.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {": Introduction to Generative AI (opens in a new tab)"}
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset(
              "assets/certifications/certificate-machine-learning-python.jpg",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Introduction to Machine Learning with Python certificate at full size"
          >
            <img
              src={asset(
                "assets/certifications/certificate-machine-learning-python.jpg",
              )}
              alt="Introduction to Machine Learning with Python certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>{"Introduction to Machine Learning with Python"}</h3>
            <p className="credential-issuer">
              {"Arizona State University · Coursera"}
            </p>
            <p className="credential-date">{"29 October 2024"}</p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-machine-learning-python.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {
                  ": Introduction to Machine Learning with Python (opens in a new tab)"
                }
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset(
              "assets/certifications/certificate-programmatic-prompting.jpg",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Open AI for Beginners: Programmatic Prompting certificate at full size"
          >
            <img
              src={asset(
                "assets/certifications/certificate-programmatic-prompting.jpg",
              )}
              alt="Open AI for Beginners: Programmatic Prompting certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>{"Open AI for Beginners: Programmatic Prompting"}</h3>
            <p className="credential-issuer">{"Coursera Guided Project"}</p>
            <p className="credential-date">{"27 October 2024"}</p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-programmatic-prompting.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {
                  ": Open AI for Beginners: Programmatic Prompting (opens in a new tab)"
                }
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset("assets/certifications/certificate-snowpark-ml.jpg")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Snowflake for Data Science: Intro to Snowpark ML for Python certificate at full size"
          >
            <img
              src={asset("assets/certifications/certificate-snowpark-ml.jpg")}
              alt="Snowflake for Data Science: Intro to Snowpark ML for Python certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>
              {"Snowflake for Data Science: Intro to Snowpark ML for Python"}
            </h3>
            <p className="credential-issuer">{"Coursera Guided Project"}</p>
            <p className="credential-date">{"27 October 2024"}</p>
            <a
              className="credential-open"
              href={asset("assets/certifications/certificate-snowpark-ml.jpg")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {
                  ": Snowflake for Data Science: Intro to Snowpark ML for Python (opens in a new tab)"
                }
              </span>
            </a>
          </div>
        </article>
        <article className="credential-card">
          <a
            className="credential-preview"
            href={asset(
              "assets/certifications/certificate-brand-storytelling.jpg",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Storytelling in Branding and Content Marketing certificate at full size"
          >
            <img
              src={asset(
                "assets/certifications/certificate-brand-storytelling.jpg",
              )}
              alt="Storytelling in Branding and Content Marketing certificate awarded to Chirantan Dutta Banik"
              loading="lazy"
              decoding="async"
              width="1056"
              height="816"
            />
          </a>
          <div className="credential-content">
            <h3>{"Storytelling in Branding and Content Marketing"}</h3>
            <p className="credential-issuer">
              {"IE Business School · Coursera"}
            </p>
            <p className="credential-date">{"24 October 2024"}</p>
            <a
              className="credential-open"
              href={asset(
                "assets/certifications/certificate-brand-storytelling.jpg",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"View certificate "}
              <span aria-hidden="true">{"↗"}</span>
              <span className="credential-sr">
                {
                  ": Storytelling in Branding and Content Marketing (opens in a new tab)"
                }
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
