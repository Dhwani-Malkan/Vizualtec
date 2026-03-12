import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ScrollToTop from "./ScrollToTop";
import './index.css';
import './App.css';
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Architecture from './components/Architecture.tsx';
import Interior from './components/Interior.tsx';
import VR from './components/Vr.tsx';
import Animation from './components/Animation.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import AboutUs from './components/AboutUs.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/vr" element={<VR />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)

