import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { UserContext } from "../App"

export default function Login() {
    const { state, dispatch} = useContext(UserContext);
    const history = useHistory();
    const [email, setemail] = useState();
    const [Password, setPassword] = useState()

    const postData = async (e) => {
        e.preventDefault();
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,Password
            })
        });

        try {
            if (res.status === 400) {
                window.alert("Plaese Fill the All Fields");
            }
            else if (res.status === 401)
            {
                window.alert("Incorrect Password");
            }
            else if (res.status === 200) {
                dispatch({type: "STUDENT", payload:true});
                history.push("/");
            }
            else if (res.status === 404) {
                window.alert("User not found");
            }
        } catch (error) {

        }
    };

    return (
        <div className="login-section" >
            <title>Global Science Academy | Login</title>
            <div className="login-container">
                <form method="POST">
                    <div className="inputs">
                        <div className="email field">
                            <input name="email" type="text" placeholder="Your Email" required autoComplete="off" value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="password field">
                            <input name="password" type="password" placeholder="Your Password" required autoComplete="off" value={Password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={postData} type="submit" className="button-small" >Login In</button>
                </form>
                <div className="forget">
                    <Link to="/update">Update password</Link>
                </div>
            </div>
        </div>
    )
}
