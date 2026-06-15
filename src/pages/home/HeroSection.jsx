import React from 'react';

// --------Image Import---------
import bannerImg from '../../assets/banner.png';

// --------Icon Import---------
import { RiSearchLine } from "react-icons/ri";

import ToolTipButton from '../../components/ToolTipButton'

const HeroSection = () => {
    return (
        <section className='h-screen relative bg-cover bg-center bg-no-repeat text-white px-4' style={{backgroundImage: `url(${bannerImg})`}}>

            <div className='md:pt-48 pt-24 text-center space-y-6  lg:space-y-7 w-full md:w-1/2 mx-auto'>
                <h1 className='text-2xl lg:text-6xl font-medium lg:leading-tight leading-9'>Make your interior more minimalistic & modern</h1>
                <p className='text-sm md:text-xl font-normal lg:w-full mx-auto lg:leading-8'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                {/* ------Search Fild------ */}
                <div className='relative inline-block z-30'>
                    <input type="text" placeholder='Search Furniture' className='w-full md:w-80 py-2 px-6 bg-white/25 rounded-full border border-gray-400 focus:outline-none placeholder:text-white' />
                    <div className='absolute right-2 top-1/2 -translate-y-1/2 transform  p-1.5 bg-primary rounded-full cursor-pointer'>
                        <RiSearchLine />
                    </div>
                </div>

            </div>


            {/* ------bottom Blur Effict----- */}
            <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'/>


            {/* ----------Tooltip Box--------------- */}
           

            <div className='hidden absolute xl:block bottom-40 left-24 group'>
                <ToolTipButton position="bottom" />
            </div>

            <div className='hidden absolute xl:block bottom-52 left-96 group'>
                <ToolTipButton position="bottom" />
            </div>

            <div className='hidden absolute xl:block bottom-24 left-[820px] group'>
                <ToolTipButton position="bottom" />
            </div>

            <div className='hidden absolute xl:block bottom-40 right-24 group'>
                <ToolTipButton position="bottom" />
            </div>


        </section>
    );
};

export default HeroSection;