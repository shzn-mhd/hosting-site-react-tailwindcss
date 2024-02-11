import React from "react";
import laptop from '../assets/laptop.png';

const Analytics = () =>{
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2"></div>
                <img src={laptop} alt="Laptop" /> 
                <div>
                    <p>DATA ANALYTICS DASHBOARD</p>
                    <h1>Manage Data Analytics Centrally</h1>
                    
                </div>
        </div>
    )
}

export default Analytics