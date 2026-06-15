import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';
import Expriences from './Expriences';
import Materials from './Materials';
import Testimonials from './Testimonials';


const Home = () => {

    const [products,setProducts] = useState([])
    
       useEffect(()=>{
          fetch('product.json')
          .then(res => res.json())
          .then(json => setProducts(json) )
       },[])

    return (
        <>
            <HeroSection/>
            <WhyChoose/>
            <Products headline="Best Selling Product" products={products}/>
            <Expriences/>
            <Materials/>
            <Testimonials/>
        </>
    );
};

export default Home;