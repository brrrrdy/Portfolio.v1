import React from "react";
import { useLanguage } from "./LanguageContext";

function LanguageSelector() {
  const { language, switchLanguage } = useLanguage();

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "es", label: "ES", name: "Español" },
    { code: "gz", label: "GZ", name: "Galego" },
  ];

  return (
    <div className="language-selector">
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
  );
}

export default LanguageSelector;
