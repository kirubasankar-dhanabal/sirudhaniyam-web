import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ContentDetailComponent from './components/Content-Detail/ContentDetailComponent.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/"><App /></Route>
      <Route path="/dashboard"><App /></Route>
      {/* <Route path="/content-detail"><ContentDetailComponent /></Route> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
