import "../styles/App.scss";
import { useEffect, useState } from "react";
import localStorage from "../services/localstorage";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./preview/Preview";
import Form from "./form/Form";

function App() {
  const [data, setData] = useState(
    localStorage.get("data", {
      palette: "1",
      name: "",
      job: "",
      photo: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    })
  );
  const handleInput = (ev) => {
    const inputChanged = ev.currentTarget.name;
    setData({
      ...data,
      [inputChanged]: ev.currentTarget.value,
    });
  };

  const updateInputPhoto = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  useEffect(() => {
    localStorage.set("data", data);
  }, [data]);

  const handleClickReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      photo: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    });
  };

  const handleClickBtn = () => {
    console.log("hola");
  };

  return (
    <div>
      <Header />
      <main className="create_card_main">
        <Preview data={data} handleClickReset={handleClickReset} />
        <Form
          data={data}
          handleInput={handleInput}
          handleClickBtn={handleClickBtn}
          updateInputPhoto = {updateInputPhoto}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
