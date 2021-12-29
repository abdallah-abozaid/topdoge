import React from "react";
import "./FirstTopDoge.css";
import Wolf from "../../../Assets/Wolf.png";
const FirstTopDoge = () => {
  return (
    <div className="row m-0 new_pack_web">
      <div className="col-12 section-2 d-flex align-itmes-center justify-content-center">
        <div className="inside_box width375px">
          <div className="inner_inside_box m-0 d-flex align-items-center justify-content-center">
            <div className="col-lg-5 col-12 p-0 p-1 mr-5 d-flex flex-column justify-content-center">
              <div className="row m-0">
                <div className="col-12 p-0 d-flex align-items-start mycount">
                  <div className="col-2 p-0 mx-2 d-flex flex-column justify-content-center align-items-center">
                    <div className="count d-flex justify-content-center align-items-center">
                      10
                    </div>
                    <div className="count-name mt-1 d-flex justify-content-center align-items-center">
                      Days
                    </div>
                  </div>
                  <div className="col-2 p-0 mx-2 d-flex flex-column justify-content-center align-items-center">
                    <div className="count d-flex justify-content-center align-items-center">
                      21
                    </div>
                    <div className="count-name mt-1 d-flex justify-content-center align-items-center">
                      Hours
                    </div>
                  </div>
                  <div className="col-2 p-0 mx-2 d-flex flex-column justify-content-center align-items-center">
                    <div className="count d-flex justify-content-center align-items-center">
                      12
                    </div>
                    <div className="count-name mt-1 d-flex justify-content-center align-items-center">
                      Minutes
                    </div>
                  </div>
                </div>
              </div>

              <div className="row m-0 mt-3">
                <div className="col-12 p-0 pl-2">
                  <p className="mb-0 count_heading">
                    First topdoge collection coming soon!
                  </p>
                </div>
              </div>

              <div className="row m-0 mt-2">
                <div className="col-12 p-0 pl-2">
                  <p className="mb-0 count_pera">
                    Our first NFT collection of topdoges are launching soon.
                    Subscribe to our mailing list to reserve a free topdoge.
                  </p>
                </div>
              </div>
            </div>

            <div className="wolf_background p-0 ml-5 d-flex align-items-center justify-content-center">
              <img src={Wolf} alt="wolf" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTopDoge;
