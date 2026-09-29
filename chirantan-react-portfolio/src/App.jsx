import usePortfolioMotion from "./hooks/usePortfolioMotion.js";
import IconSprite from "./components/IconSprite.jsx";
import SkipLink from "./components/SkipLink.jsx";
import Background from "./components/Background.jsx";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import MotionRibbon from "./components/MotionRibbon.jsx";
import About from "./components/About.jsx";
import CampaignCharts from "./components/CampaignCharts.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import DashboardConcepts from "./components/DashboardConcepts.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Education from "./components/Education.jsx";
import Hobbies from "./components/Hobbies.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  usePortfolioMotion();
  return (
    <>
      <IconSprite />
      <SkipLink />
      <Background />
      <Navigation />
      <Hero />
      <MotionRibbon />
      <About />
      <CampaignCharts />
      <CaseStudies />
      <DashboardConcepts />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}
