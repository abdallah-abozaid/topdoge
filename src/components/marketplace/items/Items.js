import React, { useContext, useState } from "react";
import "./items.css";
import { Card, Col, Row } from "react-bootstrap";
import Mycontext from "../../../store";
import { Link } from "react-router-dom";
const Items = () => {
  const ctx = useContext(Mycontext);
  return (
    <div className="container">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-5">
        {ctx.filterdogs.map((item, index) => (
          <Col key={index} className="mb-4">
            <Card>
              <Link to={`/marktplace/${item.name}`}>
                <div className="card_img">
                  <div className=" p-0 pl-3 card_tag d-flex justify-content-start">
                    <img src={item.external_url} alt="" />
                  </div>
                  <div className="p-2  d-flex align-items-center justify-content-center">
                    <img src={item.image} alt="" />
                  </div>
                </div>
                <div className="row m-0 mt-2 card-body">
                  <div className="col-12 p-0">
                    <div className="row m-0">
                      <div className="col-6 pl-2 p-0">
                        <p className="mb-0 card_info">Release</p>
                      </div>
                      <div className="col-6 pl-4 p-0">
                        <p className="mb-0 card_info">{item.name}</p>
                      </div>
                    </div>
                    <div className="row m-0">
                      <div className="col-6 pl-2 p-0">
                        <p className="mb-0 card_info">Stamina</p>
                      </div>
                      <div className="col-6 pl-4 p-0">
                        <p className="mb-0 card_info">{item.description}</p>
                      </div>
                    </div>
                    <div className="row m-0 pb-2 dashed_line">
                      <div className="col-6 pl-2 p-0">
                        <p className="mb-0 card_info">Rarity</p>
                      </div>
                      <div className="col-6 pl-4 p-0">
                        <p className="mb-0 card_info">{item.info_3}</p>
                      </div>
                    </div>

                    <div className="row m-0 mt-3">
                      <div className="col-6 pl-2 p-0">
                        <p className="mb-0 card_info_total">
                          Stats <span> {item.state}</span>
                        </p>
                      </div>
                      <div className="col-6 pl-4 p-0">
                        <p className="mb-0 card_info_total">
                          Price <span> {item.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Items;
