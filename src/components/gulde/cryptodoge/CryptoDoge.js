import React from "react";
import LeftSide from "../leftside/LeftSide";
import RightSide from "../rightside/RightSide";
import "./cryptodoge.css";

const CryptoDoge = () => {
  return (
    <div className=" crybto">
      <div className="row">
        <div className="col-12 p-0 col-lg-4  left_guid">
          <LeftSide />
        </div>
        <div className="col-12 col-lg-7 ">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default CryptoDoge;
