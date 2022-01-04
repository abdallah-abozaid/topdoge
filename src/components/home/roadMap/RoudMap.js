import React from "react";
import "./RoudMap.css";
import Check from "../../../Assets/Check.png";
import Uncheck from "../../../Assets/Uncheck.png";
const RoudMap = () => {
  return (
    <div className="container">
      <div className="row m-0 mt-5 ">
        <div className="col-12 p-0">
          <div className="row m-0">
            <div className="col-12 p-0 d-flex align-items-center justify-content-center">
              <p className="mb-0 section_title">Roadmap</p>
            </div>
          </div>

          <div className="row m-0 mt-5 row-cols-1 row-cols-md-2 g-5">
            <div className="col">
              <div className="timeline_box p-0">
                <div className="timeline_header pt-3 d-flex align-items-center justify-content-center">
                  <p className="mb-0">1st track</p>
                </div>
                <div className="timeline_info pl-5 pr-5 pt-2">
                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Check} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        Website Launched
                      </p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Check} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        First NFT collection created
                      </p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Check} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        Kick off marketing
                      </p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        NFT marketplace contract
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        First NFT collection sale
                      </p>
                    </div>
                  </div>

                  {/*<button className="timeline_btn mt-3">Button Name</button>*/}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="timeline_box p-0  ">
                <div className="timeline_header pt-3 d-flex align-items-center justify-content-center">
                  <p className="mb-0">2nd track</p>
                </div>
                <div className="timeline_info pl-5 pr-5 pt-2">
                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">Whitepaper</p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        Monthly collection releases
                      </p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        Influencer marketing
                      </p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        Raise seed investment
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        Doge racing game launched
                      </p>
                    </div>
                  </div>

                  {/*<button className="timeline_btn mt-3">Button Name</button>*/}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-1 m-0 row-cols-1 row-cols-md-2 justify-content-center  g-5">
            <div className="col">
              <div className="timeline_box p-0 ">
                <div className="timeline_header pt-3 d-flex align-items-center justify-content-center">
                  <p className="mb-0">3rd track</p>
                </div>
                <div className="timeline_info pl-5 pr-5 pt-2">
                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        Smart Contract Audits
                      </p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        Raise series A investment
                      </p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">Partnerships</p>
                    </div>
                  </div>

                  <div className="d-flex brd_bottom align-items-center m-0 p-0">
                    <img src={Uncheck} alt="" />
                    <div className="pt-2">
                      <p className="mb-0 ml-4 timeline_text">
                        topdoge card game
                      </p>
                    </div>
                  </div>

                  {/*<button className="timeline_btn mt-3">Button Name</button>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoudMap;
