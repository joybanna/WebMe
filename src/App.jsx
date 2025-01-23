import './App.css'
import NaveBar from './components/NaveBar'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Portfolio from './Portfolio'
import Contact from './Contact'
import PageProject from './PageProject'
import Foot from './components/Foot'

function App() {
  return (
    <div className='App'>
      <NaveBar/>
      </div>
  )
}

export default App