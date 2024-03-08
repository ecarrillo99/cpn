import React, { useState } from 'react';
import { sendContactanos } from '../controllers/informacion/informacion';
import { SyncLoader } from 'react-spinners';

const FormContactanos = () => {
    const [nombres, setNombres] = useState();
    const [nombresError, setNombresError] = useState(false);
    const [correo, setCorreo] = useState();
    const [correoError, setCorreoError] = useState(false);
    const [mensaje, setMensaje] = useState();
    const [mensajeError, setMensajeError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState();
    const [isSent, setIsSent] = useState(false);

    const handleChangeNombres = (event) => {
        setNombresError(false);
        setNombres(event.target.value);
    }
    const handleChangeCorreo = (event) => {
        setCorreoError(false);
        setCorreo(event.target.value);
    }
    const handleChangeMensaje = (event) => {
        setMensajeError(false);
        setMensaje(event.target.value);
    }

    const handleClickContactanos = () => {
        setError(false);
        nombres == null && setNombresError(true)
        correo == null && setCorreoError(true)
        mensaje == null && setMensajeError(true)
        if (mensaje != null && correo != null && nombres != null) {
            setError(false);
            setIsLoading(true)
            sendContactanos(nombres, correo, mensaje).then((result) => {
                if (result) {
                    setIsLoading(false);
                    setIsSent(true);
                    console.log("mensaje enviado");
                } else {
                    setIsLoading(false);
                    setError(true);
                    setErrorText("Ha ocurrido un error, intenta nuevamente");
                }
            })
        } else {
            setError(true);
            setErrorText("Los campos en rojo son obligatorios")
        }
    }
    return (
        <>
            <div className='mx-auto max-w-6xl sm:px-6 lg:px-8 mt-20'>
                <div className='flex justify-center items-center flex-col gap-3'>
                    <h1 className='text-orangeCPN-600 font-bold text-3xl mb-2'>Contáctanos</h1>
                    <h2 className='text-xl mb-1'>Llena el formulario con tus datos y un asesor se pondrá en contacto</h2>
                    {
                        isSent &&
                        <div className='bg-green-500 px-3 py-2 flex gap-3 rounded-md'>
                            <svg className='h-6 w-6' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.8809 16.15C10.8809 16.0021 10.9101 15.8556 10.967 15.7191C11.024 15.5825 11.1073 15.4586 11.2124 15.3545C11.3175 15.2504 11.4422 15.1681 11.5792 15.1124C11.7163 15.0567 11.8629 15.0287 12.0109 15.03C12.2291 15.034 12.4413 15.1021 12.621 15.226C12.8006 15.3499 12.9399 15.5241 13.0211 15.7266C13.1024 15.9292 13.122 16.1512 13.0778 16.3649C13.0335 16.5786 12.9272 16.7745 12.7722 16.9282C12.6172 17.0818 12.4204 17.1863 12.2063 17.2287C11.9922 17.2711 11.7703 17.2494 11.5685 17.1663C11.3666 17.0833 11.1938 16.9426 11.0715 16.7618C10.9492 16.5811 10.8829 16.3683 10.8809 16.15ZM11.2408 13.42L11.1008 8.20001C11.0875 8.07453 11.1008 7.94766 11.1398 7.82764C11.1787 7.70761 11.2424 7.5971 11.3268 7.5033C11.4112 7.40949 11.5144 7.33449 11.6296 7.28314C11.7449 7.2318 11.8697 7.20526 11.9958 7.20526C12.122 7.20526 12.2468 7.2318 12.3621 7.28314C12.4773 7.33449 12.5805 7.40949 12.6649 7.5033C12.7493 7.5971 12.813 7.70761 12.8519 7.82764C12.8909 7.94766 12.9042 8.07453 12.8909 8.20001L12.7609 13.42C12.7609 13.6215 12.6809 13.8149 12.5383 13.9574C12.3958 14.0999 12.2024 14.18 12.0009 14.18C11.7993 14.18 11.606 14.0999 11.4635 13.9574C11.321 13.8149 11.2408 13.6215 11.2408 13.42Z" fill="#feffff"></path> <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke="#feffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <label className='text-white'>{"Tu mensaje se ha neviado, espera nuestra respuesta muy pronto."}</label>
                        </div>
                    }
                    {
                        error &&
                        <div className='bg-red-400 px-3 py-2 flex gap-3 rounded-md'>
                            <svg className='h-6 w-6' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.8809 16.15C10.8809 16.0021 10.9101 15.8556 10.967 15.7191C11.024 15.5825 11.1073 15.4586 11.2124 15.3545C11.3175 15.2504 11.4422 15.1681 11.5792 15.1124C11.7163 15.0567 11.8629 15.0287 12.0109 15.03C12.2291 15.034 12.4413 15.1021 12.621 15.226C12.8006 15.3499 12.9399 15.5241 13.0211 15.7266C13.1024 15.9292 13.122 16.1512 13.0778 16.3649C13.0335 16.5786 12.9272 16.7745 12.7722 16.9282C12.6172 17.0818 12.4204 17.1863 12.2063 17.2287C11.9922 17.2711 11.7703 17.2494 11.5685 17.1663C11.3666 17.0833 11.1938 16.9426 11.0715 16.7618C10.9492 16.5811 10.8829 16.3683 10.8809 16.15ZM11.2408 13.42L11.1008 8.20001C11.0875 8.07453 11.1008 7.94766 11.1398 7.82764C11.1787 7.70761 11.2424 7.5971 11.3268 7.5033C11.4112 7.40949 11.5144 7.33449 11.6296 7.28314C11.7449 7.2318 11.8697 7.20526 11.9958 7.20526C12.122 7.20526 12.2468 7.2318 12.3621 7.28314C12.4773 7.33449 12.5805 7.40949 12.6649 7.5033C12.7493 7.5971 12.813 7.70761 12.8519 7.82764C12.8909 7.94766 12.9042 8.07453 12.8909 8.20001L12.7609 13.42C12.7609 13.6215 12.6809 13.8149 12.5383 13.9574C12.3958 14.0999 12.2024 14.18 12.0009 14.18C11.7993 14.18 11.606 14.0999 11.4635 13.9574C11.321 13.8149 11.2408 13.6215 11.2408 13.42Z" fill="#feffff"></path> <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke="#feffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <label className='text-white'>{errorText}</label>
                        </div>
                    }
                    <div className="flex items-center w-2/4 justify-center">
                        <div className={`flex flex-row items-center border ${nombresError ? "border-red-500" : "border-blackCPN-600"} rounded-md w-full h-10`}>
                            <img className="h-5 ml-2" src='./img/usuario.svg'></img>
                            <input type="text" onChange={handleChangeNombres} value={nombres} placeholder="Nombre y apellido" className="w-full h-full bg-transparent outline-none px-4" />
                        </div>
                    </div>
                    <div className="flex items-center  w-2/4">
                        <div className={`flex flex-row items-center border ${correoError ? "border-red-500" : "border-blackCPN-600"} rounded-md w-full h-10`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 ml-2 text-blackCPN-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M3 8l7.89 5.26a2 2 0 002.12 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <input type="email" onChange={handleChangeCorreo} value={correo} placeholder="Ingresa tu correo electrónico" className="w-full h-full bg-transparent outline-none px-4" />
                        </div>
                    </div>
                    <div className="flex items-center  w-2/4">
                        <textarea id="message" onChange={handleChangeMensaje} value={mensaje} rows="6" class={`p-2 w-full  outline-none border ${mensajeError ? "border-red-500" : "border-blackCPN-600"} rounded-md outline-none" placeholder="Escribe un mensaje`} placeholder='Ingrese su mensaje'></textarea>
                    </div>

                    <a className={`text-white border-2 border-orangeCPN-600 bg-orangeCPN-600 hover:bg-blackCPN-900 hover:border-orangeCPN-600 w-44 flex items-center justify-center rounded-full py-1.5 cursor-pointer`} onClick={handleClickContactanos}>{isLoading ? <SyncLoader color='white' size={6} ></SyncLoader> : "Enviar mensaje"}</a>

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