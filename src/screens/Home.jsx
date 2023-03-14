import React from "react";
import Products from "../product";
import { Row, Col } from "react-bootstrap";
import ProductScreen from "./Product";
const Home = () => {
  return (
    <>
      <Row>
        {Products.map((product) => (
          <Col key={product._id} md={3}>
            <ProductScreen product={product}></ProductScreen>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
