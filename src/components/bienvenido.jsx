import React from 'react';

const Bienvenido = ({nombre, usuario, contrasenia, caducidad}) => {


    const formatDate = (fecha) => {
        const date = new Date(fecha);
        const options = {  day: '2-digit', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('es-ES', options);
        return formattedDate;
    };
    return (
        <div className='mx-auto max-w-6xl sm:px-6 lg:px-8 -mt-10'>
            <div className='flex flex-col justify-center items-center '>
                <label className='text-orangeCPN-600 font-bold text-xl'>¡Listo!</label>
                <label className=' font-bold text-xl max-w-[490px] text-center pt-2'>Desde hoy puedes disfrutar de hoteles Top, al mejor precio certificado. Pero en serio</label>
                <label className='text-orangeCPN-600 text-sm pt-4'>Te damos la bienvenida</label>
                <label className=' text-xl font-bold'>{nombre}</label>
                <p className='text-sm max-w-[500px] pt-2'>Descarga la app y accede con el usuario y contraseña que te presentamos a continuación:</p>
                <label className='bg-gray-200 text-base font-bold w-52 px-2 py-1'>Usuario: <label className='font-normal'>{usuario}</label></label>
                <label className='bg-gray-200 text-base font-bold w-52 px-2 py-1 mt-1'>Contraseña: <label className='font-normal'>{contrasenia}</label></label>
                <p className='text-sm w-[500px] text-start mt-3'>Para tu traquilidad esta información la enviamos a tu correo electrónico.</p>
                <p className='text-sm w-[500px] text-start '>Recuerda que tu suscripcion caduca el <label className='font-bold'>{formatDate(caducidad)}</label>.</p>
                <label className=' font-bold text-xl max-w-[490px] text-center mt-4'>Descarga la APP VisitaEcuador.com en:</label>
                <img className='h-32 mt-4' src='./img/qr_descarga.png'></img>
                <img className='w-72 mt-4' src='./img/store.svg'></img>
            </div>
        </div>
    );
};

export default Bienvenido;