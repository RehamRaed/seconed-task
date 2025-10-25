import React, { useState, useEffect } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/TeamCarousel.css";

function TeamCarousel() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then((res) => res.json())
      .then((data) => {
        const spesificTeam = data.results.slice(0, 9);
        setTeamMembers(spesificTeam);
      })
      .catch((err) => console.error(err));
  }, []);

  const slides = [];
  for (let i = 0; i < teamMembers.length; i += 3) {
    slides.push(teamMembers.slice(i, i + 3));
  }

  return (
    <section className="container py-4">
      <h2 className="text-center mb-5 fw-bold">Our Team</h2>

      <Carousel indicators controls={false} className="team-carousel">
        {slides.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((member, idx) => (
                <Col key={idx} md={4} sm={6} className="mb-3">
                  <div className="card text-center h-100 shadow-sm border-0 ">
                    <div style={{ background: "#f7f6f6" }}>
                      <div
                        style={{
                          width: "180px",
                          height: "180px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          margin: "30px auto",
                        }}
                      >
                        <img
                          src={member.picture.large}
                          alt={`${member.name.first} ${member.name.last}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-semibold">
                        {member.name.first} {member.name.last}
                      </h5>
                      <p className="card-text text-muted">Team Member</p>
                      <div className="d-flex justify-content-center gap-3">
                        <a href="#">
                          <i className="bi bi-twitter text-dark"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-facebook text-dark"></i>
                        </a>
                        <a href="#">
                          <i className="bi bi-instagram text-dark"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default TeamCarousel;
