import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getUser, userUpdate } from "../store/user";
import "../styles/Subscriptions.css";

const Subscriptions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //para llenar los placeholder y comparar si cambian los campos
  const user = JSON.parse(localStorage.getItem("user"));

  //si hay usuario con plan no puede acceder devuelta
  useEffect(() => {
    if (user.plan === "basico" || user.plan === "premium") navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubBasico = () => {
    dispatch(
      userUpdate({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        plan: "basico",
      })
    )
      .then(() => dispatch(getUser()))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleSubPremium = () => {
    dispatch(
      userUpdate({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        plan: "premium",
      })
    )
      .then(() => dispatch(getUser()))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="subscriptions-container">
      <h1>Disfruta al máximo</h1>
      <h5 className="subtitle-subcriptions">
        Disfruta de los personajes más icónicos, descubre nuevas historias y
        emocionantes títulos exclusivos
      </h5>
      <div>
        <h5>Plan Básico</h5>
        <h5>$ 299,00 Mensual</h5>
        <ul>
          <li>1 dispositivo a la vez</li>
          <li>Definición estándar</li>
          <li>Acceso a Películas y Series</li>
        </ul>
        <button onClick={() => handleSubBasico()}>Elige este Plan</button>
      </div>
      <div>
        <h5>Plan Premium</h5>
        <h5>$ 499,00 Mensual</h5>
        <ul>
          <li>Todos los dispositivos</li>
          <li>Alta definición y 4K</li>
          <li>Acceso a Películas y Series</li>
          <li>Sección personalizada para Favoritos</li>
        </ul>
        <button onClick={() => handleSubPremium()}>Elige este Plan</button>
      </div>
      <div>
        <h5>Plan Empresa</h5>
        <h5>$ 899,00 Mensual</h5>
        <ul>
          <li>Panel de control de Usuarios</li>
          <li>Remover Usuarios</li>
          <li>Promover Usuarios a Admin</li>
        </ul>

        <button>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=matiasezequielnasif@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctame
          </a>
        </button>
      </div>
    </div>
  );
};

export default Subscriptions;
