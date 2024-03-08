import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Formulario from '../components/formulario';
import { useLocation } from 'react-router-dom';
import ComprobacionPago from '../components/comprobacionPago';

const Suscribirse = () => {
    const location = useLocation();
    // Parsea los parámetros de consulta de la URL
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    return (
        <div>
            <Navbar></Navbar>
            {
                id==null
                ?<Formulario></Formulario>
                :<ComprobacionPago id={id}></ComprobacionPago>
            }
            <Footer></Footer>
        </div>
    );
};

export default Suscribirse;