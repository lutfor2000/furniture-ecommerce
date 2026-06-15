import React from 'react';
import bannerImg from '../../assets/banner.png';
import Info from './Info';

const contact = () => {
    return (
         <section className='min-h-screen'>
        
                {/* -----Banner Part---- */}
                 <div className='w-full h-[400px] !bg-cover !bg-center bg-no-repeat flex items-center justify-center' style={{background: `url(${bannerImg})`}}>
                    <h1 className='text-4xl font-bold text-white'>Contact</h1>
                 </div>

                {/* ------Contact Info--- */}
                <Info/>

         </section>

         
    );
};

export default contact;