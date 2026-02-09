import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Colors from "./Colors";
import LanguageSelector from "./LanguageSelector";

function TopNav() {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to "light"
    return localStorage.getItem("portfolio-theme") || "light";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "#home", text: "Home", type: "scroll" },
    { href: "#about", text: "About", type: "scroll" },
    { href: "#projects", text: "Projects", type: "scroll" },
    { href: "#toolkit", text: "Toolkit", type: "scroll" },
    { href: "/contact", text: "Contact", type: "navigate" },
  ];

  const handleNavClick = (link) => {
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);

    if (link.type === "navigate") {
      // Navigate to a different page
      navigate(link.href);
    } else if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first, then scroll
      navigate("/");
      // Use setTimeout to wait for navigation to complete before scrolling
      setTimeout(() => {
        if (link.href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    } else {
      // If already on homepage, scroll to section or top
      if (link.href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // Apply theme to root element and save to localStorage
  useEffect(() => {
    document.body.className = `app-${theme}`;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        {/* left side - theme toggle */}
        <div className="nav-left">
          <div className="nav-theme-toggle">
            <Colors theme={theme} setTheme={setTheme} />
          </div>
        </div>

        {/* center - nav links (desktop) */}
        <div className="nav-links nav-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link)}
              className="nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
              }}
            >
              {link.text}
            </button>
          ))}
        </div>

        {/* right side - burger menu and language selector */}
        <div className="nav-right">
          {/* Burger menu button */}
          <button
            className={`burger-menu-button ${isMobileMenuOpen ? "opened" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Main Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="30" height="30" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>

          <LanguageSelector />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-items">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link)}
              className="mobile-nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
              }}
            >
              {link.text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
