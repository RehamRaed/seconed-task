import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContect"
import { useNavigate } from "react-router-dom";
import shopping from "../assets/shopping.jpg";
import "../styles/AuthPage.css";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const { signup, login, googleSignUp } = useAuth(); 
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        await login(data.email, data.password);
      } else {
        await signup(data.email, data.password);
      }
      navigate("/"); 
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignUpClick = async () => {
    try {
      const result = await googleSignUp();
      const user = result.user;
      if (user.metadata.creationTime === user.metadata.lastSignInTime) {
        navigate("/");
      } else {
        alert("This Google account already exists.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-white d-flex align-items-center">
      
      <Row style={{ margin: "4rem 0 8rem 0" }}>
        
        <Col lg={7} style={{ paddingLeft: "0" }}>
          <img src={shopping} alt="Shopping" className="object-fit-cover" />
        </Col>

        <Col lg={5} className="d-flex flex-column justify-content-center auth-col">
          {isLogin ? (
            <>
              <h4 className="fw-semibold mb-4">Log in to Exclusive</h4>
              <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Email or Phone Number" className="p-3" {...register("email")} />
                  {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control type="password" placeholder="Password" className="p-3" {...register("password")} />
                  {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100 py-2">Log In</Button>
              </Form>
              <div className="text-end mb-3">
                <a href="#" className="text-danger text-decoration-none">Forgot Password?</a>
              </div>
              <p className="text-center">
                Don’t have an account?{" "}
                <button onClick={() => setIsLogin(false)} className="btn btn-link text-primary p-0">Create one</button>
              </p>
            </>
          ) : (
            <>
              <h4 className="fw-semibold mb-4">Create an account</h4>
              <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="text" placeholder="Name" className="p-3" {...register("name")} />
                  {errors.name && <p className="text-danger small mt-1">{errors.name.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control type="email" placeholder="Email or Phone Number" className="p-3" {...register("email")} />
                  {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Control type="password" placeholder="Password" className="p-3" {...register("password")} />
                  {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100 py-2">Create Account</Button>

                <Button variant="outline-secondary" className="w-100 py-2 mt-2 d-flex align-items-center justify-content-center gap-2" onClick={handleGoogleSignUpClick}>
                  <i className="bi bi-google"></i> Sign up with Google
                </Button>
              </Form>
              <p className="text-center">
                Already have an account?{" "}
                <button onClick={() => setIsLogin(true)} className="btn btn-link text-primary p-0">Log in</button>
              </p>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default AuthPage;
