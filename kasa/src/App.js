import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Fiche_Logement from './routes/Fiche_Logement';
import Page_404 from './routes/Page_404';
import A_Propos from './routes/A_Propos';
import Navbar from './components/Navbar';
import FooterElement from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appartements' element={<Fiche_Logement />} />
        <Route path='*' element={<Page_404 />} />
        <Route path='/a-propos' element={<A_Propos />} />
      </Routes>
      <FooterElement />
    </div>
  );
}

export default App;
