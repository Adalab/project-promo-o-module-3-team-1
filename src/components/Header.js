import logoAwesome from '../images/logo-awesome-profile-cards.svg';

function Header() {
    return (
        <header className="headerCard">
        <a href="./index.html">
          {' '}
          {/*revisar ruta*/}
          <img
            className="imgCard"
            src={logoAwesome}
            alt="Awesome profile cards logo"
          />
        </a>
      </header>
    );
}

export default Header;