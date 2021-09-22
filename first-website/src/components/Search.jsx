import React, {useContext } from 'react';
import { UserContext } from "../App"

export default function Search() {
    const { state, dispatch} = useContext(UserContext);
    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}
