import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CV from "./sections/CV";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="dark:bg-slate-900 dark:text-white p-16">
        <div className="container mx-auto py-6">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <CV />
          <Contact />
        </div>
      </div>
    </>
  );
}
