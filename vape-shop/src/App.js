import React from "react";
import {Routes ,Route} from "react-router-dom";
import './style/App.css';
import './style/Catalog.css';
import Logo from "./UI/Header/logo/logo";
import Menu from "./UI/Header/Menu/Menu";
import PodSystem from "./UI/Pages/Pod_system/Pod_system.jsx";
import Home from "./UI/Pages/Home/Home.jsx";
import Components from "./UI/Pages/Components/Components.jsx";
import Liquid from "./UI/Pages/Liquid/Liquid.jsx";
import Registr from "./UI/Header/registr/Registr.jsx";
import Menuhamburger from "./UI/Header/Menu/menuHamburger.jsx";
import './JavaScript/menu.js';


function App() {
  
  return (
    <div className="App">
      <header>
        <div  className="container">         
          <Logo/>
          <Menu/>
          <Registr/>
          <Menuhamburger/>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pod_system" element={<PodSystem/>}/>  
        <Route path="/Components" element={<Components/>}/>
        <Route path="/Liquid" element={<Liquid/>}/>                    
      </Routes>
      <script src='./JavaScript/menu.js'></script>
    </div>
  );
}
export default App;
