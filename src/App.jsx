import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage";
import AllProjects from "./components/AllProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
