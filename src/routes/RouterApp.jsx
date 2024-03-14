import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "../layout/NavBar"
import Home from "../pages/Home"

function RouterApp() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp