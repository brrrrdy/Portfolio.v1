import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";
import HomePage from "./components/Homepage";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";

function App() {
  // Use different basename for development vs production
  const basename = import.meta.env.DEV ? "/" : "/Portfolio.v1/";

  return (
    <LanguageProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
