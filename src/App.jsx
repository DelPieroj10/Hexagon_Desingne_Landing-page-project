import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import AboutUs from "./Components/About";
import ProcessComponent from "./Components/ProcessComponent"
import Price from "./Components/Price";
import Testimony from "./Components/Testimony/Testimony";
import CTASection from "./Components/CTA-Portfolio/CTASection";
import Portfolio from "./Components/CTA-Portfolio/Portfolio";
import FAQ from "./Components/FAQ/FAQ";
import Contact from "./Components/Contact-footer/Contact";
import Footer from "./Components/Contact-footer/Footer";

import "./Components/Styles/App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <ProcessComponent />
      <Price />
      <Testimony />
      <CTASection />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
      <h1>... <br/> Hexagon Design Project</h1>
      <h2>🚧 Working on it 🏗</h2>
      <hr />
    </div>
  );
}
