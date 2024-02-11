import React from "react";
import userOne from '../assets/userOne.png';
import userTwo from '../assets/userTwo.png';
import userThree from '../assets/userThree.png';
const Cards = () =>{
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={userOne} alt="userone" />
                    <h2 className="text-2xl font-bold text-center py-8">Single Hosting</h2>
                    <p className="text-center text-4xl font-bold">$299</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                        <p className="py-2 border-b mx-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8">Send Up to 2GB</p>

                        <button className=" bg-[#00df9a] w-[200px] rounded-md font font-medium my-6 mx-auto md:mx-0 py-3 text-black"> Start Tial</button>
                    </div>
                    
                </div>
                <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={userTwo} alt="userone" />
                    <h2 className="text-2xl font-bold text-center py-8">Two Hostings</h2>
                    <p className="text-center text-4xl font-bold">$399</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">800 GB Storage</p>
                        <p className="py-2 border-b mx-8">2 Granted User</p>
                        <p className="py-2 border-b mx-8">Send Up to 4GB</p>
                        <button className="bg-black w-[200px] rounded-md font font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]"> Start Tial</button>
                    </div>
                    
                </div>
                <div className="w-full shadow-xl  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={userThree} alt="userone" />
                    <h2 className="text-2xl font-bold text-center py-8">Multiple User</h2>
                    <p className="text-center text-4xl font-bold">$499</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">1000 GB Storage</p>
                        <p className="py-2 border-b mx-8">5 Granted User</p>
                        <p className="py-2 border-b mx-8">Send Up to 8GB</p>
                        <button className="bg-[#00df9a] w-[200px] rounded-md font font-medium my-6 mx-auto md:mx-0 py-3 text-black"> Start Tial</button>
                    </div>
                   
                </div>
            </div>
        </div>

    )
}

export default Cards