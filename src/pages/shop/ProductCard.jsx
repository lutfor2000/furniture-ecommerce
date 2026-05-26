import React from 'react';
import Rating from '../../components/Rating';
import { MdOutlineAdd } from "react-icons/md";

const ProductCard = ({product}) => {
    return (

        <div>

            <div className='bg-[#FAFAFA]'>
                <img src={product.imageUrl} alt="" />
            </div>

            <div className='p-6 !bg-white dark:bg-black shadow-sm'>
                
                <h4 className='text-base text-[#8D8D8D] mb-1'>{product.category}</h4>
                <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
                <Rating rating={product.rating}/>
                
                {/* ---------Price and add to Card----- */}
                <div className=' mt-5 flex justify-between items-center dark:text-white'>
                    <p className='text-secondary font-bold text-lg'><sup>$</sup><span>{product.price}</span></p>
                    <button className='bg-secondary hover:bg-primary text-white p-2 rounded-full'><MdOutlineAdd /></button>
                </div>
                
            </div>

        </div>

    );
};

export default ProductCard;