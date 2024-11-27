import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import ContactPage from './pages/ContactPage'
import Policy from './pages/Policy'
import Pagenotfound from './pages/Pagenotfound'

export default function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
    </Routes>
    
    </>
  )
}
