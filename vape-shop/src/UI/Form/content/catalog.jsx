import React from "react";
import { Link } from "react-router-dom";
import pod from "../photo/pod.png"
import liquid from "../photo/liquid.png"
import evaporator from "../photo/evaporator.png"

const Catalog = () =>{
    return(
            <div className="catalog">
                <div id="box" className="pod">
                    <div className="Photo">
                        <img className="Photo" src={pod} alt="podPhoto"/>
                    </div>
                    <div className="podTxt TxT">
                        <Link to="/Pod_system"><h1>Самые дешевые цены на под системы</h1></Link>
                    </div>
                </div>

                <div id="box" className="liquid"> 
                    <div className="Photo">
                        <img className="Photo" src={liquid} alt="liquidPhoto"/>
                    </div>
                    <div className="liquidTxt TxT">
                        <Link to="/Liquid"><h1>Новые и вкусные жидкости только у нас</h1></Link>
                    </div>
                </div>

                <div id="box" className="evaporator">
                    <div className="Photo">
                        <img className="Photo" src={evaporator} alt="evaporatorPhoto"/>
                    </div>
                    <div className="evaporatorTxt TxT">
                        <Link to="/Components"><h1>Все комплектующие для под систем</h1></Link>
                    </div>   
                </div>
            </div>

    )
}

export default Catalog;