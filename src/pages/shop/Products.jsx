import React from 'react';
import ProductCard from './ProductCard';

const Products = ({products,headline}) => {

    const categories = ["Chair","Beds","Sofa","Lamp"]

    return (
        <section className='bg-[#F7F7F7] py-20 '>
            <div className='section-container'>

                <h1 className='text-4xl font-bold text-center my-8'>{headline}</h1>

                {/* ------Category Tap------ */}
                <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5  py-5 mb-16'>
                    <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                        {
                        categories.map((category,index)=>(
                            <button key={index} className={`py-1.5 sm:px-5 rounded-full hover:bg-primary hover:text-white transition-colors`}>
                                {category}
                            </button>
                        ))
                        }
                    </div>
                </div>

                {/* -------Product Grid------ */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {
                      products.map((product,index)=>(

                          <ProductCard key={index} product={product}/>

                      ))
                    }
                </div>

            </div>
        </section>
    );
};

export default Products;