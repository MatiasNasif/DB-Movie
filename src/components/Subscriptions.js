import "../styles/Subscriptions.css"

const Subscriptions = () => {
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
          <li>Acceso a Películas</li>
        </ul>
        <button>Elige este Plan</button>
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
        <button>Elige este Plan</button>
      </div>
      <div>
        <h5>Plan Empresa</h5>
        <h5>$ 899,00 Mensual</h5>
        <ul>
          <li>Panel de control de Usuarios</li>
          <li>Remover Usuarios</li>
          <li>Promover Usuarios a Admin</li>
        </ul>
        <button>Contáctame</button>
      </div>
    </div>
  );
};

export default Subscriptions;
