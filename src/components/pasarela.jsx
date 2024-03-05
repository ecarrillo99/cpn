
import React, { useState } from 'react';

const Pasarela = () => {
       return (
        <>
            <div className='mx-auto max-w-6xl sm:px-6 lg:px-8'>
                <div className='flex items-center justify-center '>
                    <div><img src="./img/texto.png" alt="" /></div>
                </div>
                <div>
                    <div className="flex items-center border border-red-500 w-2/4">
                        <div className="flex flex-row items-center border border-gray-300 rounded-md w-full h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.12 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <input type="email" placeholder="Ingresa tu correo electrónico" className="w-full h-full outline-none px-4"                             />
                        </div>
                    </div>
                </div>
            </div>
            <div>dfgfdgfd</div>
            
        </>
    );
}
export default Pasarela;