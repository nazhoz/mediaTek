import React from "react";
import { PortfolioData } from "../Portfolio/Portfolio/Section3Data";
import { Link } from "react-router-dom";

const HomePortfolio = () => {
  const firstThreeItems = PortfolioData.slice(0, 6);
  return (
    <div className="section2-homeservice-main">
      <div className="Section2-Homeservice-head">
        <div className="Section2-Homeservice-heads">
          <span className="sectionfive-homeservice-heading">
            Port
          </span>
          <span className="sectionfive-homeservice-head-one">Folio</span>
        </div>
        <div className="sectionfive-homeservice-Viewall">
          <Link className="sectionfive-homeservice-link" to="/Portfolio">
            Explore More
          </Link>
        </div>
      </div>
      <div className="sec3-pcontent">
        {firstThreeItems.map((item) => {
          return (
            <div className="sec3-image-conetnt">
              <img className="sec3-image3" src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePortfolio;
