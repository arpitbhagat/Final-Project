import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

import {} from "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const dispatch = useDispatch();

  const registerhandler = () => {
    if (password.length <= 6) {
      alert("Password should be greater than 6 character");
    } else if (password !== confirmPassword) {
      alert("Password do not match");
    } else if (name == "") {
      alert("name should not be empty");
    } else if (email == "") {
      alert("email should not be empty");
    } else {
      const user = { name, email, password, confirmPassword };
      dispatch(registerUser(user));
    }
  };

  return (
    <>
      <Container
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/03/12/34/31/360_F_312343174_1HPYRLUoQZ0ggSX5ZQvXBiwmJ4JVTVvK.jpg')",
        }}
      >
        {/* {loading && <Loader />}
        {success && <Success success="User register successfully"/>}
        {error && <Error error="Something went wrong"/>} */}
        <Form
          style={{
            width: "500px",
            marginLeft: "370px",
            backgroundColor: "silver",
            borderRadius: "15px",
            padding: "20px",
            marginTop: "10px",
          }}
        >
          <div
            className="box"
            style={{
              border: "2px solid black",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "grey",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Registration</h1>
          </div>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              <b>
                <br></br>Name
              </b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Email address</b>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Password</b>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>
              <b>Confirm Password</b>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={registerhandler}
            style={{ marginLeft: "180px" }}
          >
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
