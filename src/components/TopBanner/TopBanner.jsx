import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/custom.css";

export class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="sliderContent">
              <Row>
                <Col className="text-center">
                <h1 className="sliderTitle">Hello World!</h1>
                <h4 className="sliderSubtitle">Learn Professionally</h4>
                <Button variant="primary">Read More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
