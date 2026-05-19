import React, { useEffect, useState } from 'react';
import bannerImg from '../../assets/banner.png';
import Products from './Products';




const Shop = () => {

   const [products,setProducts] = useState([])

   useEffect(()=>{
      fetch('product.json')
      .then(res => res.json())
      .then(json => setProducts(json) )
   },[])

    return (
       <section className='min-h-screen'>

        {/* -----Banner Part---- */}
         <div className='w-full h-[400px] !bg-cover !bg-center bg-no-repeat flex items-center justify-center' style={{background: `url(${bannerImg})`}}>
            <h1 className='text-4xl font-bold text-white'>Shop Our Products</h1>
         </div>

         {/* -----Products Part---- */}
         
         <Products headline="What's Your Choice" products={products}/>

       </section>
    );
};

export default Shop;