import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import {} from "./register.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <>
      <Container
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/03/12/34/31/360_F_312343174_1HPYRLUoQZ0ggSX5ZQvXBiwmJ4JVTVvK.jpg')",
        }}
      >
        <Form
          style={{
            width: "400px",
            marginLeft: "450px",
            backgroundColor: "silver",
            borderRadius: "15px",
            padding: "50px",
            marginTop: "80px",
          }}
        >
          <div
            className="box"
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              padding: "5px",
              backgroundColor: "#ABABAB",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Login</h1>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>
                <br />
                <br />
                Email address
              </b>
            </Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Password</b>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={loginHandler}
            style={{ marginLeft: "110px" }}
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
