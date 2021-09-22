import React, { useEffect, useContext} from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../App"

export default function logout() {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory();
    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            credentials: "include",
        }).then((res) => {
            if(res.status === 200)
            {
              dispatch({ type: "STUDENT", payload: false });
              history.push("/login", { replace: true });
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [])
    return (
        <div>
        </div>
    )
}
