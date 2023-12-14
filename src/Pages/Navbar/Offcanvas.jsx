import React, { useState} from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";


const Offcanvas = () => {
  // ===================================change color========================================

  const [isHovered, setIsHovered] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // ===================================change color========================================

  const handleCursorEnter = () => {
    setIsHover(true);
  };

  const handleCursorLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="sectionfive-main-off">
      <button
        className="sectionfive-nav-offcanvas"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        onMouseEnter={handleCursorEnter}
        onMouseLeave={handleCursorLeave}
      >
        <img
          src={
            isHover
              ? require("./navbarimages/bar.png")
              : require("./navbarimages/burger-barr.png")
          }
          alt=""
        />
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabindex="100"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <div className="SectionFive-Offcanvas-body-logo">
            <img
              className="sectionfive-off-logo"
              width={150}
              height={40}
              src={require("./navbarimages/white-logo.png")}
              alt=""
            />
          </div>
          <button
            type="button"
            className="sectionfive-nav-off-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={
                isHovered
                  ? require("./navbarimages/vc.png")
                  : require("./navbarimages/cross.png")
              }
              className={`sectionfive-close-rotate ${
                isHovered ? "hovered" : ""
              }`}
              alt=""
            />
          </button>
        </div>

        {/* ===============================offcanvas-body-content================================ */}

        <div className="offcanvas-body">
          <div className="sectionfive-offcanvas-body-about">
            <h5 className="SectionFive-Offcanvas-body-head">About Us</h5>
            <span className="SectionFive-Offcanvas-body-text">
              Mediaspot is one of the pioneers in the field of Outdoor
              Advertising in Kerala. We build a strong base root and has been
              providing solutions to the top brands in the market through
              Hoardings and Billboards
            </span>
          </div>

          <div className="SectionFive-Offcanvas-body-btn" data-bs-dismiss="offcanvas">
            <Link to="/ContactUs">
              <button className="SectionFive-Offcanvas-body-button">
                Contact us
              </button>
            </Link>
          </div>
          <div className="Sectionfive-offcanvas-pages"  data-bs-dismiss="offcanvas">
          <Link className="Sectionfive-offcanvas-Link" to="/">
            Home
          </Link>
          <Link className="Sectionfive-offcanvas-Link" to="/AboutUs">
            About Us
          </Link>
          <Link className="Sectionfive-offcanvas-Link" to="/Services">
            Services
          </Link>
          <Link className="Sectionfive-offcanvas-Link" to="/Portfolio">
            Portfolio
          </Link>
          <Link className="Sectionfive-offcanvas-Link" to="/ContactUs">
            Contact Us
          </Link>
        </div>
          <div className="SectionFive-Offcanvas-body-contact">
            <img
              className="SectionFive-Offcanvas-body-contactimage"
              src={require("./navbarimages/agenda.png")}
              alt=""
            />
            <span className="SectionFive-Offcanvas-body-contacttext">
              Mufeeda Complex, Near Axis Bank Keerthipadi, Nilambur,
              Manalody,Kerala 679329
            </span>
          </div>

          {/* <div className="SectionFive-Offcanvas-body-address">
        <span className="SectionFive-Offcanvas-body-text">1204, 2nd floor, HiLte Business park, Kozhikode.</span>
        </div> */}
          <div className="Section-contact-container">
            <div className="Section-contact-container-one">
              <div
                className="SectionFive-Offcanvas-body-mobile"
                onClick={() => (window.location.href = "tel:04931225623")}
              >
                <img
                  className="SectionFive-Offcanvas-body-contactimage"
                  src={require("./navbarimages/telephone.png")}
                  alt=""
                />
                <span className="SectionFive-Offcanvas-body-number">
                  04931225623
                </span>
              </div>
              <div
                className="SectionFive-Offcanvas-body-mobile"
                onClick={() => (window.location.href = "tel:9946490659")}
              >
                <img
                  className="SectionFive-Offcanvas-body-contactimage"
                  src={require("./navbarimages/telephone.png")}
                  alt=""
                />
                <span className="SectionFive-Offcanvas-body-number">
                  9946490659
                </span>
              </div>
              <div
                className="SectionFive-Offcanvas-body-mobile"
                onClick={() => (window.location.href = "tel:9447353659")}
              >
                <img
                  className="SectionFive-Offcanvas-body-contactimage"
                  src={require("./navbarimages/telephone.png")}
                  alt=""
                />
                <span className="SectionFive-Offcanvas-body-number">
                  {" "}
                  9447353659
                </span>
              </div>
            </div>

            <div className="Section-contact-container-two">
              <div
                className="SectionFive-Offcanvas-body-mail"
                onClick={() =>
                  (window.location.href = "mailto:mediaspotnbr@gmail.com")
                }
              >
                <img
                  className="SectionFive-Offcanvas-body-contactimage"
                  src={require("./navbarimages/envelope.png")}
                  alt=""
                />
                <span className="SectionFive-Offcanvas-body-email">
                  mediaspotnbr@gmail.com
                </span>
              </div>
              <div
                className="SectionFive-Offcanvas-body-mail"
                onClick={() =>
                  (window.location.href = "mailto:info@mediaspot.in")
                }
              >
                <img
                  className="SectionFive-Offcanvas-body-contactimage"
                  src={require("./navbarimages/envelope.png")}
                  alt=""
                />
                <span className="SectionFive-Offcanvas-body-email">
                  info@mediaspot.in
                </span>
              </div>
              <div
                className="SectionFive-Offcanvas-body-mail"
                onClick={() =>
                  (window.location.href = "mailto:support@mediaspot.in")
                }
              >
                <img
                  className="SectionFive-Offcanvas-body-contactimage"
                  src={require("./navbarimages/envelope.png")}
                  alt=""
                />
                <span className="SectionFive-Offcanvas-body-email">
                  support@mediaspot.in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
