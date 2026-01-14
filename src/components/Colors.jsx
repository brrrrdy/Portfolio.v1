function Colors({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const getIcon = () => {
    return theme === "light" ? "dark_mode" : "light_mode";
  };

  return (
    <div className="theme-toggle">
      <button
        type="button"
        onClick={toggleTheme}
        className="theme-toggle-button"
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <span className="material-icons">{getIcon()}</span>
      </button>
    </div>
  );
}

export default Colors;
