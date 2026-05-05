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
          Frontend Developer focused on building intuitive and scalable web experiences
        </h1>
        <p className="hero-paragraph hero-animate hero-paragraph-anim">
          I combine React development with user-centered thinking to create clean, functional and engaging digital products.
        </p>
        <p className="hero-animate hero-paragraph-anim">
          \ Currently seeking opportunities as a Junior Frontend Developer.
        </p>
        <a href="#contact" className="cta hero-animate hero-cta-anim">
          Contact me here
        </a>
      </div>
    </section>
  );
}
