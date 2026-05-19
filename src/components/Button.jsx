import React from 'react';
import buttonIcon from '../assets/button-icon.png';

const Button = ({text}) => {
    return (
        
        <button className='flex items-center gap-1 text-sm text-primary'>
            {text}
            <img src={buttonIcon} alt="Button Icon" />
        </button>
        
    );
};

export default Button;