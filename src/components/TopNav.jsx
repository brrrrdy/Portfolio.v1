import React, { useState, useEffect } from "react";
import Colors from "./Colors";

function TopNav() {
  const [theme, setTheme] = useState("light");

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#toolkit", text: "Toolkit" },
    { href: "#contact", text: "Contact" },
  ];

  // Apply theme to root element
  useEffect(() => {
    document.body.className = `app-${theme}`;
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
            <a key={link.href} href={link.href} className="nav-link">
              {link.text}
            </a>
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
