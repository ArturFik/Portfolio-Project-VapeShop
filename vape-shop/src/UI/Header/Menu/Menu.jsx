import React from "react";
import {Link} from "react-router-dom";

const Menu = () =>{
    return(
        <div className="background-menu">
            <div className="menu">
                    <Link className="btn" to="/"><h2>Главная</h2></Link>
                    <Link className="btn def" to="/Pod_system"><h2>Под системы</h2></Link>
                    <Link className="btn" to="/Components"><h2>Состовляющие</h2></Link>
                    <Link className="btn" to="/Liquid"><h2>Жидкости</h2></Link>            
            </div>
        </div>
    )
}

export default Menu;