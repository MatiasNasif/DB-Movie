import "../styles/Login.css"
import Form from "react-bootstrap/Form";
import useInput from "../utils/useInput.js";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/user";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  //impide que un usuario logueado ingrese /login
  useEffect(() => {
    if (user) {
      if (location.pathname === "/login") {
        navigate("/");
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        email: email.value,
        password: password.value,
      })
    )
      .then(() => {
        if (localStorage.getItem("user")) navigate("/"); //redirecciona a un usuario logueado al home
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit}>

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
}

export default Login