import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const checkoutSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  companyName: z.string().optional(),
  street: z.string().min(1, "Street Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(15, "Phone number is too long")
    .regex(/^\+?\d+$/, "Invalid phone number"),
  email: z.string().email("Invalid email"),
  saveInfo: z.boolean().optional(),
  payment: z.enum(["bank", "cash"], {
    required_error: "Please select a payment method",
  }),
  coupon: z.string().optional(),
});

function Checkout() {
  const { cartItems } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: "",
      companyName: "",
      street: "",
      apartment: "",
      city: "",
      phone: "",
      email: "",
      saveInfo: false,
      payment: "cash",
      coupon: "",
    },
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Order placed successfully!");
  };

  return (
    <Container className="my-5">
      <h3 className="mb-4">Billing Details</h3>
      <Row className="g-4">
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" {...register("firstName")} />
              {errors.firstName && (
                <Form.Text className="text-danger">
                  {errors.firstName.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" {...register("companyName")} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Street Address</Form.Label>
              <Form.Control type="text" {...register("street")} />
              {errors.street && (
                <Form.Text className="text-danger">
                  {errors.street.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apartment, floor, etc. (optional)</Form.Label>
              <Form.Control type="text" {...register("apartment")} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Town/City</Form.Label>
              <Form.Control type="text" {...register("city")} />
              {errors.city && (
                <Form.Text className="text-danger">
                  {errors.city.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" {...register("phone")} />
              {errors.phone && (
                <Form.Text className="text-danger">
                  {errors.phone.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" {...register("email")} />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Save this information for faster check-out next time"
                {...register("saveInfo")}
              />
            </Form.Group>

            <Button
              style={{ backgroundColor: "#fd861d", border: "none" }}
              type="submit"
              className="w-100 mt-3"
            >
              Place Order
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <Card className="p-3" style={{ marginTop: "32px" }}>
            <h5>Order Summary</h5>
            <hr />
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    width="50"
                    height="50"
                    style={{ objectFit: "cover" }}
                  />
                  <span>{item.title}</span>
                </div>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold ">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <hr />

            <Form>
              <Form.Check
                type="radio"
                label="Bank"
                value="bank"
                {...register("payment")}
              />
              <Form.Check
                type="radio"
                label="Cash on delivery"
                value="cash"
                {...register("payment")}
              />
              {errors.payment && (
                <Form.Text className="text-danger">
                  {errors.payment.message}
                </Form.Text>
              )}

              <Form.Group className="d-flex gap-2 mt-3">
                <Form.Control
                  type="text"
                  placeholder="Coupon Code"
                  {...register("coupon")}
                  style={{ flex: "2" }}
                />
                <Button
                  style={{
                    backgroundColor: "#fd861d",
                    border: "none",
                    flex: "1",
                  }}
                >
                  Apply Coupon
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
