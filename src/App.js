import React from 'react';
import './index.css';

import Home from './routes/Home';
import Experience from './routes/Experience';
import Organizations from './routes/Organizations';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Organizations" element={<Organizations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
