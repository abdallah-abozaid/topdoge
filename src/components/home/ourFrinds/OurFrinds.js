import React from "react";
import "./OurFrinds.css";
import logo1 from "../../../Assets/CompanyLogo/1.png";
import logo2 from "../../../Assets/CompanyLogo/2.png";
import logo3 from "../../../Assets/CompanyLogo/3.png";
import logo4 from "../../../Assets/CompanyLogo/4.png";
import logo5 from "../../../Assets/CompanyLogo/5.png";
import logo6 from "../../../Assets/CompanyLogo/6.png";
import logo7 from "../../../Assets/CompanyLogo/7.png";

const OurFrinds = () => {
  return (
    <div className="row m-0 mt-5">
      <div className="col-1 p-0"></div>
      <div className="col-10 p-0">
        <div className="row m-0">
          <div className="col-12 p-0 d-flex align-items-center justify-content-center">
            <p className="mb-0 section_title">Our friends</p>
          </div>
        </div>

        <div className="row m-0 text-center mt-5 company_logo_mobile d-flex align-items-center justify-content-center">
          <div className="d-none d-lg-block col-lg-1 "></div>
          <div className="company_logo_box p-0 col-12 col-sm-4 col-md-3 col-lg-2">
            <img src={logo1} alt="" />
          </div>
          <div className="company_logo_box mt-2 mt-lg-0 mr-lg-4 ml-lg-4  col-12 col-sm-4 col-md-3 col-lg-2 p-0">
            <img src={logo2} alt="" />
          </div>
          <div className="company_logo_box p-0 mt-2 mt-lg-0 col-2  col-12 col-sm-4 col-md-3 col-lg-2">
            <img src={logo3} alt="" />
          </div>
          <div className="company_logo_box mt-2 mt-lg-0 mr-lg-4 ml-lg-4 p-0 col-2  col-12 col-sm-4 col-md-3 col-lg-2">
            <img src={logo4} alt="" />
          </div>
          <div className="company_logo_box p-0 mt-2 mt-lg-0 col-2  col-12 col-sm-4 col-md-3 col-lg-2">
            <img src={logo5} alt="" />
          </div>
          <div className="d-none d-lg-block col-lg-1 "></div>
          <div className="company_logo_box p-0 mt-2 mt-lg-0 mr-lg-4 ml-lg-4 col-2  col-12 col-sm-4 col-md-3 col-lg-2">
            <img src={logo6} alt="" />
          </div>
          <div className="company_logo_box p-0 mt-2 mt-lg-0 col-2  col-12 col-sm-4 col-md-3 col-lg-2">
            <img src={logo7} alt="" />
          </div>
        </div>
      </div>
      <div className="col-1 p-0"></div>
    </div>
  );
};

export default OurFrinds;
