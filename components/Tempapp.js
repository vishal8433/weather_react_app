import React,{useEffect, useState} from "react";
import "./css/style.css";

const Tempapp=() => {
    const [city,setCity] =useState(null);
    const [search,setSearch]= useState("Firozabad");
    useEffect(()=>{
        const fetchApi= async()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1333f1c77a36a062b3e07eaa840832cb`
        const response =await fetch(url);
        const resJson= await response.json();
        setCity(resJson.main);
        };
        fetchApi();
    },[search])
    return (
        <>
        <h1 className="mainHeading">weather react app</h1>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className="inputField" onChange={( event )=> {setSearch(event.target.value)}}/>
                </div>
            {!city ? (
                    <p className="errorMsg">No Data Found</p>
                ):(
                    <div>
                    <div className="info">
            <h2 className="location">
            {search}
            </h2>
            <h1 className="temp">
                {city.temp} °c
            </h1>
            <h3 className="tempmin_max">Min : {city.temp_min} °c | Max : {city.temp_max} °c</h3>
            </div>
           </div>
                )
            }
            </div>
            <pre>Created by-<u>VISHAL JAIN</u></pre>
        </>
    )
}

export default Tempapp; 