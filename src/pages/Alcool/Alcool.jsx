import React from "react";
import RequestForOneAlcool from "../../components/Alcool/RequestForOneAlcool.jsx";
import {useParams} from "react-router-dom";

function Alcool (){

    const{nameAlcool} = useParams();
    return(
        <>
            <div className="bodyPage">
                <RequestForOneAlcool nameAlcool={nameAlcool}/>
            </div>
        </>);
}

export default Alcool;