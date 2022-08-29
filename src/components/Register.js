import "../styles/Register.css";
import Form from "react-bootstrap/Form";
import useInput from "../utils/useInput.js";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/user";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";

const Register = () => {
  const firstName = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      if (location.pathname === "/register") {
        navigate("/login");
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userRegister({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
    )
      .then((regUser) => {
        if (!regUser.error) navigate("/login");
      })
      .catch((err) => console.log("CATCH", err));
  };

  return (
    <div className="register-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder="Enter First Name"
            {...firstName}
          ></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLast">
          <Form.Label>Last Name</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Last Name"
            {...lastName}
          ></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <br></br>
          <input type="email" placeholder="Enter email" {...email}></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <br></br>
          <input type="password" placeholder="Password" {...password}></input>
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Register;