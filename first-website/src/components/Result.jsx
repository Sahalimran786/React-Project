import React,{useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Result.css";

export default function Result() {
    const history = useHistory();
    const { classname}=useParams();
    const checkroute = classname;
    const [Result, setResult] = useState([]);
    
    const callResult = async () => {
        if (checkroute === "part1_math" || checkroute === "part1_biology" || checkroute === "part1_ics")
        {
              const res = await fetch("/partone", {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                  },
                  credentials: "include",
              });
            try {
              const data = await res.json()
              console.log(data);
              setResult(data);
              if (res.status === 404) {
                  window.alert("Oops! No result Found");
              }

            } catch (err) {
                console.log(err)
                if (res.status === 401) {
                    history.push("/login");
                }
            }
        }
        else if (checkroute === "part2_math" || checkroute === "part2_biology" || checkroute === "part2_ics") {
            const res = await fetch("/parttwo", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
            });
            try {
                const data = await res.json()
                console.log(data);
                setResult(data);
                if (res.status === 404) {
                    window.alert("Oops! No result Found");
                }

            } catch (err) {
                console.log(err)
                if (res.status === 401) {
                    history.push("/login");
                }
            }
        }
    };
    
    useEffect(() => {
        callResult();
    }, [])

    // quries for HTML

    const setsubject = (check) => {
        if (check === "part1_math" || check === "part2_math")
        {
            const arr = ["Mathematics", "Chemistry"]
            return arr;
        }
        else if (check === "part1_biology" || check === "part2_biology") {
            const arr = ["Biology", "Chemistry"]
            return arr;
        }
        else {
            const arr = ["Mathematics", "Computer"]
            return arr;
        }
    };
    const DynamicSubjects = setsubject(classname);

    const cheOrComputer = (check, Detail) => {
        if (check === "part1_ics" || check === "part2_ics")
        {
            return <td>
                <td>{Detail.computer.First}</td>
                <td>{Detail.computer.Second}</td>
                <td>{Detail.computer.Third}</td>
                <td>{Detail.computer.Fourth}</td>
            </td>
        }
        else{
            return <td>
                <td>{Detail.chemistry.First}</td>
                <td>{Detail.chemistry.Second}</td>
                <td>{Detail.chemistry.Third}</td>
                <td>{Detail.chemistry.Fourth}</td>
            </td>
        }
    };
    const mathOrbio = (check, Detail) => {
        if (check === "part1_biology" || check === "part2_biology") {
            return <td>
                <td>{Detail.biology.First}</td>
                <td>{Detail.biology.Second}</td>
                <td>{Detail.biology.Third}</td>
                <td>{Detail.biology.Fourth}</td>
            </td>
        }
        else {
            return <td>
                <td>{Detail.mathematics.First}</td>
                <td>{Detail.mathematics.Second}</td>
                <td>{Detail.mathematics.Third}</td>
                <td>{Detail.mathematics.Fourth}</td>
            </td>
        }
    };
    const islORpak = (check, Detail) => {
        if (check === "part1_math" || check === "part1_biology" || check === "part1_ics") {
            return <td>
                <td>{Detail.islamiyat.First}</td>
                <td>{Detail.islamiyat.Second}</td>
                <td>{Detail.islamiyat.Third}</td>
                <td>{Detail.islamiyat.Fourth}</td>
            </td>
        }
        else {
            return <td>
                <td>{Detail.pakstudy.First}</td>
                <td>{Detail.pakstudy.Second}</td>
                <td>{Detail.pakstudy.Third}</td>
                <td>{Detail.pakstudy.Fourth}</td>
            </td>
        }
    };

    return (
        <div className="Result-section" >
            <title>Results</title>
                <form action="GET">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Roll No</th>
                                    <th>Month</th>
                                    <th>Physics</th>
                                    <th>{DynamicSubjects[1]}</th>
                                    <th>{DynamicSubjects[0]}</th>
                                    <th>English</th>
                                    <th>Urdu</th>
                                    <th>Islamiyat</th>
                                    <th>Total</th>
                                    <th>Percent</th>
                                </tr>
                            </thead>
                    {
                        Result.map((Detail, index) => {
                            return  <tbody>
                                        <tr>
                                            <td>{Detail.name}</td>
                                            <td>{Detail.rollno}</td>
                                            <td>{Detail.month}</td>
                                            <td>
                                                <td>{Detail.physics.First}</td>
                                                <td>{Detail.physics.Second}</td>
                                                <td>{Detail.physics.Third}</td>
                                                <td>{Detail.physics.Fourth}</td>
                                            </td>
                                                {cheOrComputer(classname,Detail)}
                                                {mathOrbio(classname, Detail)}
                                            <td>
                                                <td>{Detail.english.First}</td>
                                                <td>{Detail.english.Second}</td>
                                                <td>{Detail.english.Third}</td>
                                                <td>{Detail.english.Fourth}</td>
                                                </td>
                                            <td>
                                                <td>{Detail.urdu.First}</td>
                                                <td>{Detail.urdu.Second}</td>
                                                <td>{Detail.urdu.Third}</td>
                                                <td>{Detail.urdu.Fourth}</td>
                                            </td>
                                            {islORpak(classname, Detail)}
                                            <td>{Detail.total}</td>
                                            <td>{Detail.percentage}</td>
                                        </tr>
                                    </tbody>
                        })
                    }
                        </table>
                </form>
        </div>
    )
}
