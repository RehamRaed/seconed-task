import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";
import { useNavigate } from "react-router-dom";

function Favorite() {
  const { favorites, removeFavorite } = useFavorite();
  const navigate = useNavigate();
  return (
    <Container className="my-5">
      <h6 className="home-word">
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "rgb(159, 159, 159)" }}
        >
          Home
        </Link>{" "}
        / <span>Favorites</span>
      </h6>

      {favorites.length === 0 ? (
        <div className="text-center py-5">
          <p className="mb-4 fs-5">Your favorites list is empty</p>
          <Button variant="dark" as={Link} to="/">
            Back to Home
          </Button>
        </div>
      ) : (
        <Row className="g-4">
          {favorites.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <div
                className="card position-relative h-100 border p-2 d-flex align-items-center "
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                {/* زر الإزالة */}
                <Button
                  variant="danger"
                  size="sm"
                  className="position-absolute top-0 end-0 m-2 rounded-circle p-1 d-flex align-items-center justify-content-center"
                  style={{ width: "25px", height: "25px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFavorite(item.id);
                  }}
                >
                  <i className="bi bi-x text-white"></i>
                </Button>

                <div className="d-flex align-items-center mt-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "130px",
                      height: "130px",
                      padding: "5px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.title}</h6>
                    <p className="mb-0 text-danger fw-bold">${item.price}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Favorite;
