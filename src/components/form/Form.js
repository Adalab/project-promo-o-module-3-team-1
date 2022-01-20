import InputLabel from "./InputLabel";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

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
        <InputLabel
          id="designContent"
          icon="far fa-object-ungroup"
          title="Diseña"
        />
        <Design data={props.data} handleInput={props.handleInput}/>
      </section>
      <section className="section__form container containerdesign">
        <InputLabel id="formContent" icon="far fa-keyboard" title="Rellena" />
        <Fill data={props.data} handleInput={props.handleInput}/>
      </section>
      <section className="container containerdesign">
        <InputLabel
          id="shareContent"
          icon="fas fa-share-alt"
          title="Comparte"
        />
        <Share data={props.data} isDisabled={isDisabled} />
      </section>
    </section>
  );
}

export default Form;
