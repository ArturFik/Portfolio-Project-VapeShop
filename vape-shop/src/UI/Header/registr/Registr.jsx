import React, { useState } from 'react';
import BoxRegisterMenu from '../../Form/boxRegisterMenu.jsx';


const Registr = () =>{
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className="registerbtn">
            <button className='register-btn' onClick={() => setModalActive(true)}>Регистрация</button>
            <BoxRegisterMenu active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Registr;
