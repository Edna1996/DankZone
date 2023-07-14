import React from "react";


export default function Main() {
    return (
       <main>
        
            <form className="form justify-items-center">
                <input type="text" placeholder="Top text..." className="my-input"/>
                <input type="text" placeholder="Bottom text..." className="my-input "/><br />
                <button className="text-white font-semibold bg-gradient-to-r from-midnight to-rift hover:from-rift hover:to-midnight p-6 rounded-md w-96">get a new meme image</button>
            </form>

        
       </main>
    )
}