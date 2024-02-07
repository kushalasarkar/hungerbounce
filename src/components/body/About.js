import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { Link } from 'react-router-dom';



const About = () => {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetchGithubData();
    }, [])

    const fetchGithubData = async () => {
        const data = await fetch(`https://api.github.com/users/kushalasarkar`);
        const json = await data.json();
        console.log(json);
        setUserData(json);
    }


    return (

        <div className="AboutCard flex" >
            <div className="bg-blue-950 w-70 m-12 p-10 group relative">
                <div className="group-hover:blur-sm">
                    <p className="text-yellow-400 pb-1 ">Hello, I am</p>
                    <h1 className="text-white text-6xl">{userData.name}</h1>
                    <p className="text-white py-3">{userData.bio}</p>
                    <h1 className="text-white opacity-60 ">Frontend developer with 3 years of experience, skilled in developing scalable web applications using Reactjs and associated technologies.
                        Strong expertise in UI development, API integration, and a keen focus on code quality, performance, and user experience. </h1>
                </div>
                <a className="border-2 p-2 rounded-xl bg-slate-400 hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl  text-white group-hover:block" href="https://github.com/kushalasarkar">Github Profile</a>
            </div>
            <div className="hidden md:block">
                <img className="h-72 w-70 m-12 shadow-lg rounded-3xl object-cover " src={userData.avatar_url} />
            </div>

        </div>
    )
}

export default About;