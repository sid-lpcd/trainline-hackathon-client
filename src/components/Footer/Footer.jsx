import "./Footer.scss";
import facebook from "../../../assets/icons/Facebook.svg";
import twitter from "../../../assets/icons/X_twitter.svg";
import instagram from "../../../assets/icons/Instagram.svg";
import pinterest from "../../../assets/icons/Pinterest.svg";

const Footer = () => {
  return (
    <footer className={`footer footer--wrapper`}>
      <div className="footer__top">
        <section className="footer__section">
          <p className="footer__text">For photographers</p>
        </section>
      </div>
      <div className="footer__bottom">
        <section className="footer__icons">
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
        </section>
      </div>
      <div className="footer__copywrite footer__copywrite--small">
        <span>© 2024 Snaps</span>
        <span> . Terms</span>
        <span> Privacy</span>
        <span> Cookies</span>
      </div>
    </footer>
  );
};

export default Footer;
