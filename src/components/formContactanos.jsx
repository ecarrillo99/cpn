import React from 'react';

const FormContactanos = () => {
    return (
        <>
        <div className='mx-auto max-w-6xl sm:px-6 lg:px-8 mt-20'>
            <div className='flex justify-center items-center flex-col gap-3'>
                <h1 className='text-orangeCPN-600 font-bold text-3xl mb-2'>Contáctanos</h1>
                <h2 className='text-xl mb-1'>Llena el formulario con tus datos y un asesor se pondrá en contacto</h2>
            
           
                <div className="flex items-center w-2/4 justify-center">
                    <div className="flex flex-row items-center border border-blackCPN-600 rounded-md w-full h-10">
                        <img className="h-5 ml-2" src='./img/usuario.svg'></img>
                        <input type="text" placeholder="Nombre y apellido" className="w-full h-full bg-transparent outline-none px-4"                             />
                    </div>
                </div>
                <div className="flex items-center  w-2/4">
                    <div className="flex flex-row items-center border border-blackCPN-600 rounded-md w-full h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 ml-2 text-blackCPN-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 8l7.89 5.26a2 2 0 002.12 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <input type="email" placeholder="Ingresa tu correo electrónico" className="w-full h-full bg-transparent outline-none px-4"                             />
                    </div>
                </div>
                    <div className="flex items-center  w-2/4">
                    <textarea id="message" rows="6" class=" p-2 w-full   border border-blackCPN-600 rounded-md outline-none" placeholder="Escribe un mensaje"></textarea>      
                </div> 

                <a className={`text-white border-2 border-orangeCPN-600 bg-orangeCPN-600 hover:bg-blackCPN-900 hover:border-orangeCPN-600 w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer`}>Enviar mensaje</a> 
                
                
                

            </div> 
      
        </div>
        <div className='mt-16 h-28 bg-orange-600 flex justify-center items-center text-white gap-x-9'>
            <div>
                <h1 className='font-bold text-3xl'>¿Tienes alguna duda?</h1>
            </div>
            <div className='h-16 w-0.5 rounded-r-full rounded-l-full bg-white'></div>
            <div className=''>
                <h1>Llámanos</h1>
                <h1 className='font-bold text-3xl'>1800 222 765</h1>
            </div>
            <div className='h-16 w-0.5 rounded-r-full rounded-l-full bg-white'></div>
            <div className='w-1/5 flex flex-col justify-center items-center'>
                <p>Matriz Quito, </p>
                <p>Av. 10 de Agosto N31-232 y Mariana de Jesús</p>
                <p> 02 3 984 999</p>
            </div>
        </div>
        </>
    );
};

export default FormContactanos;