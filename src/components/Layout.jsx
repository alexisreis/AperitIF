import { Outlet } from "react-router-dom"

import Header from "./Header/header.jsx";
import Footer from "./Footer/footer.jsx";


const Layout = () => {

    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>)
}

export default Layout;