import React from 'react'
import "./Home.css";
import HomeSlider from "../components/HomeSlider";
import Notification from "../components/Notification";
import Facality from "../components/Facality";

export default function Home() {
    return (
        <div>
            <title>Global Science Academy</title>
            <HomeSlider />
            <Notification />
            <Facality />
        </div>
    )
}
