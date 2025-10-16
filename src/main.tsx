import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { measurePerformance, preloadCriticalResources, optimizeImageLoading } from './utils/performance';

// Initialize performance monitoring
measurePerformance();
preloadCriticalResources();

// Optimize image loading after DOM is ready
document.addEventListener('DOMContentLoaded', optimizeImageLoading);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
