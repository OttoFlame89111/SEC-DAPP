import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Slider from './Slider';
import DogInfo from './DogInfo';
import reportWebVitals from './reportWebVitals';

const index = ReactDOM.createRoot(document.getElementById('root'));
index.render(
  <StrictMode>
    <App/>
    <Slider/>
    <DogInfo/>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
