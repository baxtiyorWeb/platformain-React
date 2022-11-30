import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'

export default function header() {
    return (
        <>
            {
                <BrowserRouter>
                    <header>
                        <div className="container">
                            <ul>
                                <li>
                                    <Link to='Home'>Home</Link>
                                </li>
                                <li>
                                    <Link to='About'>About</Link>
                                </li>
                                <li>
                                    <Link to='Login'>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </header>
                    <Routes>
                        <Route path='Home' element={<Home />} />
                        <Route path='About' element={<About />} />
                        <Route path='Login' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            }
        </>
    )
}
