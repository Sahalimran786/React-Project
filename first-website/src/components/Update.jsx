import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const history = useHistory();
    const [email, setemail] = useState();
    const [Password, setPassword] = useState();
    const [NewPassword, setNewPassword] = useState();

    const Update = (e) => {
        e.preventDefault();
        fetch("/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, Password, NewPassword
            })
        }).then( (res) => {
            if(res.status === 204){
                window.alert("Plaese Fill the All Fields");
            }
            else if (res.status === 403) {
                window.alert("Incorrect Email");
            }
            else if (res.status === 401) {
                window.alert("Incorrect Recent Password");
            }
            else if (res.status === 200) {
                history.push("/login");
                window.alert("Congrats Password Updated");
            }
            else if (res.status === 501) {
                history.push("/login");
                window.alert("Password not updated try again later");
            }
        }).catch( (err) => {
            console.log(err);
        });
    };

    return (
        <div className="login-section" >
            <title>Global Science Academy | Update Login</title>
            <div className="login-container">
                <form method="POST">
                    <div className="inputs">
                        <div className="email field">
                            <input name="email" type="text" placeholder="Your Email" required autoComplete="off" value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="password field">
                            <input name="password" type="text" placeholder="Recent Password" required autoComplete="off" value={Password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="password field">
                            <input name="password" type="text" placeholder="New Password" required autoComplete="off" value={NewPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </div>
                    </div>
                    <button onClick={Update} type="submit" className="button-small" >Update</button>
                </form>
            </div>
        </div>
    )
}
