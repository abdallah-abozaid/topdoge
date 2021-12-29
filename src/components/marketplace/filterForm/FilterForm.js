import React from "react";
import "./filterform.css";
import Filter from "../../../Assets/Filter.png";
import Search from "../../../Assets/Search.png";

const FilterForm = () => {
  return (
    <div className="container">
      <div className="row m-0 pt-1 pb-1 mt-5">
        <div className="col-3 col-sm-2  mb-2 col-lg-1 p-0 filter">
          <button className="d-flex align-items-center ">
            <img src={Filter} alt="" />
            <p className="mb-0">filter</p>
          </button>
        </div>

        <div className="col-5 mb-2 col-lg-2 p-0 pl-4 d-flex align-items-center generation">
          <p className="mb-0 mx-2 ml-0">Gen</p>
          <input className="mkt_num p-2" type="number" placeholder="0" />
        </div>

        <div className="col-12  mb-2 col-lg-9 p-0 d-flex align-items-center search_box">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <img height="25" src={Search} alt="" />{" "}
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div className="input-group-append">
              <span
                className="input-group-text d-flex align-items-center justify-content-center"
                id="basic-addon2"
              >
                <a className="inner_search mr-4" href="#">
                  Submit
                </a>
                <a className="inner_search mr-2" href="#">
                  Cancel
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
