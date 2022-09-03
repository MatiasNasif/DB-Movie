import { useDispatch } from "react-redux";
import { deleteAdminUsers, getAdminUsers, putAdminUsers } from "../store/admin";
import "../styles/UseCard.css";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  //promueve un usuario a admin
  const handleUpdate = (user) => {
    dispatch(putAdminUsers(user))
  };

  //borra un usuario
  const handleDelete = (user) => {
    dispatch(deleteAdminUsers(user))
    .then(()=> dispatch(getAdminUsers()))
  };

  return (
    <div className="user-card-container">
      <h1>{user.firstName}</h1>
      <button onClick={()=> handleUpdate(user)}>admin</button>
      <button>user</button>
      <button onClick={()=> handleDelete(user)}>delete</button>
    </div>
  );
};

export default UserCard;
