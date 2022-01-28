import '../styles/App.scss';
import { useEffect, useState } from 'react';
import localStorage from '../services/localstorage';
import Header from './Header';
import Footer from './Footer';
import Preview from './preview/Preview';
import Form from './form/Form';
import callToApi from '../services/api';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';

function App() {
  const [data, setData] = useState(
    localStorage.get('data', {
      palette: '1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    })
  );
  const [designOpen, setDesignOpen] = useState(true);
  const [fillOpen, setFillOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [readyToShare, setReadyToShare] = useState(false);

  useEffect(() => {
    if (readyToShare) {
      callToApi(data).then((response) => {
        console.log(response);
      });
    }
  }, [readyToShare]);

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
    localStorage.set('data', data);
  }, [data]);

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

  const isDisabled = () => {
    if (
      data.name.length === 0 ||
      data.job.length === 0 ||
      data.email.length === 0 ||
      data.linkedin.length === 0 ||
      data.github.length === 0
    ) {
      return true;
    }
  };

  const handleClickBtn = () => {
    setReadyToShare(true);
  };

  const handleClickCollap = (labelName) => {
    if (labelName === 'Diseña') {
      setDesignOpen(!designOpen);
      setFillOpen(false);
      setShareOpen(false);
    } else if (labelName === 'Rellena') {
      setDesignOpen(false);
      setFillOpen(!fillOpen);
      setShareOpen(false);
    } else if (labelName === 'Comparte') {
      setDesignOpen(false);
      setFillOpen(false);
      setShareOpen(!shareOpen);
    }
  };

  return (
    <div>
      <Landing />
      <Header />
      <main className="create_card_main">
        <Preview data={data} handleClickReset={handleClickReset} />
        <Form
          data={data}
          handleInput={handleInput}
          handleClickBtn={handleClickBtn}
          updateInputPhoto={updateInputPhoto}
          handleClickCollap={handleClickCollap}
          designOpen={designOpen}
          fillOpen={fillOpen}
          shareOpen={shareOpen}
          isDisabled={isDisabled}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
