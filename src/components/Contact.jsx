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

            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <a href="mailto:tom@tomalvarez.xyz">tom@tomalvarez.xyz</a>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <div className="phone-numbers">
                  <div className="phone-number">
                    <div className="flag-container">
                      <img
                        src="/src/assets/images/proj_images/Flag_of_Spain_Flat_Round_Corner-64x64.png"
                        alt="Spain flag"
                        className="flag-icon"
                      />
                      <img
                        src="/src/assets/images/proj_images/Flag_of_Galicia_Flat_Round_Corner-64x64.png"
                        alt="Galicia flag"
                        className="flag-icon"
                      />
                    </div>
                    <a href="tel:+34666666666">+34 666 666 666</a>
                  </div>
                  <div className="phone-number">
                    <div className="flag-container">
                      <img
                        src="/src/assets/images/proj_images/Flag_of_United_Kingdom_Flat_Round_Corner-64x64.png"
                        alt="UK flag"
                        className="flag-icon"
                      />
                    </div>
                    <a href="tel:+4407553706704">+44 07777777777</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
