import { useEffect } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import "../styles/contact.css";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="app">
      <TopNav />
      <section id="contact-page">
        <div className="contact-container">
          <h1>contact</h1>
          <div className="contact-content">
            <p>Get in touch - I'd love to hear from you!</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
