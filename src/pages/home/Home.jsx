import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import WhyChoose from './WhyChoose';
import Products from '../shop/Products';


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
        </>
    );
};

export default Home;