import "./Footer.scss";
import facebook from "../../../assets/icons/Facebook.svg";
import twitter from "../../../assets/icons/X_twitter.svg";
import instagram from "../../../assets/icons/Instagram.svg";
import pinterest from "../../../assets/icons/Pinterest.svg";

const Footer = ({ isFilterOpen, isIndividualPage }) => {
  console.log(isIndividualPage);
  return (
    <footer
      className={`footer footer--wrapper ${
        isFilterOpen && !isIndividualPage ? "footer--filter-open" : ""
      }`}
    >
      <div className="footer__top">
        <h2 className="footer__logo">Snaps</h2>

        <div className="footer__section">
          <p className="footer__text">For photographers</p>
          <p className="footer__text">Hire talent</p>
          <p className="footer__text">Inspiration</p>
        </div>
        <div className="footer__section">
          <p className="footer__text">About</p>
          <p className="footer__text">Careers</p>
          <p className="footer__text">Support</p>
        </div>
        <div className="footer__icons footer__icons--desktop">
          <a
            className="footer__link"
            href="https://facebook.com/"
            target="_blank"
          >
            <img className="footer__img" src={facebook} alt="facebook" />
          </a>
          <a className="footer__link" href="https://x.com/" target="_blank">
            <img className="footer__img" src={twitter} alt="X" />
          </a>
          <a
            className="footer__link"
            href="https://instagram.com/"
            target="_blank"
          >
            <img className="footer__img" src={instagram} alt="Instagram" />
          </a>
          <a
            className="footer__link"
            href="https://pinterest.com/"
            target="_blank"
          >
            <img className="footer__img" src={pinterest} alt="pinterest" />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__icons">
          <a
            className="footer__link"
            href="https://facebook.com/"
            target="_blank"
          >
            <img className="footer__img" src={facebook} alt="facebook" />
          </a>
          <a className="footer__link" href="https://x.com/" target="_blank">
            <img className="footer__img" src={twitter} alt="X" />
          </a>
          <a
            className="footer__link"
            href="https://instagram.com/"
            target="_blank"
          >
            <img className="footer__img" src={instagram} alt="Instagram" />
          </a>
          <a
            className="footer__link"
            href="https://pinterest.com/"
            target="_blank"
          >
            <img className="footer__img" src={pinterest} alt="pinterest" />
          </a>
        </div>
        <div className="footer__copywrite footer__copywrite--small">
          <span>© 2024 Snaps</span>
          <span> . Terms</span>
          <span> Privacy</span>
          <span> Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
