import { Outlet } from "react-router-dom"

import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";


const Layout = () => {

    return (<>
        <Navbar />
        <div className="App">
            <Outlet />
        </div>
        <Footer />
    </>)
}

export default Layout;