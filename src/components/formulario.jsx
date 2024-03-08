import React, { useState } from 'react';
import DatosPersonales from './datosPersonales';
import Pasarela from './pasarela';
import Beneficios from './beneficios'

const Formulario = () => {
    const [formulario, setFormulario]=useState(0);
    const [datosPersonales, setDatosPersonales]=useState();
    const [tarjeta, setTareta]=useState();
    const [diferido, setDiferido]=useState();

    const handleClickSiguiente=(form)=>{
        setFormulario(form)
    }

    console.log(datosPersonales);
    console.log(tarjeta);
    console.log(diferido);

    return (
        <div className='mx-auto max-w-6xl sm:px-6 lg:px-8 mt-20'>
            <div className='flex flex-col '>
                <img className='h-72 mb-7' src='./img/text-suscripcion.svg'></img>
                {
                    formulario==0
                    ?<DatosPersonales 
                        setDatosPer={setDatosPersonales} 
                        datosPer={datosPersonales}
                        setTar={setTareta}
                        tar={tarjeta}
                        setDif={setDiferido}
                        dif={diferido}
                        handleClickSiguiente={handleClickSiguiente}></DatosPersonales>
                    :<Pasarela
                        DatosPersonales={datosPersonales}
                        Diferido={diferido}
                        Tarjeta={tarjeta}
                        handleClickSiguiente={handleClickSiguiente}
                    ></Pasarela>
                }
                <Beneficios suscribirse={false}></Beneficios>
            </div>
        </div>
    );
};

export default Formulario;