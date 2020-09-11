import React from "react"
import  "../CSS/SampleWallpaper.css"


function SampleWallpaper() {
    return(
        <div className = "sample-wallpaper">
             <article className="wallpaper">
            <img src={require("../Assets/img/venom-1.jpg")} alt="Wallpaper #1" class="wallpaper" />

             </article>
        <article className = "wallpaper">
        <img src= {require("../Assets/img/hulk-1.jpg")} alt="Wallpaper #1" class="wallpaper" />
        </article>
        <article className = "wallpapper">
        <img src= {require("../Assets/img/venom-2.jpg")} alt="Wallpaper #1" class="wallpaper" />

        </article>

        </div>
       
    )
    
}






export default SampleWallpaper