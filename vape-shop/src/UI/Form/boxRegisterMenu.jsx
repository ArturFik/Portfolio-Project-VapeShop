import React from "react";

const BoxRegisterMenu = ({active, setActive}) =>{ 
    return (
      <div className={active ? "all-window-register active" : "all-window-register"} onClick={() => setActive(false)}><center>
      <div className="window-register" onClick={e => e.stopPropagation()}>
        <center><div className="div-register"><h1 className="div-register">Регистрация</h1></div></center>
        <div className="div-input">
          <center><input className="input-register" name="mail" type="text" placeholder="Введите mail..."/></center>
          <center><input className="input-register" name="password" type="password" placeholder="Введите пароль..."/></center>
        </div>
        <div className="div-button">
          <center><button className="button-register"><h1 className="button-register h1-button-register">Зарегистрироваться</h1></button></center>
          <center><button className="button-login"><h1 className="button-login h1-button-register">Войти</h1></button></center>
        </div>
      </div>
      </center>
      </div>
    )
};

export default BoxRegisterMenu;
