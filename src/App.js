import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
