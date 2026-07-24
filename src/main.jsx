import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// global redirect for CTA-like buttons to Contact page
import './utils/contactRedirect';

import "./analytics";

import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)