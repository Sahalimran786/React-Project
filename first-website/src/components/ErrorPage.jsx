import React from 'react';
import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
    return (
        <div className="errorpage">
            <title>Error</title>
            <div className="errorContent">
                <h1>Oops! 404 Page not found</h1>
                <p>We are sorry this page may not exist</p>
                <Link className="button-small" to="/" >Go Back To Homepage</Link>
            </div>
        </div>
    )
}
