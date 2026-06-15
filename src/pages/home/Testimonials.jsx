import React, { useEffect, useState } from 'react';
import prodcut01 from '../../assets/products/beds-1.png'
import Rating from '../../components/Rating';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';


const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch("reviews.json")
        .then(res => res.json())
        .then(json => setReviews(json))
    },[])


    return (

       <section className='md:py-24 py-10'>
            <div className='section-container'>

                 <div className='text-center'>
                    <h3 className='uppercase font-semibold text-primary mb-4'>Testimonials</h3>
                    <h2 className='capitalize text-4xl font-bold  mb-4'>Our Client Reviews</h2>
                </div> 

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    
                    breakpoints={{
                    640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    },

                    768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    },

                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    },

                    }}

                    navigation={true}
                    modules={[Pagination,Navigation]}
                    // className="mySwiper text-center"
                    className="md:max-w-7xl mx-auto relative rounded"
                    >

                        {
                            reviews.map((review,index)=>(

                                <SwiperSlide style={{background: `url(${review.coverImg}`}} key={index} className='!bg-no-repeat !bg-cover !rounded-lg'>
                                    <div className='md:h-[547px] flex justify-center items-center mb-4'>

                                        <div className='mt-16 mb-5 bg-white border rounded-xl md:w-4/5 w-full p-4 relative'>

                                            <img src={review.image} alt="" className='size-20 absolute -top-8 ring-2 ring-primary object-cover rounded-full left-1/2 -translate-x-1/2 ' />

                                            <div className='text-center mt-16'>

                                            <h3 className='text-lg font-semibold dark:text-black'>{review.name}</h3>
                                            <p className='mb-3 dark:text-black'>Verifyed Customer</p>
                                            <p className='text-gray-500 mb-4'>{review.review}</p>

                                            <div className='w-full mb-2 mx-auto flex justify-center items-center'>
                                                <Rating rating={review.rating}/>
                                            </div>

                                            </div>


                                        </div>

                                    </div>
                                </SwiperSlide>
                               
                            ))

                        }

                  
                </Swiper>

            </div>
       </section>

    );
};

export default Testimonials;