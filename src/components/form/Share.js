import ShareBtn from "./ShareBtn"
const Share = (props) => {
  return (
    <div
      className={`containerButton js-sectionShare js_content ${props.shareOpen ? '' : 'collapsed'}`}
      id="shareContent"
    >
      <ShareBtn isDisabled={props.isDisabled} />
      {/*revisar botón. Input*/}
      <p className="catchError js_catchError"></p>
      <div className="createdCard js-createdCard collapsed">
        <h5 className="createdCard__title">La tarjeta ha sido creada:</h5>
        <a className="createdCard__link js_createdCard__link" href="/">
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
  );
};
export default Share;
