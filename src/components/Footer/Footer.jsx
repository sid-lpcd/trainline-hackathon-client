import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper-socials">
          <a href="https://www.facebook.com/trainline.uk/" target="blank">
            <img
              src="https://www.thetrainline.com/content/footer/facebook.svg"
              alt="facebook icon"
            />
          </a>
          <a href="https://x.com/thetrainline" target="blank">
            <img
              src="https://www.thetrainline.com/content/footer/twitter.svg"
              alt="twitter icon"
            />
          </a>
        </div>
        <div className="footer__wrapper-credentials">
          <img
            src="https://www.thetrainline.com/content/footer/paypal.svg"
            alt="paypal logo"
          />
          <img
            src="https://www.thetrainline.com/content/footer/apple-pay.svg"
            alt="apple pay logo"
          />
          <img
            src="https://www.thetrainline.com/content/footer/google-pay.svg"
            alt="google pay logo"
          />
          <img
            src="https://www.thetrainline.com/content/footer/national-rail.svg"
            alt="national rail accredited logo"
          />
        </div>
      </div>
      <div className="footer__text">
        <p className="footer__text-copyright">
          Copyright © 2024 Trainline.com Limited and its affiliated companies.
          All rights reserved.
        </p>
        <p className="footer__text-info">
          Trainline.com Limited is registered in England and Wales. Company No.
          3846791. Registered address: 3rd floor, 120 Holborn, London EC1N 2TD,
          United Kingdom. VAT number: 791 7261 06.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
