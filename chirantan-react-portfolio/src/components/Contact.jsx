import { asset } from "../lib/asset.js";
export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label reveal">{"Contact"}</div>
      <h2 className="section-title reveal">
        {"Let's "}
        <em>{"Connect"}</em>
      </h2>
      <div className="contact-grid">
        <div className="contact-text reveal">
          <p>
            {
              "Need help understanding campaign performance or improving your next test? Let's discuss your acquisition goals, measurement setup and growth priorities. I'm also open to performance marketing and growth roles."
            }
          </p>
          <br />
          <p style={{ color: "var(--white40)", fontSize: "0.9rem" }}>
            {
              "Based in Kolkata, West Bengal, India. Open to remote and hybrid opportunities."
            }
          </p>
        </div>
        <div className="contact-links reveal">
          <a
            className="contact-link"
            href="mailto:chirantanduttabanik123@gmail.com"
          >
            <div className="contact-link-icon">
              <svg aria-hidden="true">
                <use href="#i-mail" />
              </svg>
            </div>
            <div>
              <span className="contact-link-label">{"Email"}</span>
              <span className="contact-link-val">
                {"chirantanduttabanik123@gmail.com"}
              </span>
            </div>
          </a>
          <a className="contact-link" href="tel:+919903319465">
            <div className="contact-link-icon">
              <svg aria-hidden="true">
                <use href="#i-phone" />
              </svg>
            </div>
            <div>
              <span className="contact-link-label">{"Phone"}</span>
              <span className="contact-link-val">{"+91 9903319465"}</span>
            </div>
          </a>
          <a
            className="contact-link"
            href="https://linkedin.com/in/chirantan-dutta-banik-9b9426382/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="contact-link-icon">
              <svg aria-hidden="true">
                <use href="#i-linkedin" />
              </svg>
            </div>
            <div>
              <span className="contact-link-label">{"LinkedIn"}</span>
              <span className="contact-link-val">
                {"chirantan-dutta-banik-9b9426382"}
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
