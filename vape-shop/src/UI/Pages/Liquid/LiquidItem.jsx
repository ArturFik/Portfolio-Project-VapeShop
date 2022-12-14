import React from "react";
import { Link } from "react-router-dom";


const LiquidItem = (props) =>{
    return(
            <div id="catalog-box" className="catalog-box">
                <div className="catalog-Photo back">
                    <img className="catalog-Photo-liquid" src={props.post.img} alt="catalog-podPhoto"/>
                </div>    
                <div className="textcatalog">
                    <div className="catalog-podTxt catalog-TxT">
                        <Link to={props.post.url}><h1>{props.post.title}</h1></Link>
                    </div>
                    <div className="catalog-price-pod">
                        <h1>Цена: {props.post.price}</h1>
                    </div>
                </div>
            </div>
    );
};

export default LiquidItem;