import React from 'react';
import "./Facality.css";
import { facalities } from "./AllDynamicData";

export default function Facality() {
    return (
        <div className="facality-Section" >
            <title>Global Science Academy | Facalities</title>
            <div className="facality-container">
                <div className="title">
                    <h2>Facalities & Features</h2>
                </div>
                <div className="facality-content">
                    {
                        facalities.map(item => {
                            return <div className="facality-card" key={item.key}>
                                <div className="img">
                                    <img src={item.imgURL} alt="" />
                                </div>
                                <div className="card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.detail}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
