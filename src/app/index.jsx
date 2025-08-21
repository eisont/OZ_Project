import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './layout';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Layout />
    </StrictMode>
  </BrowserRouter>
);
