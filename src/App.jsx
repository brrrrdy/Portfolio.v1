import "./index.css";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <TopNav />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
