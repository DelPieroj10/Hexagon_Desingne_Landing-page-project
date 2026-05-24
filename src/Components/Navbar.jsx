import { useEffect, useState } from "react";
import logo_hexagon from "../assets/images/logo_hexagon.png";
import toggle_sun from "../assets/images/sol-50.png";
import toggle_moon from "../assets/images/image-moon.png";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector(".navbar").classList.add("shrink");
      } else {
        document.querySelector(".navbar").classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav_container">
        <div className="nav_logo">
          <img src={logo_hexagon} alt="Hexagon Logo" className="nav_image" />
          <h2 className="nav_title">Jean Piero Parra Bustamante</h2>
        </div>

        {/* Desktop Links */}

        <ul className="nav_link nav_link--desktop">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}

        <button className="dark-toggle" onClick={toggleTheme}>
          {isDarkMode ? (
            <img src={toggle_moon} alt="Dark Mode" /> 
          ) : (
            <img src={toggle_sun} alt="Light Mode" />
          )}
        </button>

        {/* Mobile Icon */}

        <div className="nav_menu-icon" onClick={openMenu}>
          ☰
        </div>
      </div>
      {/* Fullscreen Mobile Menu */}
      {isMenuOpen && <MobileMenu closeMenu={closeMenu} />}
    </nav>
  );
}
