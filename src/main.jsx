import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import MainPage from './components/MainPage'
// import Paper from './components/Paper.jsx'
// import CvMain from './components/CvMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <CvMain />
      <Paper /> */}
      <MainPage />
  </StrictMode>
)
