import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setStart } from '../store/slices/start.slice';
const StartImput = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const enterName = (e) => {
        dispatch(setStart(input))
        navigate('/poke-characters');
            }

    return (
        <div>
            <h2>star</h2>
            <input type="text" onChange={e=> setInput(e.target.value)} value={input}  />
            <button onClick={enterName} >Start</button>
        </div>
    );
};

export default StartImput;