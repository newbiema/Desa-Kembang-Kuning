import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Pastikan path ini sesuai
import App from './App' // Ekstensi .tsx bisa dihilangkan

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)