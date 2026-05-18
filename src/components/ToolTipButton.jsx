import React from 'react';

const ToolTipButton = ({position='bottom'}) => {

    const colors=['bg-red-700','bg-green-700','bg-primary']

    const positionClass = {

        bottom: {
            toolTip: 'bottom-full left-1/2 transform -translate-x-1/2  mb-3',
            arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-1'
        },
    }

    return (

         <div>

                <button className='relative p-3 bg-white/25 rounded-full border-white border border-1 text-xl'>

                    <div className={`hidden absolute space-x-1 p-2 bg-white/25 rounded-lg shadow-md group-hover:flex ${positionClass[position].toolTip}`}>

                        {
                          colors.map((color,index)=>(
                            <div key={index} className={`${color} size-6 border border-white rounded-full`} />
                          ))  
                        }
            

                        {/* -----Tooltip Arrow------ */}
                        <div className={`absolute border-t-white/25 h-0 w-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 z-50 ${positionClass[position].arrow}`}/>
                        

                    </div>

                </button>

        </div>
    );
};

export default ToolTipButton;