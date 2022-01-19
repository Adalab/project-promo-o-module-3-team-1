import InputLabel from "./InputLabel";

function Form(props) {
    const isDisabled = () => {
        if (
          props.data.name.length === 0 ||
          props.data.job.length === 0 ||
          props.data.email.length === 0 ||
          props.data.linkedin.length === 0 ||
          props.data.github.length === 0
        ) {
          return true;
        }
      };

    return (
        <section className="background_features">
          <section className="container containerdesign">
            <InputLabel id='designContent' icon='far fa-object-ungroup' title='Diseña'/>
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
                    onChange={props.handleInput}
                    checked={props.data.palette === '1'}
                  />
                  <input
                    type="radio"
                    value="2"
                    id="colours2"
                    name="palette"
                    className="colourpalette"
                    onChange={props.handleInput}
                    checked={props.data.palette === '2'}
                  />
                  <input
                    type="radio"
                    value="3"
                    id="colours3"
                    name="palette"
                    className="colourpalette"
                    onChange={props.handleInput}
                    checked={props.data.palette === '3'}
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
          <section className="section__form container containerdesign">
          <InputLabel id='formContent' icon='far fa-keyboard' title='Rellena'/>
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
                    value={props.data.name}
                    onChange={props.handleInput}
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
                    value={props.data.job}
                    onChange={props.handleInput}
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
                        backgroundImage: `url(${props.data.photo})`,
                      }}
                    ></div>
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      className="collapsed js__profile-upload-btn"
                      value={props.data.photo}
                      onChange={props.handleInput}
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
                    value={props.data.email}
                    onChange={props.handleInput}
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
                    value={props.data.phone}
                    onChange={props.handleInput}
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
                    value={props.data.linkedin}
                    onChange={props.handleInput}
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
                    value={props.data.github}
                    onChange={props.handleInput}
                  />
                </fieldset>
              </div>
            </form>
          </section>
          <section className="container containerdesign">
          <InputLabel id='shareContent' icon='fas fa-share-alt' title='Comparte'/>
            <div
              className="containerButton js-sectionShare js_content collapsed"
              id="shareContent"
            >
              <button
                className={`buttonCard js-buttonCard buttonCard--${
                  isDisabled() ? 'off' : 'on'
                }`}
                disabled={isDisabled()}
                onClick={props.handleClickBtn}
              >
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
    );
}

export default Form;