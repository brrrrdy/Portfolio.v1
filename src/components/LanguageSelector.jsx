import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";

function LanguageSelector() {
  const { language, switchLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "es", label: "ES", name: "Español" },
    { code: "gz", label: "GZ", name: "Galego" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageSelect = (langCode) => {
    switchLanguage(langCode);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Desktop: Button layout */}
      <div className="language-selector language-selector-desktop">
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => switchLanguage(lang.code)}
            className={`language-button ${language === lang.code ? "active" : ""}`}
            title={`Switch to ${lang.name}`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* Mobile: Dropdown layout */}
      <div className="language-selector language-selector-mobile">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="language-dropdown-toggle"
          title="Select language"
        >
          {currentLanguage.label}
          <span className="dropdown-arrow">{isDropdownOpen ? "▲" : "▼"}</span>
        </button>

        {isDropdownOpen && (
          <div className="language-dropdown-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleLanguageSelect(lang.code)}
                className={`language-dropdown-item ${language === lang.code ? "active" : ""}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default LanguageSelector;
