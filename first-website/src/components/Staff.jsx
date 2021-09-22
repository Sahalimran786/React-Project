import React, {useContext } from 'react';
import { useParams } from "react-router-dom";
import "./Staff.css";
import Card from "./Card";
import { teacherCard } from "./AllDynamicData";
import { managingstaffCard } from "./AllDynamicData";
import { TechnicalCard } from "./AllDynamicData";
import { UserContext } from "../App"

export default function Staff() {
  const { state, dispatch} = useContext(UserContext);
  const {staff} =useParams();
const createCard = (data) => {
return (
  <Card
    id={data.key}
    url={data.imgLocation}
    title={data.title}
    eduction={data.eduction}
    about={data.about}
    mail={data.mail}
  />
);
};

const ReturnSearch = (data) =>{
  const Matched = data.filter((value) =>{
    return value.title.toLowerCase().includes(state.toLowerCase());
  });
  return Matched;
};

const DoneCard = () => {
  if (staff === "teachers") {
    if(!state)
    {
      return teacherCard.map(createCard);
    }
    else{
      const Backed = ReturnSearch(teacherCard);
      return Backed.map(createCard);
    }
  } else if (staff === "managing") {
    if(!state)
    {
      return managingstaffCard.map(createCard);
    }
    else{
      const Backed = ReturnSearch(managingstaffCard);
      return Backed.map(createCard);
    }
  } else if (staff === "techinal") {
    if(!state)
    {
      return TechnicalCard.map(createCard);
    }
    else{
      const Backed = ReturnSearch(TechnicalCard);
      return Backed.map(createCard);
    }
  }
  else{
    return teacherCard.map(createCard);
  }
}


  return (
    <div className="staffPanel">
      <title>School System | Faculty</title>
      <div className="staffContainer">
        <h2>{staff} Staff</h2>
        <div className="cards">{DoneCard()}</div>
      </div>
    </div>
  );
}
