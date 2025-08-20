import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EffectsWrapper from './hooks/useAppEffects';
import './../index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EffectsWrapper />
  </StrictMode>
);
