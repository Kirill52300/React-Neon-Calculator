import React from 'react';
import cls from './Calcinput.module.css'
function Calcinput({ CalcInputValues }) {
    return (


        <input className={cls.Calcinput} value={CalcInputValues} placeholder='0' readOnly={true} />



    );
}

export default Calcinput;