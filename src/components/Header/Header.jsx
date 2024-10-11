import React from "react";
import "./HeaderStyle.scss"
function Header(){
    return(
        <header>
            
            <nav>
                <ul>
                <li><a href="#estacao-caseiros">Comidas Caseiras</a></li>
                <li><a href="#estacao-lanches">Lanches</a></li>
                <li><a href="#container-contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header