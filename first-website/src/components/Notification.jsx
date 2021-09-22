import React from "react";
import "./Notification.css";
import { Link } from "react-router-dom";

export default function Notification() {
  const NotificationData = [
    {
      key: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipitvero",
      date: "02-19-2021",
    },
    {
      key: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipitvero",
      date: "02-19-2021",
    },
    {
      key: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipitvero",
      date: "02-19-2021",
    },
    {
      key: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipitvero",
      date: "02-19-2021",
    },
    {
      key: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipitvero",
      date: "02-19-2021",
    },
    {
      key: 6,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipitvero",
      date: "02-19-2021",
    },
    {
      key: 7,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Suscipitvero",
      date: "02-19-2021",
    },
  ];

  return (
    <div className="notiPanel">
      <div className="container-noti">
        {NotificationData.map((data,index) => {
            if(index === 0){
                return (
                  <div className="inner" key={data.key} >
                    <div className="singleNoti">
                      <div className="notititle">
                        <span>
                          New <i className="fas fa-arrow-circle-right"></i>
                        </span>
                        <Link to="">{data.title}</Link>
                      </div>
                      <div className="NotiDate">
                        <p className="button-large">
                          {data.date}
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
            }
            else{
                return (
                  <div className="inner" key={data.key}>
                    <div className="singleNoti">
                      <div className="notititle">
                        <Link to="">{data.title}</Link>
                      </div>
                      <div className="NotiDate">
                        <p className="button-large">
                          {data.date}
                        </p>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
            }
        })}
      </div>
    </div>
  );
}
