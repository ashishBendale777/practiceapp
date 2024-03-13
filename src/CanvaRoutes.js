import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import MyOffCanva from './componants/MyOffCanva'


const CanvaRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <MyOffCanva />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default CanvaRoutes