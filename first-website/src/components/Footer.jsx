import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer" >
            <div className="footerContainer">
                <div className="upperSection">
                    <div className="upper-width ContactSection">
                        <div className="heading">
                            <h3>Contacts</h3>
                        </div>
                        <span><i className="fas fa-phone"></i>0606840106</span>
                        <span><i className="fas fa-mobile-alt"></i>+923116042176</span>
                        <span><i className="fas fa-envelope"></i>Academy@gmail.com</span>
                    </div>
                    <div className="upper-width address">
                        <div className="heading">
                            <h3>Address</h3>
                        </div>
                        <span><i className="fas fa-map-marker-alt"></i>Global Science Academy, Karor Road Fatehpur, Nearbay Yasin Patroleum</span>
                    </div>
                    <div className="upper-width about-academy">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempore non fugit est. Aperiam, unde.</p>
                    </div>
                    <div className="upper-width socialMedia">
                        <div className="heading">
                            <h3>Follow Us</h3>
                        </div>
                       <div className="icons">
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
                    {/* <div className="upper-width events">
                        <div className="heading">
                            <h3>Events</h3>
                        </div>
                        <ul>
                            <li><a href="">Weekly Events</a></li>
                            <li><a href="">Monthlty Events</a></li>
                            <li><a href="">Final Events</a></li>
                        </ul>
                    </div> */}
                    <div className="upper-width Timing">
                        <div className="heading">
                            <h3>Working Hours</h3>
                            <p>All Global Services Available only Between <span>1-PM to 6-PM</span></p>
                        </div>
                    </div>
                </div>
                <div className="lowerSection">
                    <hr />
                    <div className="copyright">
                        <p>Global Science Academy <span><i className="far fa-copyright"></i></span> 2021-22 All Rights Reserved</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
