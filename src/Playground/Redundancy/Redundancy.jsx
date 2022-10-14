import { useState, useEffect } from 'react';
import './redundancy.scss';


export default function Redundancy() {

    let [btns, setBtns] = useState();

    useEffect(() => {

    }, []);

    function createButtons() {
        let buttons = [];
        let btnPrnt = document.createElement('div');
        btnPrnt.setAttribute('class', 'btnPrnt');
        for (let index = 0; index < 30; index++) {
            let temp = document.createElement('button');
            temp.setAttribute('class', 'redundBtn');
            temp.setAttribute('type', 'button');
            buttons[index] = temp;
            btnPrnt.appendChild(temp);
        }
        return <>{btnPrnt}</>;
    }

    return (<div className='redundContainer'>
        {() => createButtons()}
    </div>)
}