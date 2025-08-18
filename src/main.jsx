import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import EffectWrapper from './EffectWrapper';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EffectWrapper />
  </StrictMode>
);
