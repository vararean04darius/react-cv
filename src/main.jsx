import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import CVApp from './components/CVApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CVApp />
  </StrictMode>
)
