export default function MobileMenu({ closeMenu }) {
  return (
    <div className="nav_overlay">
      <button className="nav_close" onClick={closeMenu}>
        ✕
      </button>

      <ul className="nav_overlay-links">
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
