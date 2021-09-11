import "../../App.css";
import HeroSection from "../HeroSection";
import Projects from "../Projects";
import FunProjects from "../FunProjects.js";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <FunProjects />
    </>
  );
}
