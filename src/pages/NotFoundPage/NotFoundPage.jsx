import React from "react";
import {Link} from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <h1>Unknown beverage</h1>
            <h3>Highly advised to not drink this...</h3>

            <button>
                <Link to="/">Go back to home</Link>
            </button>
        </>
    );
}

export default NotFoundPage;
