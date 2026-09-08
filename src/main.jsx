import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavigationBar from './components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavigationBar />
  </StrictMode>,
)
