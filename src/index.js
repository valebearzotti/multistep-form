import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './pages/Form'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <Form /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

