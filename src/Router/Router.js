import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Home/Home'
import Signin from '../views/SIgnin/Signin'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signin />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router