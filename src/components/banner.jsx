import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigation = useNavigate();
    const handleClickSuscribirse = () => {
        navigation("/suscribirse")
    };
    return (
        <div className='mx-auto max-w-6xl sm:px-6 lg:px-8 font-bold'>
            <div className='flex flex-col items-center'>
                <img className='object-cover w-full aspect-w-16 aspect-h-9' src='./img/banner.png' alt='Banner'></img>
                <a className='md:text-2xl  -mt-36 mb-16 border-2 text-white border-orangeCPN-600 bg-orangeCPN-600 hover:bg-blackCPN-900 hover:border-white  flex items-center justify-center rounded-full py-3 px-2 cursor-pointer' onClick={handleClickSuscribirse}>SUSCRÍBETE AHORA</a>
            </div>
        </div>
    );

}

export default Banner;
