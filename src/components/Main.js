import React from "react";
import memesData from "../memesData"


export default function Main() {
        const [meme, setMeme] = React.useState({
            topText : "",
            bottomText : "",
            renderImage : "https:\/\/i.imgflip.com\/23ls.jpg",
        });

        const [allMemeImages] = React.useState(memesData)

        function getMemeImage() {
            const memeArray = allMemeImages.data.memes
            const randomNumber = Math.floor(Math.random() * memeArray.length )
            const url = memeArray[randomNumber].url
            setMeme(prevState => ({
                ...meme,
                renderImage : url
            }))
        }
        
        function handleChange(event) {
            const {name, value} = event.target 
            setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
        }

    return (
       <main>
        
            <div className="div justify-items-center m-auto">
                <input 
                type="text" 
                placeholder="Top text..." 
                className="my-input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Bottom text..." 
                className="my-input "
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                /><br />
                <button className="text-white font-semibold bg-gradient-to-r from-midnight to-rift hover:from-rift hover:to-midnight p-6 rounded-md w-96" onClick={getMemeImage}>get a new meme image</button>
                
            </div>
            <div className="relative">
             <img src={meme.renderImage} alt="" className="justify-center m-auto my-4"/>

             <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2  text-white p-2 font-extrabold text-5xl">
                {meme.topText}
            </h2>

            <h2 className="absolute bottom-0 left-1/2 transform -translate-x-1/2  text-white p-2 font-extrabold text-5xl">
                {meme.bottomText}
             </h2>
            </div>


        
       </main>
    )
}