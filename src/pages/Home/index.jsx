import React from "react";
import Header from "../../components/Header";
import DonorList from "../../components/DonorList";
import {Donors} from "../../assets/Data.js";
import HighLightBar from "../../components/HighLightsBar";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      {/* <h1>{Donors.map(donor => donor.name).join(", ")}</h1> */}
      <Container fluid>
      <Row>
        <Col >
          <Header title={"בית חולים שערי-צדק"} size={"70px"} margin={"0 20% 0 0 "}/>
          <DonorList donors={Donors} />

        </Col>
        <Col xl={3} lg={3} md={12} sm={12} xs={12}>
            <HighLightBar />
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default Home;
