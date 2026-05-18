import React from 'react';

const ToolTipButton = ({position='bottom',colors=['bg-red-700','bg-green-700','bg-blue-700']}) => {
    return (

         <div>

                <button className='relative p-3 bg-white/25 rounded-full border-white border border-1 text-xl'>

                    <div className='hidden absolute bottom-full left-1/2 transform -translate-x-1/2 space-x-1 p-2 mb-3 bg-white/25 rounded-lg shadow-md group-hover:flex'>
                        <div className='size-6 bg-red-700 border border-white rounded-full'  />
                        <div className='size-6 bg-green-700 border border-white rounded-full'  />
                        <div className='size-6 bg-blue-700 border border-white rounded-full'  />

                        {/* -----Tooltip Arrow------ */}
                        <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 border-t-white/25 h-0 w-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 z-50'>

                        </div>

                    </div>

                </button>

            </div>
    );
};

export default ToolTipButton;