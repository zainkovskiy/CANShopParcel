import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './style.css';
import { routes } from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      { routes.map((route, idx) => <Route key={idx} {...route}/>) }
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)