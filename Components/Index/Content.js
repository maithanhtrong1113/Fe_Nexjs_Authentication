import React from "react";
import { Container } from "reactstrap";

const Content = () => {
  return (
    <Container className=" py-5 header " fluid>
      <div className="container py-5 ">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 mb-3 animated slideInDown">
              Make Better Life With Trusted CryptoCoin
            </h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <a href="" className="btn btn-info py-3 px-4 animated slideInDown">
              Explore More
            </a>
          </div>
          <div className="col-lg-6 animated fadeIn">
            <img className="img-fluid " src="images/hero-1.png" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Content;
