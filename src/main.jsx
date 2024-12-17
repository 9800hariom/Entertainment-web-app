import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tvserial from './components/Tvserial.jsx';
import Movie from './components/Movie.jsx';

import DetialsPage from './components/DetialsPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tvserial" element={<Tvserial />} />
        <Route path="/movie" element={<Movie />} />
        
        <Route path="/movie/:index" element={<DetialsPage/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>
);
