import heroVideo from "../assets/video/hero-video.mp4";
import { useEffect, useRef } from "react";


export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if(videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <section id="home" className="hero">
      <video
        ref={videoRef} 
        className="hero__video" 
        autoPlay 
        loop 
        muted 
        playsInline
        >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero_overlay"></div>

      <div className="hero__container">
        <h1 className="hero-title hero-animate hero-title-anim">
          Find what you need in Interior Design and Digital Design and, express
          the best version of yourself and your business.
        </h1>
        <p className="hero-paragraph hero-animate hero-paragraph-anim">
          Choose one of our services and start bringing your personal and
          professional projects to life.
        </p>
        <a href="#contact" className="cta hero-animate hero-cta-anim">
          Quote here
        </a>
      </div>
    </section>
  );
}
