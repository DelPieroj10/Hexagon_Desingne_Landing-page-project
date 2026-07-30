import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact-style.css";

const API_URL = import.meta.env.VITE_API_URL;

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.message || "Error sending message ❌");
        return;
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setStatus("Message sent successfully! ✔");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Message received ✔ (confirmation email may be delayed)");
    }
  };

  return (
    <section id="contact" className="contact container">
      <h2 className="contact__title">Let's work together</h2>
      <p className="contact__text">
        I'm open to new opportunities as a Frontend Developer. Feel free to send
        me a message.
      </p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="contact__input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="contact__input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Your Message"
          className="contact__textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contact__submit">
          Send Message
        </button>

        <p>{status}</p>
      </form>
    </section>
  );
}
