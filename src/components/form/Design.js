import Palettes from "./Palettes";

const Design = (props) => {
  return (
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
            checked={props.data.palette === "1"}
          />
          <input
            type="radio"
            value="2"
            id="colours2"
            name="palette"
            className="colourpalette"
            onChange={props.handleInput}
            checked={props.data.palette === "2"}
          />
          <input
            type="radio"
            value="3"
            id="colours3"
            name="palette"
            className="colourpalette"
            onChange={props.handleInput}
            checked={props.data.palette === "3"}
          />
        </form>
        <section className="palettescolours">
          <Palettes paletteClass="1" />
          <Palettes paletteClass="2" />
          <Palettes paletteClass="3" />
          {/* <ul className="colours1">
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
            </ul> */}
        </section>
      </section>
    </section>
  );
};
export default Design;
