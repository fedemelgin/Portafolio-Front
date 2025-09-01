
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ProjectsGrid from "./components/ProjectsGrid/ProjectsGrid";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectsGrid />
      <Contact />
    </>
  );
}
