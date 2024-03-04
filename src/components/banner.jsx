import React from 'react';

function Banner() {
    return (
     <div className='mx-auto max-w-6xl sm:px-6 lg:px-8  font-bold '>
        <div className='flex flex-col items-center h-[490px]'>
            <img className=' object-cover h-full' src='./img/banner.png'></img>
            <a className='text-2xl -mt-36  mb-16 border-2 text-white border-orangeCPN-600 bg-orangeCPN-600 hover:bg-blackCPN-900 hover:border-white w-72 flex items-center justify-center rounded-full py-3 cursor-pointer'>SUSCRÍBETE AHORA</a>
        </div>
    </div>  
    );

}

export default Banner;
