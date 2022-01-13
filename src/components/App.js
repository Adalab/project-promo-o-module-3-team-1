import '../styles/App.scss';
import { useState } from 'react';
import imageCam from '../images/cam-image.png';
import logoAwesome from '../images/logo-awesome-profile-cards.svg';

function App() {
  const [data, setData] = useState({
    palette: '1',
    name: '',
    job: '',
    photo: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  });
  const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    setData({
      ...data,
      [inputChanged]: ev.currentTarget.value,
    });
  };

  const changePalette = () => {
    let paletteClass = '--palette1';
    if (data.palette === '1') {
      paletteClass = '--palette1';
    } else if (data.palette === '2') {
      paletteClass = '--palette2';
    } else if (data.palette === '3') {
      paletteClass = '--palette3';
    }
    return paletteClass;
  };

  const handleClickReset = () => {
    setData({
      palette: '1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

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
          <button
            onClick={handleClickReset}
            className="card_reset js-card_reset"
          >
            <i className="card_reset__icon far fa-trash-alt"> Reset</i>
          </button>

          <div className="card-preview">
            <div
              className={`card-preview__header js-card-preview-header card-preview__header${changePalette()}`}
            >
              <h3
                className={`card-preview__title card-preview__title${changePalette()} js-preview_name`}
              >
                {data.name || 'Nombre completo'}
              </h3>
              <p className="card-preview__subtitle js-preview_job">
                {data.job || 'Front-end developer'}
              </p>
            </div>
            <div
              className="card-preview__photo js__profile-image"
              style={{
                backgroundImage: `url(${
                  data.photo || 'https://www.fillmurray.com/240/200'
                })`,
              }}
            ></div>
            <nav className="card-preview__nav">
              <ul className="card__socialmedia">
                <li
                  className={`card__socialmedia--item card__socialmedia--item${changePalette()}`}
                >
                  <a
                    href={`tel:${data.phone || ''}`}
                    className="js-preview_phone"
                    alt="mobile"
                  >
                    <i
                      className={`socialmedia_icon fas fa-mobile-alt socialmedia_icon${changePalette()}`}
                    >
                      {' '}
                    </i>
                  </a>
                </li>
                <li
                  className={`card__socialmedia--item card__socialmedia--item${changePalette()}`}
                >
                  <a
                    href={`mailto:${data.email || ''}`}
                    className="js-preview_email"
                    alt="email"
                  >
                    <i
                      className={`socialmedia_icon far fa-envelope socialmedia_icon${changePalette()}`}
                    ></i>
                  </a>
                </li>
                <li
                  className={`card__socialmedia--item card__socialmedia--item${changePalette()}`}
                >
                  <a
                    href={`http://www.linkedin.com/in/${data.linkedin}`}
                    className="js-preview_linkedin"
                    alt="linkedin"
                  >
                    <i
                      className={`socialmedia_icon fab fa-linkedin-in socialmedia_icon${changePalette()}`}
                    ></i>
                  </a>
                </li>
                <li
                  className={`card__socialmedia--item card__socialmedia--item${changePalette()}`}
                >
                  <a
                    href={`https://github.com/${data.github}`}
                    className="js-preview_github"
                    alt="github"
                  >
                    <i
                      className={`socialmedia_icon fab fa-github-alt socialmedia_icon${changePalette()}`}
                    ></i>
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
                    value="1"
                    id="colours1"
                    name="palette"
                    className="colourpalette"
                    onChange={handleInput}
                    checked={data.palette === '1'}
                  />
                  <input
                    type="radio"
                    value="2"
                    id="colours2"
                    name="palette"
                    className="colourpalette"
                    onChange={handleInput}
                    checked={data.palette === '2'}
                  />
                  <input
                    type="radio"
                    value="3"
                    id="colours3"
                    name="palette"
                    className="colourpalette"
                    onChange={handleInput}
                    checked={data.palette === '3'}
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
                    name="name"
                    id="name"
                    className="form__input js-full_name"
                    value={data.name}
                    onChange={handleInput}
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
                    value={data.job}
                    onChange={handleInput}
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
                    <div
                      className="form__image-section--preview js__profile-preview"
                      style={{
                        backgroundImage: `url(${data.photo})`,
                      }}
                    ></div>
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      className="collapsed js__profile-upload-btn"
                      value={data.photo}
                      onChange={handleInput}
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
                    value={data.email}
                    onChange={handleInput}
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
                    value={data.phone}
                    onChange={handleInput}
                    /*pattern=" ^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}" */
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
                    value={data.linkedin}
                    onChange={handleInput}
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
                    value={data.github}
                    onChange={handleInput}
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
