import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Frontend from "../../assets/images/ser-frontEnd.svg";
import Mobile from "../../assets/images/ser-mobile.svg";
import Backend from "../../assets/images/ser-Backend.svg";
import Qa from "../../assets/images/ser-qa.svg";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/custom.css";

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
            <h1 className="serviceMainTitle">Our Services</h1>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="Frontend" src={Frontend} alt="Frontend" />
                <h2 className="serviceTitle">Frontend Development</h2>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
                <img className="Mobile" src={Mobile} alt="Mobile" />
                <h2  className="serviceTitle">App Development</h2>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
                <img className="Backend" src={Backend} alt="Backend" />
                <h2  className="serviceTitle">Software Development</h2>
              </div>
            </Col>

            <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
                <img className="Qa" src={Qa} alt="Qa" />
                <h2  className="serviceTitle">Quality Assurance</h2>
              </div>
            </Col>
          </Row>
          <h1 className="serviceMainTitle">Our Services</h1>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
