import { useEffect } from "react";
import ServiceCard from "./serviceCard";
import Study_room from "../assets/images/study-room.png";
import Image_laptop from "../assets/images/laptop.png";
import Strategy_branding from "../assets/images/strategy-branding1.png";
import "./Styles/service-style.css";

export default function Services() {
  const services = [
    {
      title: "Interior Design",
      text: "We design spaces that reflect your personality and lifestyle.",
      image: Study_room
    },
    {
      title: "Digital Design",
      text: "Websites and digital experiences that elevate your brand.",
      image: Image_laptop
    },
    {
      title: "Brand Identity",
      text: "Create a strong visual identity for your business.",
      image: Strategy_branding
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
