import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import AboutUs from "./Components/About";
import ProcessComponent from "./Components/ProcessComponent"
import Price from "./Components/Price";
import Testimony from "./Components/Testimony/Testimony";
import CTASection from "./Components/CTA-Portfolio/CTASection";
import Portfolio from "./Components/CTA-Portfolio/Portfolio";
import CreativeLab from "./Components/CreativeLab/CreativeLab.jsx";
import FAQ from "./Components/FAQ/FAQ";
import Contact from "./Components/Contact-footer/Contact";
import Footer from "./Components/Contact-footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";

import "./Components/Styles/App.css";

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
        setShowAdmin((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

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
      <CreativeLab/>
      <FAQ />
      <Contact />
      <Footer />
      <Dashboard showAdmin={showAdmin} setShowAdmin={setShowAdmin}/>
    </div>
  );
}
