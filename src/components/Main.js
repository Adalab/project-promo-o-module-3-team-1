import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <section className="hero">
      <h1 className="hero__section--title">Crea tu tarjeta de visita</h1>
      <p className="hero__section--text">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </p>

      <nav className="nav-container">
        <ul className="nav-container__list">
          <li className="list-desing">
            <i className="list-desing__icon far fa-object-ungroup"></i>Diseña
          </li>
          <li className="list-desing">
            <i className="list-desing__icon far fa-keyboard"></i>Rellena
          </li>
          <li className="list-desing">
            <i className="list-desing__icon fas fa-share-alt"></i>Comparte
          </li>
        </ul>
      </nav>

      <div className="button_container">
        <Link
          to="/CardGenerate"
          className="button_start"
          title="Go to create card"
          alt="Go to create card"
        >
          Comenzar
        </Link>
      </div>
    </section>
  );
};
export default Main;
