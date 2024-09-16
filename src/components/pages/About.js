import { Link } from "react-router-dom";

import Image1 from "../../media/image1.jpg";
import Avatar from "../../media/avatar.jpg";
import Email from "../../media/social-email.png";
import Phone from "../../media/social-phone.png";
import Social from "../../media/social-links.png";
import Whatsapp from "../../media/social-whatsapp.png";

const About = () => {
  return (
    <div className="route about-page">
      <h2 className="route-title">about</h2>
      <section className="about-intro">
        <div className="container">
          <h3>Our Story</h3>
          <p>
            Our story began a year ago in the heart of Huntingdon,
            Cambridgeshire. With a passion for creativity and craftsmanship, we
            set out to bring unique, handcrafted products to life. Since then,
            we've grown into a dedicated team, driven by a love for art and
            design, committed to offering quality and originality in everything
            we create.
          </p>
        </div>
      </section>
      <section className="about-image">
        <img src={Image1} alt="Our Art Studio" />
      </section>
      <section className="about-values">
        <div className="container">
          <h3>What We Believe In</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque dignissim, lacus non auctor placerat, justo quam
            aliquet eros, ac tristique arcu lacus sit amet nunc. Sed tempus
            vehicula ex at sodales. Vivamus porta nisl non lorem rutrum laoreet.
            Integer malesuada venenatis ligula, a lacinia est volutpat ut.
          </p>
        </div>
      </section>
      <section className="about-mission">
        <div className="container">
          <h3>Our Mission</h3>
          <p>
            At the core of our company is a belief in the power of creativity,
            quality, and sustainability. We strive to create products that not
            only inspire but also stand the test of time. Supporting local
            artisans and using ethically sourced materials, we believe in making
            a positive impact on both our community and the environment.
          </p>
        </div>
      </section>
      <section className="about-founder">
        <div className="container">
          <div className="founder-details">
            <div className="founder-text">
              <h3>Meet the Founder</h3>
              <p>
                Meet Dougie Hawes, the founder and creative force behind our
                company. Growing up in London, Dougie developed a deep passion
                for art, drawing inspiration from icons like Lichtenstein and
                Hundertwasser. When he's not creating, Dougie works in care,
                bringing his compassionate nature into everything he does. His
                vision blends bold design with heartfelt purpose, shaping every
                piece we create.
              </p>
            </div>
            <div className="founder-image">
              <img src={Avatar} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-call-to-action">
        <div className="container">
          <h3>Want to Collaborate or Purchase Our Art?</h3>
          <p>
            Interested in collaborating or purchasing one of our unique pieces?
            We’d love to hear from you! Whether you have a custom idea or want
            to explore our current collection, we’re always excited to connect
            with fellow art lovers. Reach out to us for more information, and
            let’s create something truly special together.
          </p>
          <div className="about-call-to-action-links">
            <Link
              className="about-call-to-action-link"
              target="_blank"
              rel="noreferrer"
              to="/contact"
            >
              <img
                className="about-call-to-action-link-image"
                src={Email}
                alt=""
              />
            </Link>
            <a
              className="about-call-to-action-link"
              target="_blank"
              rel="noreferrer"
              href="tel:+447742148280"
            >
              <img
                className="about-call-to-action-link-image"
                src={Phone}
                alt=""
              />
            </a>
            <a
              className="about-call-to-action-link"
              target="_blank"
              rel="noreferrer"
              href="tel:+447742148280"
            >
              <img
                className="about-call-to-action-link-image"
                src={Whatsapp}
                alt=""
              />
            </a>
            <a
              className="about-call-to-action-link"
              target="_blank"
              rel="noreferrer"
              href="http://linktr.ee/laadeedaaUK"
            >
              <img
                className="about-call-to-action-link-image"
                src={Social}
                alt=""
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
