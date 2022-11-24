import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStart } from '../store/slices/start.slice';
const StartImput = () => {

    const [inputt, setInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const enterName = (e) => {
        if (inputt) {
            dispatch(setStart(inputt))
            navigate('/poke-characters');
        }else{
            alert('Para continuar ingresa tu nombre')
        }


    }
    // si es enter ejecuta la funcion enterName
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            enterName()
        }
    }

    return (
        <div className='main'>
            <div className='header'>

            <h1>Hello Trainer!</h1>
            <div className='img_header'>
                <img src="./image/ash.png" alt="" />
            </div>
            </div>
            <h2 className='give_name'>Give me your name to start</h2>
            <div className='input'>
            <input  type="text" onChange={e=> setInput(e.target.value)} value={inputt} 
            onKeyDown={handleKeyDown} 
            placeholder="Text your name.." />
            <button onClick={enterName} >start</button>
            </div>
        </div>
    );
};

export default StartImput;