import "../styles/Register.css";
import Form from "react-bootstrap/Form";
import useInput from "../utils/useInput.js";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/user";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const firstName = useInput();
  const lastName = useInput();
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  //impide que un usuario logueado ingrese /register
  useEffect(() => {
    if (user) {
        navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // la linea 25 evita el warning de user y navigate por que no estan declarados dentro de useEffect

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
        if (!regUser.error) navigate("/login"); //redirecciona a un usuario registrado a login
      })
      .catch((err) => console.log(err));
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
        <h5>Are you already registered ? <Link className="link-login" to="/login">log in</Link></h5>
        <button className="button-register" type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Register;
