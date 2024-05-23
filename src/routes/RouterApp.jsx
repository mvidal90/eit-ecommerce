import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"

import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Detail from "../pages/Detail"
import Upload from "../pages/Upload"
import Checkout from "../pages/Checkout"
import Success from "../pages/Success"

function RouterApp() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/checkout/success" element={<Success />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp