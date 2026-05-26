import React from 'react';
import expriencesImg from '../../assets/expricences.png'
import Button from '../../components/Button';

const Expriences = () => {
    return (

        <section className='section-container md:py-24 py-10 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
            
            <div className='md:w-1/2 md:h-[541px]'>
                <img src={expriencesImg} className='w-full h-full' alt="" />
            </div>

            <div className='md:w-1/2 mx-auto'>
                <h3 className='uppercase text-lg font-semibold text-primary mb-4 '>Expriences</h3>
                <h2 className='capitalize text-4xl font-bold lg:w-[60%] mb-4'>we provide you the best experience</h2>
                <p className='dark:text-white !text-secondary mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>

                <Button text="More info"/>
            </div>

        </section>

    );
};

export default Expriences;