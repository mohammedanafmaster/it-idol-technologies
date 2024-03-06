import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  let toggleMode = () => {
    if (mode == 'light') {
      setMode('dark')
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark Mode has been enabled.", "warning");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode has been enabled.", "danger")
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us" />
      <Alert alert={alert} />
      <div className="my-5">
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} alert={alert} mode={mode} text="Enter your message here" />
      </div>
      <hr />
      <About />
    </>
  );
}

export default App;
