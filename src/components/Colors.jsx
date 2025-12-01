const THEMES = ["light", "dark"];

function Colors({ theme, setTheme }) {
  const onButtonClick = (selectedTheme) => () => {
    setTheme(selectedTheme);
  };

  const getIcon = (themeOption) => {
    return themeOption === "light" ? "light_mode" : "dark_mode";
  };

  return (
    <div className="theme-buttons">
      {THEMES.map((themeOption) => (
        <button
          type="button"
          key={themeOption}
          onClick={onButtonClick(themeOption)}
          className={`theme-button ${
            theme === themeOption ? "active" : "inactive"
          }`}
        >
          <span className="material-icons">{getIcon(themeOption)}</span>
        </button>
      ))}
    </div>
  );
}

export default Colors;
