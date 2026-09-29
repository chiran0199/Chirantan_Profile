import { asset } from "../lib/asset.js";
export default function Navigation() {
  return (
    <nav>
      <a
        className="nav-logo-link"
        href="#hero"
        aria-label="Chirantan Dutta Banik | home"
      >
        <img
          alt="Chirantan Dutta Banik logo"
          className="nav-logo-img"
          src={asset("assets/brand/logo.png")}
          width="64"
          height="64"
        />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#case-studies">{"Results"}</a>
        </li>
        <li>
          <a href="#about">{"About"}</a>
        </li>
        <li>
          <a href="#experience">{"Experience"}</a>
        </li>
        <li>
          <a href="#projects">{"Projects"}</a>
        </li>
        <li>
          <a href="#skills">{"Skills"}</a>
        </li>
        <li>
          <a href="#contact">{"Contact"}</a>
        </li>
      </ul>
    </nav>
  );
}
