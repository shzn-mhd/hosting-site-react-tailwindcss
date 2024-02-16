import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROW WITH DONEXT HOSTINGS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py6">Grow With Data</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
                        Fast, Felxible, Reasonable  for work
                    </p>
                    <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
                    strings={['B2B' ,'B2C', 'C2C']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your growth to increase revenue for B2B, B2C, & C2C platforms</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
        </div>
    )
}

export default Hero