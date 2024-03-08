import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home';
import Contactanos from './pages/contactanos';
import Suscribirse from './pages/suscribirse';

const App=()=> {

  return (
    <Router >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contactanos" element={<Contactanos />} />
        <Route exact path="/suscribirse/" element={<Suscribirse />} />
      </Routes>
    </Router>
  )
}

export default App


//<Pasarela></Pasarela>