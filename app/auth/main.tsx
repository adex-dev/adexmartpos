import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../assets/ui/style.css'

import App from './App.tsx'

createRoot(document.getElementById('akmadnudin')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
