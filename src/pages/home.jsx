import React from 'react';

import Banner from "../components/banner";
import Beneficios from '../components/beneficios';
import Footer from '../components/footer';
import NavBar from '../components/navbar'

const Home = () => {
    return (
        <div>
             <NavBar menu={"inicio"}></NavBar>
            <Banner ></Banner>
            <Beneficios suscribirse={true}></Beneficios>
            <Footer></Footer>
        </div>
    );
};

export default Home;