import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Form from './pages/Form'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/form" element={ <Form /> } />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

