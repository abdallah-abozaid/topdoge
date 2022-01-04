import React, { useContext } from "react";
import "./SingleAnnemal.css";
import { useParams } from "react-router-dom";
import Mycontext from "../../../store";
const SingleAnnemal = () => {
  const param = useParams();
  const ctx = useContext(Mycontext);
  const filterItem = ctx.alldoges.filter((item) => {
    return item.name == param.name;
  });
  console.log(ctx.PriceSol);
  return (
    <div className="container SingleAnnemal">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={filterItem[0].image} alt="" />
          <h2 className="name">{filterItem[0].name} </h2>
          <p className="desc">{filterItem[0].description} </p>
        </div>
        <div className="col-12 col-md-6">
          <p className="desc mt-5 mt-md-0 mb-1 mb-md-3">
            {filterItem[0].description}
          </p>
          <h1 className="name mb-5">{filterItem[0].name} </h1>
          <div className="price">
            <p className="desc mb-1">Current Price</p>
            <h3 className="price_name">
              {(parseFloat(filterItem[0].price) * ctx.PriceSol)
                .toString()
                .slice(0, 6)}
              $
            </h3>
            <h3 className="price_name">{filterItem[0].price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAnnemal;
