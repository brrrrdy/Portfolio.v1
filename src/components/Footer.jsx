import githubLogo from "../assets/images/github-original.svg";
import linkedinLogo from "../assets/images/linkedin.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-github">
              <a
                href="https://github.com/brrrrdy/Portfolio.v1"
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link"
              >
                <img src={githubLogo} alt="GitHub" className="github-logo" />
                <p>check out the repo for this project!</p>
              </a>
            </div>
            <p>&copy; {currentYear} Tom Alvarez. All rights reserved.</p>
          </div>

          <div className="footer-right-section">
            <div className="footer-sitemap-container">
              <div className="footer-sitemap">
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>
                  <li>
                    <a href="#toolkit">Toolkit</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/tom-alvarez-ryan-80423951/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="social-logo"
                  />
                </a>
                <a
                  href="https://github.com/brrrrdy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="social-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
