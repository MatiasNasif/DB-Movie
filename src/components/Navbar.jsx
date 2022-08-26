import React from "react";
import styles from "./Navbar.module.css";
import LogoRed from "../images/LogoViolet.png";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { userLogout } from "../store/user";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(userLogout())
      .then(() => {
        localStorage.removeItem("user");
      })
      .then(() => navigate("/"));
  };

  return (
    <div className="navbar" id={styles.navbar}>
      <div className="navbar-container">
        <div className={styles.navbarLogo}>
          <img
            src={LogoRed}
            alt="logo"
            id={styles.logo}
            onClick={() => navigate("/")}
          />
          <span className={styles.span}>Movies </span>
          <span className={styles.span}>Series </span>
          <span className={styles.span}>Popular </span>
         
          {/* // <button onClick={()=>navigate("/favorites/:id")}> */}
          <Link style={{color: '#FFF'}} to={`/favorites/${user.id}`}><span className={styles.span}>My List </span></Link>
         
          {/* </button> */}
        </div>
      </div>

      {user ? (
        <div className={styles.right} onClick={handleLogout}>
          <FiLogOut />
          Logout
          <span></span>
        </div>
      ) : (
        <div className={styles.right} onClick={() => navigate("/login")}>
          <FiLogIn />
          Login
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <div>

//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             FilmsData
//           </a>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link " aria-current="page" href="/">
//                   Films
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link " href="/register">
//                   Register
//                 </a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link " href="/login">
//                   Login
//                 </a>
//               </li>
//             </ul>
//             <ul className="nav navbar-nav navbar right">
//               <li>
//                 <a href="/login">
//                   <span className="glyphicon glyphicon-log-in" /> Login {" "}
//                 </a>
//               </li>

//               <li>
//                 <a href="/logout">
//                   <span className="glyphicon glyphicon-user" /> Logout {" "}
//                 </a>
//               </li>
//             </ul>
//             {/* <form className="d-flex" role="search">
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//         </form> */}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
