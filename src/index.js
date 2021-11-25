import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import DetailScreenComponent from './components/DetailScreen/DetailScreenComponent';
import FoodCategory from './components/FoodCategory/FoodCategory';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/"><App /></Route>
      <Route path="/dashboard"><App /></Route>
      <Route path="/foodCategory"><FoodCategory /></Route>
      <Route path="/detailscreen"><DetailScreenComponent /></Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
