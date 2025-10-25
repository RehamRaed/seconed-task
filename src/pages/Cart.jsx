import React from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="my-5 cart-container">
      <h6 className="home-word">
        <Link
          to="/"
          className="text-decoration-none"
          style={{ color: "rgb(159, 159, 159)" }}
        >
          Home
        </Link>{" "}
        / <span>Cart</span>
      </h6>

      {cartItems.length === 0 ? (
        <div className="text-center py-5">
          <p className="mb-4 fs-5">Your cart is empty</p>
          <Button variant="dark" as={Link} to="/">
            Back to Home
          </Button>
        </div>
      ) : (
        <>
          <Row className="my-4">
            <Col xs={12}>
              <Table responsive bordered className="align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="d-flex flex-column flex-sm-row align-items-center p-4 gap-2 gap-sm-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          width="70"
                          height="70"
                          style={{ objectFit: "cover" }}
                        />
                        <span>{item.title}</span>
                      </td>
                      <td>{item.price}$</td>
                      <td>
                        <Form.Select
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          style={{
                            width: "60px",
                            margin: "0 auto",
                            fontSize: "0.85rem",
                          }}
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n}>{n}</option>
                          ))}
                        </Form.Select>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          ✕
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className="btns d-flex flex-column flex-sm-row justify-content-between mt-3">
                <Button variant="dark" className="mb-2 mb-sm-0">
                  <Link to="/" className="text-white text-decoration-none">
                    Return To Shop
                  </Link>
                </Button>
                <Button variant="dark">Update Cart</Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={7}>
              <div className="d-flex mt-4 gap-2">
                <Form.Control
                  type="text"
                  placeholder="Coupon Code"
                  style={{ maxWidth: "250px" }}
                />
                <Button style={{ backgroundColor: "#fd861d", border: "none" }}>
                  Apply Coupon
                </Button>
              </div>
            </Col>
            <Col lg={5} className="mt-4">
              <div className="border p-5 rounded">
                <h5 className="fw-semibold mb-4">Cart Total</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping:</span>
                  <span>{subtotal > 0 ? "Free" : "-"}</span>
                </div>
                <div className="d-flex justify-content-between fw-semibold border-top pt-2">
                  <span>Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <Button
                  className="w-100 mt-4"
                  style={{ backgroundColor: "#fd861d", border: "none" }}
                >
                  <Link
                    to="/checkout"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Proceed to Checkout
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Cart;
