import { Link } from "react-router-dom";

import { Link1 } from "../utils/Links";

import Logo from "../../media/logo.png";

import Email from "../../media/social-email.png";
import Etsy from "../../media/social-etsy.png";
import Facebook from "../../media/social-facebook.png";
import Instagram from "../../media/social-instagram.png";
import Phone from "../../media/social-phone.png";
import Tikok from "../../media/social-tiktok.png";
import Twitter from "../../media/social-twitter.png";
import Whatsapp from "../../media/social-whatsapp.png";
import Youtube from "../../media/social-youtube.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/">
          <div className="logo-title">
            <img src={Logo} alt="Site Logo" className="logo" />
            <h1 className="site-title">LAA DEE DAA</h1>
          </div>
        </Link>
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link1 to={"/"} text="products" />
            </li>
            <li>
              <Link1 to={"/blog"} text="blog" />
            </li>
            <li>
              <Link1 to={"/about"} text="about" />
            </li>
            <div className="social-links">
              <div className="social-links-tab">contact</div>
              <div className="social-link">
                <a href="tel:+447742148280">
                  <img className="social-link-image" src={Phone} alt="" />
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://wa.me/447742148280"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-link-image" src={Whatsapp} alt="" />
                </a>
              </div>
              <div className="social-link">
                <Link to="/contact">
                  <img className="social-link-image" src={Email} alt="" />
                </Link>
              </div>
              <div className="social-link">
                <a
                  href="https://www.instagram.com/laadeedaauk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-link-image" src={Instagram} alt="" />
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://www.facebook.com/profile.php?id=61558640347006"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-link-image" src={Facebook} alt="" />
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://www.youtube.com/@LaaDeeDaaUK"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-link-image" src={Youtube} alt="" />
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://x.com/laadeedaauk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-link-image" src={Twitter} alt="" />
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://www.tiktok.com/@laadeedaauk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-link-image" src={Tikok} alt="" />
                </a>
              </div>
              <div className="social-link">
                <a
                  href="https://www.etsy.com/uk/shop/LaaDeeDaaUK"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="social-link-image" src={Etsy} alt="" />
                </a>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
