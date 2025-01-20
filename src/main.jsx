import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, Routes } from 'react-router-dom'

const root = document.getElementById('root')
createRoot(root).render(
  <StrictMode>
    <App />
    <Routes >
    <Route path='/' element={<App />} />
    <Route path='/about' element={<About />} />
    <Route path='/portfolio' element={<Portfolio />} />
    <Route path='/contact' element={<Contact />} />
    </Routes >
  </StrictMode>
)
