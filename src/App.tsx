import axios from 'axios';
import React from 'react';
import './App.css';
import { YandexAuth } from './components/yandexAuth';

const TOKEN = '';

function App() {
  const getDevices = () => {
    axios
      .get('https://api.iot.yandex.net/v1.0/user/info', {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      })
      .then((response) => console.log('qq response', response));
  };

  return (
    <div className="App">
      <YandexAuth />

      <button onClick={getDevices}>get devices</button>
    </div>
  );
}

export default App;
