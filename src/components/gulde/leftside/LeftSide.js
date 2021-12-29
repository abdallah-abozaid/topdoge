import React from "react";
import "./leftside.css";
import { Accordion } from "react-bootstrap";
const LeftSide = () => {
  return (
    <div className="left_accordion">
      <div className="title">
        <h3>CryptoDogs Guide</h3>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Guide heading here</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Guide heading here</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Guide heading here</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Guide heading here</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Guide heading here</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Guide heading here</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Guide heading here</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
              <li>Guide heading here</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default LeftSide;
