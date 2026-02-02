import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Colors from "./Colors";

function TopNav() {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to "light"
    return localStorage.getItem("portfolio-theme") || "light";
  });
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "#about", text: "About", type: "scroll" },
    { href: "#projects", text: "Projects", type: "scroll" },
    { href: "#toolkit", text: "Toolkit", type: "scroll" },
    { href: "/contact", text: "Contact", type: "navigate" },
  ];

  const handleNavClick = (link) => {
    if (link.type === "navigate") {
      // Navigate to a different page
      navigate(link.href);
    } else if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first, then scroll
      navigate("/");
      // Use setTimeout to wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll to section
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
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

        {/* center - nav links */}
        <div className="nav-links">
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

        {/* right side - language buttons */}
        <div className="nav-right">
          <div className="language-buttons">
            {["EN", "ES", "GZ"].map((lang) => (
              <button key={lang} className={`lang-btn lang-${lang}`}>
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
