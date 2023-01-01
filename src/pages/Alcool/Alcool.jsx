import React from "react";
import DescriptionAlcool from "../../components/Alcool/DescriptionAlcool";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestForOneAlcool from "../../components/Alcool/RequestForOneAlcool.jsx";
import {useParams} from "react-router-dom";

function Alcool (){

    const{nameAlcool} = useParams();
    return(
        <>
            <Header />
            <RequestForOneAlcool nameAlcool={nameAlcool}/>
            <DescriptionAlcool />
            <Footer />
        </>);
}

export default Alcool;