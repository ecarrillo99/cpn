import React from 'react';

function Navbar() {
  return (
    <div className="bg-blackCPN-900 h-[140px]">
    <div className='mx-auto max-w-6xl sm:px-6 lg:px-8 flex text-white font-bold'>
        <div className='h-[140px] flex items-center justify-center w-1/4'>
            <img className='h-12' src="./img/LOGO_CPN.svg" alt="CPN"/>
        </div>
        <div className='flex w-3/4 gap-4 justify-end items-end pb-5'>
            <a className='border-2 border-blackCPN-900 hover:border-white w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer'>INICIO</a>
            <a className='border-2 border-blackCPN-900 hover:border-white w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer'>CONTÁCTANOS</a>
            <a className='border-2 border-blackCPN-900 hover:border-white w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer'>CONOCE MÁS</a>
            <a className='border-2 border-orangeCPN-600 bg-orangeCPN-600 hover:bg-blackCPN-900 hover:border-white w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer'>SUSCRÍBETE AHORA</a>            
        </div>
    </div>
</div>

  );
}

export default Navbar;
