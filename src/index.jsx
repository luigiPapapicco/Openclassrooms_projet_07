import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import './styles/_global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Logement/:id" element={<Logement />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
