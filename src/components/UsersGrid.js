import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminUsers } from "../store/admin";
import "../styles/UsersGrid.css";
import UserCard from "./UserCard";

const UsersGrid = () => {
  const dispatch = useDispatch();

  //compara el usuario que esta en el localStorage con todos los ususarios
  const userLocal = JSON.parse(localStorage.getItem("user"));


   //trae el estado de redux los usuarios
  useEffect(() => {
    dispatch(getAdminUsers());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    // la linea 16 evita el warning de dispatch por que no estan declarados dentro de useEffect

    
  
  //se guardan los usuarios que provienen de redux
  const users = useSelector((state) => state.admin)

  return (<ul>
    {(users === null) ? null : users.data.map((user)=>(
      (user.lastName !== userLocal.lastName) ? ( // IMPORTANTE muestra todos excepto el que esta logueado = localStorage
        <UserCard key={user.id} user={user}/>
      ) : null
      
    ))}
  </ul>);
};

export default UsersGrid;
