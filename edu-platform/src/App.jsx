import Hero from "./sections/Hero";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Courses from "./sections/Courses";
import HowItWorks from "./sections/HowItWorks";
import Reviews from "./sections/Reviews";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import useScrollReveal from "./hooks/useScrollReveal";
function App() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Courses />
      <HowItWorks />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}

export default App;