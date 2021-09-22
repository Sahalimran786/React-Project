import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import "./Head.css";
import { UserContext } from "../App"

export default function Head() {
    const { state, dispatch } = useContext(UserContext)
    const toggleMenu = (state) => {
        if(state)
        {
            return <div className="logn">
                <Link id="logout" to="/logout" >Logout</Link>
            </div>
        }
        else{
           return <div className="logn">
                <Link id="login" to="/login" >Login</Link>
            </div>
        }
    }
    return (
        <div className="navhead" id="Head">
            <div className="container">
                <div className="logoImg">
                    <img src="/Img/logo.png" alt="" />
                    <h2>School System</h2>
                </div>
                <div className="headMenu">
                    <ul>
                        <li><Link id="headLink" to="" >test schedule</Link></li>
                        <li><Link id="headLink" to="" >Jobs</Link></li>
                        <li><Link id="headLink" to="" >Fee</Link></li>
                    </ul>
                </div >
                {toggleMenu(state)}
            </div>
        </div>
    )
}
