import "../styles/Profile.css";
import Form from "react-bootstrap/Form";
import useInput from "../utils/useInput.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getUser, userUpdate } from "../store/user";
import { BsPersonCircle } from "react-icons/bs"
import { useEffect } from "react";

const Profile = () => {
  const firstName = useInput();
  const lastName = useInput();
  const email = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //para llenar los placeholder y comparar si cambian los campos
  const user = JSON.parse(localStorage.getItem("user"))

  //si no hay usuario logueado no puede editar perfil
  useEffect(()=>{
    if(!user) navigate("/")
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  //boton que ejecuta los cambios
  const handleUpdateProfile = (e) =>{
    e.preventDefault();

    //actualiza datos solo si el campo es completado, sino se queda con los datos actuales
    dispatch(userUpdate({
        firstName: firstName.value.length === 0 ? user.firstName : firstName.value,
        lastName: lastName.value.length === 0 ? user.lastName : lastName.value,
        email: email.value.length === 0 ? user.email : email.value
    }))
    .then(()=> dispatch(getUser()))
    .then(()=> navigate("/"))
    .catch((err)=> console.log(err))
  }

  return (
    <>
    <BsPersonCircle className="profile-edit"/>
    <div className="profile-container">
      <Form onSubmit={handleUpdateProfile}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First Name</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder={user?.firstName}
            {...firstName}
          ></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLast">
          <Form.Label>Last Name</Form.Label>
          <br></br>
          <input
            type="text"
            placeholder={user?.lastName}
            {...lastName}
          ></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <br></br>
          <input type="email" placeholder={user?.email} {...email}></input>
        </Form.Group>

        <button className="button-register" type="submit">
          Save Changes
        </button>
      </Form>
    </div>
    </>
  );
};

export default Profile;
