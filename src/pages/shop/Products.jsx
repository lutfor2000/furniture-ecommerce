import React, { useState } from 'react';
import buttonIcon from '../../assets/button-icon.png';
import ProductCard from './ProductCard';

const Products = ({products,headline}) => {

    const categories = ["Chair","Beds","Sofa","Lamp"]
    const [selectCategory, SetSelectCategory] = useState("Chair")
    const [visibleProducts,setVisibleProducts] = useState(4)
  
    // ------------Filtered Product----------
    const filteredProducts = products.filter((product) => product.category === selectCategory)

    //-------------LoadMoreProducts Button--------
    const loadMoreProducts = ()=>{
        setVisibleProducts((prev)=> prev + 4)
    }


    return (
        <section className='bg-[#F7F7F7] md:py-24 py-10 '>
            <div className='section-container'>

                <h1 className='text-4xl font-bold text-center my-8'>{headline}</h1>

                {/* ------Category Tap------ */}
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5  py-5 mb-16'>
                    <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                        {
                        categories.map((category,index)=>(
                            <button 
                            onClick = {()=>{
                                SetSelectCategory(category);
                                setVisibleProducts(4)
                            }} key={index}
                            className={`${selectCategory === category ? "bg-white text-primary" : ""} 
                            py-1.5 sm:px-5 px-4 rounded-full hover:bg-primary hover:text-white transition-colors`}>
                                {category}
                            </button>
                        ))
                        }
                    </div>
                </div>

                {/* -------Product Grid------ */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {
                      filteredProducts.slice(0,visibleProducts).map((product,index)=>(

                          <ProductCard key={index} product={product}/>

                      ))
                    }
                </div>

                {/* -------More Button--------------- */}
                {
                    visibleProducts < filteredProducts.length && (
                        <div className='flex justify-center items-center mt-8'>
                            <button onClick={loadMoreProducts} className='flex items-center font-bold gap-1 text-sm text-primary'>
                                View All
                                <img src={buttonIcon} alt="Button Icon" />
                            </button>
                        </div>
                    )
                }


            </div>
        </section>
    );
};

export default Products;