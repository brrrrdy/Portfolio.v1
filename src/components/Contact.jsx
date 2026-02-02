import { useEffect } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

export default function Contact() {
  useEffect(() => {
    // Force immediate scroll to top, overriding smooth scroll
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Fallback for browsers that don't support 'instant'
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="app">
      <TopNav />
      <section id="contact">
        <h1>Contact</h1>
        {"testtest"}
      </section>
      <Footer />
    </div>
  );
}
