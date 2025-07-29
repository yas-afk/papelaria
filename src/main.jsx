import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Alert from './Components/Alert/alert.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Alert/>
  </StrictMode>,
)
