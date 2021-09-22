import React, { useState, useEffect,useContext } from 'react'
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../App";




export default function Navbar() {
    const { state, dispatch} = useContext(UserContext)
    const [Search, setSearch] = useState("");
    const Searchdata = () => dispatch({type: "SEARCH", payload:Search});
    const [Hide, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);
    const ShowSearchCss = {
        opacity: "1",
        pointerEvents: "auto"
    };
    const stickyNav = {
        top: "0",
        position: "fixed",
        background: "#14181f",
    };
    const Navresp = {
        top: "70px",
        "--main-color": "#14181f",
        "--primary-color": "white",
        background: "#14181f"
    };
    const HandleEvent = () => setShow(!Hide);

    const FacultyDropDown = [
        { key: 1, menu: "Global Teaching Staff", to: "/faculty/teachers" },
        { key: 2, menu: "Gblobal Managing Staff", to: "/faculty/managing" },
        { key: 3, menu: "Gblobal Techinal Staff", to: "/faculty/techinal" },
    ];
    // const resultMore = [
    //     { key: 1, menu: "Fee Details", to: "" },
    //     { key: 2, menu: "Fee Off Criteria", to: "" },
    // ];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300)
                setScroll(true);
            else
                setScroll(false);
        });
    });

    return (
        <div className="wrapper" style={scroll ? stickyNav : null}>
            <nav>
                <input type="checkbox" id="show-search" onClick={HandleEvent}></input>
                <input type="checkbox" id="show-menu" ></input>
                <label htmlFor="show-menu" className="menu-icon" style={scroll ? { color: "white" } : null}><i className="fas fa-bars"></i></label>
                <div className="content">
                    <div className="logo"><Link to="" id="Link" >School System</Link></div>
                    <ul className="links" style={scroll ? Navresp : null}>
                        <li><Link to="/" id="Link" >Home</Link></li>
                        <li><Link to="/about" id="Link" >Admissions</Link></li>
                        <li><Link to="/facality" id="Link" >Facalities</Link></li>
                        <li>
                            <Link to="" id="Link" className="desktop-link">Faculty</Link>
                            <input type="checkbox" id="show-features"></input>
                            <label htmlFor="show-features">Faculty</label>
                            <ul>
                                {FacultyDropDown.map(DropDown => <li key={DropDown.key}><Link to={DropDown.to} id="Link" >{DropDown.menu}</Link></li>
                                )}
                            </ul>
                        </li>
                        <li>
                            <Link to="" id="Link" className="desktop-link">Result</Link>
                            <input type="checkbox" id="show-services"></input>
                            <label htmlFor="show-services">Result</label>
                            <ul>
                                <li><Link to="/result/part1_math">11th Non-Medical Group</Link></li>
                                <li><Link to="/result/part1_biology">11th Medical Group</Link></li>
                                <li><Link to="/result/part2_math">12th Non-Medical Group</Link></li>
                                <li><Link to="/result/part2_biology">12th Medical Group</Link></li>
                                <li><Link to="/result/part1_ics">ICS part 1</Link></li>
                                <li><Link to="/result/part2_ics">ICS part 2</Link></li>
                                {/* <li>
                                    <Link to="" id="Link" className="desktop-link">Fee Strucrure</Link>
                                    <input type="checkbox" id="show-items"></input>
                                    <label htmlFor="show-items">Fee Strucrure</label>
                                    <ul>
                                        {resultMore.map(DropDown => <li key={DropDown.key}><Link to="" id="Link" >{DropDown.menu}</Link></li>
                                        )}
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                        <li><Link to="/contact" id="Link" >Contact us</Link></li>
                    </ul>
                </div>
                <label htmlFor="show-search" className="search-icon"><i className="fas fa-search"></i></label>
                <form action="#" className="search-box" id="search-box" style={Hide ? ShowSearchCss : null}>
                    <input value={Search} onChange={(e) => setSearch(e.target.value)}  style={scroll ? { "--placeholder-color": "white",color: "white", background:"#14181f" } : null} type="text" placeholder="Type Something to Search..." required></input>
                    <button style={scroll ? { color: "white", background: "#14181f" } : null}  type="submit" className="go-icon" onClick={Searchdata} ><i className="fas fa-long-arrow-alt-right"></i></button>
                </form>
            </nav>
        </div>
    );
}
