import React from "react";
import laugh from "./images/meme.png"

export default function Navbar(){
    return (
        <nav className="flex justify-between bg-gradient-to-r from-midnight to-rift hover:from-rift hover:to-midnight p-6">
            <div className="flex">
                <img src={laugh} alt="meme" className="w-10 h-10 mt-1  "/>
                <h2 className="text-3xl text-white font-bold ml-2 mt-1">DankZone</h2>
            </div>
            <div className="">
                <span className="text-lg mt-5 text-pink-500 mr-10">React Project</span>
            </div>
        </nav>
        
    )
}