import React from 'react';
import "./Card.css";

export default function Card(props) {
    return (
        <div className="Card">
            <div className="img">
                <img src={props.url} alt="" />
            </div>
            <div className="about">
                <h3>{props.title}</h3>
                <p className="eduction">{props.eduction}</p>
                <p>{props.about}</p>
                <p>
                    <hr />
                    <span>
                        <i className="fas fa-envelope"></i>
                    </span>
                    {props.mail}
                </p>
                <div className="socialContent">
                    <a href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
