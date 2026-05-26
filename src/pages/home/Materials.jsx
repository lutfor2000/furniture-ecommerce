import React from 'react';
import materialOne from '../../assets/material1.png'
import materialTwo from '../../assets/material2.png'
import materialThree from '../../assets/material3.png'

const Materials = () => {
    return (
        <section className='bg-[#F7F7F7] md:py-24 py-10'>
            <div className='section-container flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>

               <div className='md:w-1/2 mx-auto'>
                    <h3 className='uppercase font-semibold text-primary mb-4'>Materials</h3>
                    <h2 className='capitalize text-4xl font-bold lg:w-[60%] mb-4'>we provide you the best experience</h2>
                    <p className='dark:text-white !text-secondary mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                </div> 

                <div className='gird md:grid-cols-3 flex'>
                   <img className='w-50' src={materialOne} alt="Materials one Img" />
                   <img className='w-50' src={materialTwo} alt="Materials two Img" />
                   <img className='w-50' src={materialThree} alt="Materials Three Img" />
                </div>

            </div>
        </section>
    );
};

export default Materials;