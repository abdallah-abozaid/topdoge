import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Facebook from "../../Assets/Facebook.png";
import Discord from "../../Assets/Discord.png";
const Footer = () => {
  return (
    <div>
      <div className="row m-0 mt-4">
        <div className="col-12 p-0">
          <hr />
        </div>
      </div>

      <div className="row m-0 footer">
        <div className="col-1 p-0"></div>
        <div className="col-10 p-0 pb-3">
          <div className="row m-0 d-flex align-items-center justify-content-between">
            <div className="col-lg-3 col-12 p-0 d-flex align-items-center justify-content-lg-between justify-content-around">
              <Link to="/">Home</Link>
              <Link to="/Guide">Guide</Link>
              <Link to="/Marketplace">Marketplace</Link>
              <Link to="/Racing">Racing</Link>
            </div>
            <div className="col-lg-1 col-12 p-0 pl-3 pr-3 d-flex align-items-center justify-content-lg-between justify-content-center">
              <img className="discord" src={Discord} alt="" />
              <img className="facebook" src={Facebook} alt="" />
            </div>
          </div>
        </div>
        <div className="col-1 p-0"></div>
      </div>
    </div>
  );
};

export default Footer;
