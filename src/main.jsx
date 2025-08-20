import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import EffectsWrapper from './app/hooks/useAppEffects';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EffectsWrapper />
  </StrictMode>
);
