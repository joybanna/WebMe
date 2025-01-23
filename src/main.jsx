
import { StrictMode } from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Portfolio from './Portfolio'
import Contact from './Contact'
import PageProject from './PageProject'
import Foot from './components/Foot'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    <HashRouter>
      <Routes >
        <Route path='/WebMe' element={<Profile />} />
        <Route path='/WebMe/profile' element={<Profile />} />
        <Route path='/WebMe/portfolio' element={<Portfolio />} />
        <Route path='/WebMe/contact' element={<Contact />} />
        <Route path='/WebMe/projects/' >
          <Route path=':project' element={<PageProject />} />
        </Route>
      </Routes>
    </HashRouter>
    {/* <Foot /> */}
  </StrictMode>
)

