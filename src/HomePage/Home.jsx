import React from "react";
import "./Home.css";
import mainimage from "../assets/SlideImageGrp.jpg";
import Iphone from "../assets/iPhone12pro.png";
import Frame1 from "../assets/Frame 1 .png";
import Frame2 from "../assets/Frame 2.png";
import logo from "../assets/Logo.png";
import blindhuman from "../assets/blindhuman.png";
import hero2 from "../assets/Window.png";
import artical from "../assets/Rectangle 2701.png";
import artical1 from "../assets/Rectangle 2701 (1).png";
import artical2 from "../assets/Rectangle 2701 (2).png";
import artical3 from "../assets/Rectangle 2701 (3).png";
import testimonalcard from "../assets/TestimonialCard1.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  return (
    <>
      <div>
        <div className="header-home">
          <div className="header-pos">
            <div className="header-nav">
              <div className="header-logo">
                <img src={logo} alt="no" />
              </div>

              <div className="Login-link">
                <Link to="/Login" id="Login-sign">
                  <FontAwesomeIcon icon={faUser} className="icon-gap" />
                  SignUp / Login
                </Link>
              </div>
            </div>
          </div>
          <div className="header-img">
            <img src={mainimage} alt="no" />
          </div>
        </div>
        <div className="hero-section">
          <div className="hero-img">
            <img src={Iphone} alt="no" />
          </div>
          <div className="hero2-img">
            <img src={hero2} alt="no" />
          </div>
        </div>
        <div className="artical-section">
          <div className="artical-sec1">
            <img src={artical3} alt="no" />
            <div className="artical-text">
              <h4>
                <span>For Consumers:</span>
              </h4>
              <p>
                “ Say goodbye to expensive legal <br /> consultation, long waits
                for <br />
                appointments,
                <br /> and confusing legal texts. “
              </p>
            </div>
          </div>
          <div className="artical-sec1">
            <img src={artical2} alt="no" />
            <div className="artical-text">
              <h4>
                <span>For Advocates</span>
              </h4>
              <p>
                “ Say goodbye to routine tasks.
                <br /> AI Lawyer automate your legal
                <br /> research and paperwork, granting <br /> you more free
                time.“
              </p>
            </div>
          </div>
          <div className="artical-sec1">
            <img src={artical1} alt="no" />
            <div className="artical-text">
              <h4>
                <span>For Academia</span>
              </h4>
              <p>
                “ Law students and Institutions
                <br /> enabling faster and more accurate <br /> legal research
                and case analysis. “
              </p>
            </div>
          </div>

          <div className="artical-sec1">
            <img src={artical} alt="no" />
            <div className="artical-text">
              <h4>
                <span>For Law Firms</span>
              </h4>
              <p>
                “ Say goodbye to expensive legal <br />
                consultation, long waits for
                <br />
                appointments,
                <br /> and confusing legal texts. “
              </p>
            </div>
          </div>
        </div>
        <div className="frames-section">
          <div className="frame1-img">
            <img src={Frame1} alt="no" />
          </div>
          <div className="frame2-img">
            <img src={Frame2} alt="no" />
          </div>
        </div>

        <div className="tstm-section">
          <div className="tstm-arrows">
            <FontAwesomeIcon icon={faAngleUp} />
            <FontAwesomeIcon icon={faAngleDown} />
          </div>

          <div className="tstm-card">
            <img src={testimonalcard} alt="no" />
          </div>
          <div className="tstm-human">
            <img src={blindhuman} alt="no" />
          </div>
        </div>

        <div className="footer">
          <div className="footer-links">
            <div className="left-links">
              <span>Company</span>

              <Link to="#">About us</Link>
              <Link to="#">Contact</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Affiliate</Link>
            </div>
            <div className="middle-links">
              <span>Products</span>
              <Link to="#">Features</Link>
              <Link to="#">FAQ</Link>
              <Link to="#">Changelog</Link>
              <Link to="#">Advain connect</Link>
            </div>
            <div className="rights-links">
              <span>Pages</span>

              <Link to="#">pricing</Link>
              <Link to="#">Terms</Link>
              <Link to="#">Privacy</Link>
              <Link to="#">404</Link>
            </div>
          </div>

          <div className=" footer-logo">
            <img src={logo} alt="no" />
            <p>&copy;All Rights Reserved @Advain</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
