import './App.css';
import './index.css';
import Nav from './components/navbar'
import Home from './components/home'
import Link from './components/link'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <Nav/>
    <Routes>
      <Route path='/home'  Component={Home}/>
      <Route path='/link' Component={Link}/>
    </Routes>
    </Router>
  )
}

export default App
