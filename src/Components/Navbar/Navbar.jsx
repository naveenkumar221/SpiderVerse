// import { Link } from "react-router-dom";
import { useState } from "react";
// import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">🕷 SpiderVerse</div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

       <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>

      <li><a href="#movies" onClick={() => setMenuOpen(false)}>Movies</a></li>

      <li><a href="#characters" onClick={() => setMenuOpen(false)}>Characters</a></li>

      <li><a href="#villains" onClick={() => setMenuOpen(false)}>Villains</a></li>

      <li><a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a></li>

      <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>

      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>

      <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

      </ul>

    </nav>
  );
}

export default Navbar;