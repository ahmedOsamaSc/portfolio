import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>

        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;
