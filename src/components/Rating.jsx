import React from 'react';
import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";


const Rating = ({rating}) => {

    const totalStar = 5;

    return (

        <div className='flex space-x-1 cursor-pointer'>
            {
                Array.from({length: totalStar},(_, index) =>{
                    const starIndex = index + 1 ;
                    return starIndex <= rating ? (<GoStarFill key={index} className='text-yellow-500' />) : (<FiStar key={index} className='text-gray-400' />)

                })
            }
        </div>
    );
};

export default Rating;