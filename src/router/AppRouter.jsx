import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import Paths from '../pages/Paths'
import People from '../pages/People'
import PersonDetail from '../pages/PersonDetail'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Footer from '../components/Footer'
import FullStack from '../pages/FullStack'
import AwsDevops from '../pages/AwsDevops'
import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'

const AppRouter = () => {
    const [user, setUser] = useState(false)
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paths" element={<Paths />} >
                    <Route index element={<FullStack />} />
                    <Route path='aws' element={<AwsDevops />} />
                </Route>
                <Route element={<PrivateRoute user={user}/>}>
                    <Route path="/people" element={<People />} />
                    <Route path="/people/:id" element={<PersonDetail />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login setUser={setUser}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppRouter