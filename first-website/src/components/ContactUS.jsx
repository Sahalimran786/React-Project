import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import "./ContactUS.css";

export default function ContactUS() {

    const history = useHistory();

    const [user, setUser] = useState({
        Name: "", Email: "", Subject: "", Description:""
    });
    let name,value;
    const handleState = (e) => {
        name= e.target.name;
        value= e.target.value;
        setUser({...user, [name]: value});
    }

    const postData = async (e) => {
        e.preventDefault();
        const { Name, Email, Subject, Description } = user;
        const res = await fetch("/message",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Name, Email, Subject, Description
            })
        });

        try {
            if (res.status === 400) {
                window.alert("Plaese Fill the All Fields");
            }
            else if (res.status === 500) {
                window.alert("Oops! Server error");
            }
            else if (res.status === 501) {
                window.alert("Oops! Server busy Message not is sended");
            }
            else if (!res) {
                window.alert("Oops! Server Not Responding");
            }
            else if (res.status === 200){
                window.alert("Congrats! Message Sended");
            }
            history.push("/contact")
            setUser({
                Name: "", Email: "", Subject: "", Description: ""
            });
        } catch (error) {
            
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact Us</h2>
                <div className="contact-content">
                    <div className="column left">
                        {/* <div className="text">Get in Touch</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas accusamus mollitia omnis recusandae, ea corrupti praesentium cumque maxime sint quam quo possimus voluptatem corporis accusantium sapiente porro magni animi soluta!</p> */}
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Islamabad Pakistan</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">Sahalimran786@gmail.com</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-phone"></i>
                                <div className="info">
                                    <div className="head">Telephone</div>
                                    <div className="sub-title">0606840106</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <h1>Leave a Message</h1>
                        <form method="POST">
                            <div className="fields">
                                <div className="field name">
                                    <input autoComplete="off" name="Name" value={user.Name} onChange={handleState} type="text" placeholder="Name" required/>
                                </div>
                                <div className="field email">
                                    <input autoComplete="off" name="Email" value={user.Email} onChange={handleState} type="email" placeholder="Email" required/>
                                </div>
                            </div>
                            <div className="field subject">
                                <input autoComplete="off" name="Subject" value={user.Subject} onChange={handleState} type="text" placeholder="Subject" required/>
                            </div>
                            <div className="field textarea">
                                <textarea name="Description" value={user.Description} onChange={handleState} placeholder="Describe your Subject.." required></textarea>
                            </div>
                            <div >
                                <button name="submit" value="sended" onClick={postData} className="button-small" type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
