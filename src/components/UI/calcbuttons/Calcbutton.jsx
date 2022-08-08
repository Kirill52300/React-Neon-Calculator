import React from 'react';
import cls from './Calcbutton.module.css'
function Calcbutton({ clickhandler }) {
    const states = ['Cos()', 'Sin()', 'Tan()', '-/+', 'AC', 7, 8, 9, '%', '>', 4, 5, 6, 'X', '/', 1, 2, 3, '+', '-', '0', '00', '.', '√', 'Enter'];

    return (

        states.map((state, i) => <button className={cls.Calcbutton} key={i} value={state} onClick={clickhandler}>{state}</button>)

    );
}

export default Calcbutton;