import React from "react";
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page404">
            <div className="page404-inner">
                <h1>404 Page</h1>
                <p>This URL is not present</p>
                <Link to="/"> Go to Home Page</Link>
            </div>
        </div>
    )
}
export default Page404;
