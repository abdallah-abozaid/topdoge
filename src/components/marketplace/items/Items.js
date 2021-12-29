import React from "react";
import "./items.css";

import { Card, Col, Row } from "react-bootstrap";
const items = [
  {
    id: 1,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog1.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 2,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog2.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 3,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog3.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 4,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog4.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 5,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog3.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 6,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog2.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 7,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog4.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 8,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog1.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 9,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog3.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 10,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog2.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 11,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog4.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
  {
    id: 12,
    imgTag: "../../../Assets/Tag.png",
    imgDog: "../../../Assets/Dog1.png",
    info_1: "Pack Speed",
    info_2: "Consistancy",
    info_3: "Win Ratio",
    state: "on",
    price: "34,000",
  },
];
const Items = () => {
  return (
    <div className="container">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mt-5">
        {items.map((item) => (
          <Col key={item.id} className="mb-4">
            <Card>
              <div className="card_img">
                <div className=" p-0 pl-3 card_tag d-flex justify-content-start">
                  <img src={item.imgTag} alt="" />
                </div>
                <div className="p-2  d-flex align-items-center justify-content-center">
                  <img src={item.imgDog} alt="" />
                </div>
              </div>
              <div className="row m-0 mt-2 card-body">
                <div className="col-12 p-0">
                  <div className="row m-0">
                    <div className="col-6 pl-2 p-0">
                      <p className="mb-0 card_info">Release</p>
                    </div>
                    <div className="col-6 pl-4 p-0">
                      <p className="mb-0 card_info">{item.info_1}</p>
                    </div>
                  </div>
                  <div className="row m-0">
                    <div className="col-6 pl-2 p-0">
                      <p className="mb-0 card_info">Stamina</p>
                    </div>
                    <div className="col-6 pl-4 p-0">
                      <p className="mb-0 card_info">{item.info_2}</p>
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
                        Price <span> $ {item.price}</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Items;
