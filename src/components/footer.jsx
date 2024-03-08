import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="bg-blackCPN-900 h-[158px]">
        
            <div className='h-[158px] flex items-center justify-center flex-col text-white font-light gap-y-3'>
                <div className='flex gap-8 '>
                    <img className='h-12' src="./img/LOGO_CPN.svg" alt="CPN"/>
                    <div className='h-16 w-0.5 rounded-r-full rounded-l-full bg-white'></div>
                    <img className='h-16' src="./img/logoVisite.svg" alt="CPN"/>
                </div>                
                <p>Aplican Términos y Condiciones. Producto comercializado por Tasiste by Gea © {year}</p>
            </div>
            
      
        </div>
    );
};

export default Footer;