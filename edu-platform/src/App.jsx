import Hero from "./sections/Hero";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Courses from "./sections/Courses";
import HowItWorks from "./sections/HowItWorks";
import Reviews from "./sections/Reviews";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import useScrollReveal from "./hooks/useScrollReveal";
import Stats from "./sections/Stats";
import Audience from "./sections/Audience";
import Program from "./sections/Program";
import FAQ from "./sections/FAQ";
function App() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Benefits />
      <Audience />
      <Courses />
      <Program />
      <HowItWorks />
      <Reviews />
      <CTA />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;