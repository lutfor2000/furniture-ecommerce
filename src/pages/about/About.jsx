import React from 'react';
import bannerImg from '../../assets/banner.png';
import AboutInfo from './AboutInfo';

const About = () => {
    return (
       <section className='min-h-screen'>

        {/* -----Banner Part---- */}
         <div className='w-full h-[400px] !bg-cover !bg-center bg-no-repeat flex items-center justify-center' style={{background: `url(${bannerImg})`}}>
            <h1 className='text-4xl font-bold text-white'>About Us</h1>
         </div>

         {/* ------About Info----- */}
         <AboutInfo/>

       </section>
    );
};

export default About;