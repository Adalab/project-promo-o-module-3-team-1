import '../styles/App.scss';
import imageCam from '../images/cam-image.png';
import logoAwesome from '../images/logo-awesome-profile-cards.svg';

function App() {
  return (
    <div>
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

      <main className="create_card_main">
        <section className="card_hero">
          <button className="card_reset js-card_reset">
            <i className="card_reset__icon far fa-trash-alt"> Reset</i>
          </button>

          <div className="card-preview">
            <div className="card-preview__header js-card-preview-header">
              <h3 className="card-preview__title js-preview_name">
                Nombre apellido
              </h3>
              <p className="card-preview__subtitle js-preview_job">
                Front-end developer
              </p>
            </div>
            <div className="card-preview__photo js__profile-image"></div>
            <nav className="card-preview__nav">
              <ul className="card__socialmedia">
                <li className="card__socialmedia--item">
                  <a href="/" className="js-preview_phone" alt="mobile">
                    <i className="socialmedia_icon fas fa-mobile-alt"> </i>
                  </a>
                </li>
                <li className="card__socialmedia--item">
                  <a
                    href="mailto:email@email.com"
                    className="js-preview_email"
                    alt="email"
                  >
                    <i className="socialmedia_icon far fa-envelope"></i>
                  </a>
                </li>
                <li className="card__socialmedia--item">
                  <a href="/" className="js-preview_linkedin" alt="linkedin">
                    <i className="socialmedia_icon fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="card__socialmedia--item">
                  <a href="/" className="js-preview_github" alt="github">
                    <i className="socialmedia_icon fab fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="background_features">
          <section className="container containerdesign">
            <div
              className="design js-legendDesign js-legend"
              id="designContent"
            >
              <div className="icontitle">
                <i className="far fa-object-ungroup" alt="icon"></i>
                <h4 className="designtitle">Diseña</h4>
              </div>
              <i
                className="fas fa-chevron-up js-arrowdown-design js_arrows"
                alt="icon"
              ></i>
            </div>

            <section
              className="paletteandcolours js-sectionDesign js_content"
              id="designContent"
            >
              <p className="colourstitle">Colores</p>

              <section className="colours">
                <form className="palettes">
                  <input
                    type="radio"
                    defaultValue="colours1"
                    id="colours1"
                    name="colourpalette"
                    className="js_colourpalette"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    defaultValue="colours2"
                    id="colours2"
                    name="colourpalette"
                    className="js_colourpalette"
                  />
                  <input
                    type="radio"
                    defaultValue="colours3"
                    id="colours3"
                    name="colourpalette"
                    className="js_colourpalette"
                  />
                </form>
                <section className="palettescolours">
                  <ul className="colours1">
                    <li className="palette1 colour1"></li>
                    <li className="palette1 colour2"></li>
                    <li className="palette1 colour3"></li>
                  </ul>
                  <ul className="colours2">
                    <li className="palette2 colour1"></li>
                    <li className="palette2 colour2"></li>
                    <li className="palette2 colour3"></li>
                  </ul>
                  <ul className="colours3">
                    <li className="palette3 colour1"></li>
                    <li className="palette3 colour2"></li>
                    <li className="palette3 colour3"></li>
                  </ul>
                </section>
              </section>
            </section>
          </section>
          <section className="section__form container">
            <div
              className="section__bar js-legendFill js-legend"
              id="formContent"
            >
              <div className="section__bar--icontitle">
                <i className="far fa-keyboard" alt="icon"></i>
                <h4 className="section__bar--icontitle--title">Rellena</h4>
              </div>
              <i
                className="fas fa-chevron-down js-arrowdown-fill js_arrows"
                alt="icon"
              ></i>
            </div>

            <form action="" method="post" className="form js-form">
              <div
                className="js-sectionFill js_content collapsed"
                id="formContent"
              >
                <fieldset>
                  <label htmlFor="name" className="form__label">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Sally Jill"
                    name="full_name"
                    id="name"
                    className="form__input js-full_name"
                    defaultValue=""
                    required
                    pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
                  />
                  <label htmlFor="job" className="form__label">
                    Puesto
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Front-end unicorn"
                    name="job"
                    id="job"
                    className="form__input js-job"
                    pattern="[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}"
                    required
                  />

                  <label htmlFor="image" className="form__label">
                    Imagen de perfil
                  </label>
                  <div className="form__image-section">
                    <label
                      className="form__image-section--add js__profile-trigger"
                      htmlFor="photo"
                    >
                      Añadir imagen
                    </label>
                    <div className="form__image-section--preview js__profile-preview"></div>
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      className="collapsed js__profile-upload-btn"
                      required
                    />
                  </div>

                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Ej: sally-hill@gmail.com "
                    name="email"
                    id="email"
                    className="form__input js-email"
                    required
                  />

                  <label htmlFor="phone" className="form__label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="Ej: 555-55-55-55"
                    pattern=""
                    name="phone"
                    id="phone"
                    className="form__input js-phone"
                    required /*pattern=" ^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}" */
                  />

                  <label htmlFor="linkedin" className="form__label">
                    Linkedin
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: linkedin.com/in/sally.hill"
                    name="linkedin"
                    id="linkedin"
                    className="form__input js-linkedin"
                    required
                  />
                  <label htmlFor="github" className="form__label">
                    Github
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: @sally-hill"
                    name="github"
                    id="github"
                    className="form__input js-github"
                  />
                </fieldset>
              </div>
            </form>
          </section>
          <section className="container containerShare">
            <div
              className="titleShare js-legendShare js-legend"
              id="shareContent"
            >
              <div className="titleShare__titleIcon">
                <i className="fas fa-share-alt"></i>
                <h4 className="titleShare__title">Comparte</h4>
              </div>
              <i
                className="fas fa-chevron-down js-arrowdown-share js_arrows"
                alt="icon"
              ></i>
            </div>

            <div
              className="containerButton js-sectionShare js_content collapsed"
              id="shareContent"
            >
              <button className="buttonCard js-buttonCard buttonCard--on">
                <i className="far fa-address-card"></i>
                <p className="buttonCard__title">Crear tarjeta</p>
              </button>{' '}
              {/*revisar botón. Input*/}
              <p className="catchError js_catchError"></p>
              <div className="createdCard js-createdCard collapsed">
                <h5 className="createdCard__title">
                  La tarjeta ha sido creada:
                </h5>
                <a className="createdCard__link js_createdCard__link" href="/">
                  {' '}
                </a>
                <button className="createdCard__buttonTwitter">
                  <i className="fab fa-twitter"></i>
                  <a
                    className="buttonLink js-buttonLink"
                    href="www.twitter.com"
                    title="twitter"
                  >
                    Compartir en Twitter
                  </a>
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__text">2021: Una Odisea con JavaScript.</p>
        <a href="https://www.adalab.es/" target="_blank" rel="noreferrer">
          <img className="footer__logo" src={imageCam} alt="Adalab Logo" />
        </a>
      </footer>
    </div>
  );
}

export default App;
