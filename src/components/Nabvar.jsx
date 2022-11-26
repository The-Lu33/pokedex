import React from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () => {
    return (
        <div className='ragtangule'>
            <div className='red'>
                <Link to="/">   
                <img src="./image/pokedex.png" alt="pokedex" className='pokedex_img' />
                </Link>
            </div>
            <div className='black'>
            <div className='circule'>
                <span></span>
            </div>
            </div>
        </div>
    );
};

export default Nabvar;