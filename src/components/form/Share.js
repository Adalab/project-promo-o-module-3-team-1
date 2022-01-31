import ShareBtn from './ShareBtn';
const Share = (props) => {
  const renderShareUrl = () => {
    if (!props.isDisabled() && props.shareUrl !== '') {
      return (
        <div className="createdCard js-createdCard collapsed">
          <h5 className="createdCard__title">La tarjeta ha sido creada:</h5>
          <a
            className="createdCard__link js_createdCard__link"
            href={props.shareUrl}
            target="_blank"
            rel="noreferrer"
          >
            {props.shareUrl}
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
      );
    }
  };

  const renderError = () => {
    if (props.isDisabled()) {
      return (
        <p className="catchError js_catchError">
          Oh! Parece que falta algún campo por rellenar
        </p>
      );
    }
  };

  return (
    <div
      className={`containerButton js-sectionShare js_content ${
        props.shareOpen ? '' : 'collapsed'
      }`}
      id="shareContent"
    >
      <ShareBtn
        isDisabled={props.isDisabled}
        handleClickBtn={props.handleClickBtn}
      />
      {/*revisar botón. Input*/}
      {renderError()}
      {renderShareUrl()}
    </div>
  );
};
export default Share;
