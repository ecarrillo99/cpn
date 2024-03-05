import React from 'react';
import FormContactanos from '../components/formContactanos';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Contactanos = () => {
    return (
        <div>
            <Navbar menu={"contactanos"}></Navbar>
            <FormContactanos></FormContactanos>
            <Footer></Footer>
        </div>
    );
};

export default Contactanos;