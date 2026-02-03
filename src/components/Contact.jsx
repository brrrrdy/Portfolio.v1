import { useEffect } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";
import contactData from "../content/contact.json";
import "../styles/contact.css";

export default function Contact() {
  const { language } = useLanguage();
  const content = contactData[language] || contactData.en;
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
          <h1>{content.title}</h1>
          <div className="contact-content">
            <p>{content.intro}</p>

            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <a href={`mailto:${content.email.address}`}>
                  {content.email.address}
                </a>
              </div>

              <div className="contact-item">
                <h3>Phone</h3>
                <div className="phone-numbers">
                  {content.phoneNumbers.map((phone, index) => (
                    <div key={index} className="phone-number">
                      <div className="flag-container">
                        {phone.flags.map((flag, flagIndex) => (
                          <img
                            key={flagIndex}
                            src={flag.src}
                            alt={flag.alt}
                            className="flag-icon"
                          />
                        ))}
                      </div>
                      <a href={`tel:${phone.telLink}`}>{phone.number}</a>
                    </div>
                  ))}
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
