
import { StrictMode } from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Portfolio from './Portfolio'
import Contact from './Contact'

const root = document.getElementById('root')
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BrowserRouter>
    <Routes > 
    <Route path='/WebMe' element={<Profile />} />
    <Route path='/WebMe/profile' element={<Profile />} />
    <Route path='/WebMe/portfolio' element={<Portfolio />} />
    <Route path='/WebMe/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>
)

