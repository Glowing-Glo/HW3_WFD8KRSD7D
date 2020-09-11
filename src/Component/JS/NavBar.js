import React from "react"
import "../CSS/NavBar.css"


function NavBar() {
    return(
        <nav className="navbar">
            <div className="container">
            <a href="Hulk">Hulk</a>
            <a href="Marvel" class="logo is-active">Mavel</a>
             <a href="Venom">Venom</a>

            </div> 
        </nav>
    )
    
}




export default NavBar