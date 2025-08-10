import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import DevWorkPage from './pages/DevWorkPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ResumePage from './pages/ResumePage.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/Sharliz-Portfolio">
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="dev-work" element={<DevWorkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ResumePage />} />
        </Route>
      </Routes>
    </BrowserRouter>

);
