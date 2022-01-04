import React from "react";
import section1 from "../../../Assets/Section_1_IMG.png";
import PlayBtn from "../../../Assets/Play_Button.png";
import "./howitwork.css";
// import PhantomConnect from "./../../phantom/PhantomConnect";
import PhantomConnect from "../../phantom/WalletPhantom";
const HowItWork = () => {
  return (
    <div>
      <div className="row m-0 top_minus_marg">
        <div className="col-12 p-0 section-1">
          <div className="row m-0 mt-lg-5">
            <div className="col-12 p-0 d-flex flex-column justify-content-center align-items-center">
              <h1 className="heading mb-0 mt-lg-0 mt-4">
                dogs. dogs everywhere.
              </h1>
              <p className="section-1-pera mb-0 mt-0">
                how it works <img src={PlayBtn} alt="" />{" "}
              </p>
            </div>
          </div>

          <div className="row m-0 mt-2 mt-lg-4 d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-3 p-0 pl-2 pr-2 top_btn d-flex justify-content-around align-items-center Button-sec">
              <button className="front_btn">obtain free topdoge</button>
              {/* <PhantomConnect /> */}
              <PhantomConnect />
            </div>
          </div>

          <div className="row m-0 mt-2">
            <div className="col-12 p-0 pt-4 d-flex align-items-center justify-content-center">
              <img src={section1} className="section-1-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
