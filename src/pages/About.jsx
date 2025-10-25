import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServicesSection from "../components/ServicesSection";
import StatisticsSection from "../components/StatisticsSection";
import TeamCarousel from "../components/TeamCarousel";
import about from "../assets/about.png";
function About() {
  return (
    <div className="container my-5 about-container">
      <h6 className="home-word">
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "rgb(159, 159, 159)" }}
        >
          Home
        </Link>{" "}
        / <span>About</span>
      </h6>
      <Row className="align-items-center">
        <Col
          lg={6}
          xs={12}
          className="order-lg-1 order-2 d-flex flex-column justify-content-center"
        >
          <h1 className="fw-bold mb-4">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </Col>

        <Col lg={6} xs={12} className="order-lg-2 order-1">
          <div className="mx-auto" style={{ width: "60%", overflow: "hidden" }}>
            <img
              src={about}
              alt="aboutImage"
              className="img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Col>
      </Row>

      <StatisticsSection />
      <TeamCarousel />
      <ServicesSection />
    </div>
  );
}
export default About;
