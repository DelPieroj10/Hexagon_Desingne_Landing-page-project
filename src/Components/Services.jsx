import { useEffect } from "react";
import ServiceCard from "./serviceCard";
import Study_room from "../assets/images/study-room.png";
import Image_laptop from "../assets/images/laptop.png";
import Strategy_branding from "../assets/images/strategy-branding1.png";
import "./Styles/service-style.css";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      text: "Building responsive and scalable web applications using React, JavaScript and modern tools.",
      image: Study_room,
      href: "#portfolio"
    },
    {
      title: "UX & Problem Solving",
      text: "Applying user-centered thinking to create intuitive and meaningful digital experiences.",
      image: Image_laptop,
      href: "#faq"
    },
    {
      title: "Why Me?",
      text: "I am a motivated junior developer focused on growth, clean code and real-world impact.",
      image: Strategy_branding,
      href: "#process-component"
    }
  ]; 

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {threshold: 0.5}
  );
    reveals.forEach(el => observer.observe(el));
  }, []);

  return (

    <section id="services" className="services reveal">
      <div className="services-container container2">
        <h2 className="services_title">
          My Services
        </h2>
        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.text}
              image={service.image}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
