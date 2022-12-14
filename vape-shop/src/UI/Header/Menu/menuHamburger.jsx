import React from "react";
import menu from "./menuPhoto/menuHamburger.png"
import hide from "../../../JavaScript/menu.js";

const menuHamburger = () =>{
    return(
        <div className="menuHamburger">
            <button id="show-menu" onClick={hide}><img className="menuHamburger" src={menu} alt="menu" /></button>
        </div>
    );
};

export default menuHamburger;