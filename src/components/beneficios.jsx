
import React, { useState } from 'react';

const Beneficios = () => {
    const [expanded, setExpanded] = useState([false, false, false, false, false, false]);

    const toggleExpand = (index) => {
        setExpanded(prevExpanded => {
          const newExpanded = [...prevExpanded]; // Hacer una copia del array original
          newExpanded[index] = !newExpanded[index]; // Modificar el valor específico
          return newExpanded; // Establecer el nuevo estado
        });
      };
    return (
        <>
            <div className='mx-auto max-w-6xl sm:px-6 lg:px-8 -mt-10'>
                <div className='flex items-center h-20 bg-blackCPN-900 relative mx-3 rounded-t-2xl text-white text-2xl justify-center gap-6'>
                    <h1 >BENEFICIOS PROYECTO VIAJERO</h1>
                    <img className='h-14' src='./img/logoVisite.svg'></img>
                </div>
                <div>
                    <div className='flex flex-wrap mx-3 rounded-b-2xl shadow-2xl'>

                        <div className="flex items-start w-1/2 p-4">
                            <img className="h-20" src="./img/ve.svg"  />
                            <div className='flex flex-col'>
                                <h2 className="text-xl font-bold mb-2">VisitaEcuador.com</h2>
                                <div className={`overflow-hidden text-sm ${expanded[0] ? 'block' : 'h-12'}`}>
                                    <p className='mb-2'>Plataforma de hospedaje nacional con ahorros de hasta un 50% en tarifas especiales</p>
                                    <p className='font-bold mb-1'>Beneficios para suscriptores:</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Ahorro de hasta un 50% en tarifas Rack.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Beneficios compartidos con familiares/amigos en presencia del suscriptor.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Reservas ilimitadas en todo el país.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Reservas directas con hoteles.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Reservar a traves de nuestra central de reservas.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Acceso al sistema de ofertas de VisitaEcuador.com.</p>
                                </div>
                                <button className="flex text-orangeCPN-700  items-start" onClick={()=>toggleExpand(0)}>
                                    {expanded[0] ? 'Ver menos..▲' : 'Ver más..▼'}
                                </button>
                            </div>                        
                        </div>
                        <div className="flex items-start w-1/2 p-4">
                            <img className="h-20" src="./img/asistencia.svg"  />
                            <div className='flex flex-col'>
                                <h2 className="text-xl font-bold mb-2">Asistencia medica 24/7</h2>
                                <div className={`overflow-hidden text-sm ${expanded[1] ? 'block' : 'h-10'}`}>                                   
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Médica online desde cualquier parte del mundo.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Asistencia médica básica.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> E-doctor: Doctor por video llamada, sin límites.</p>
                                </div>
                                <button className="flex text-orangeCPN-700 items-start" onClick={()=>toggleExpand(1)}>
                                    {expanded[1] ? 'Ver menos..▲' : 'Ver más..▼'}
                                </button>
                            </div>                              
                        </div>
                        <div className="flex items-start w-1/2 p-4">
                            <img className="h-20" src="./img/disney.svg"  />
                            <div className='flex flex-col'>
                                <h2 className="text-xl font-bold mb-2">Disney Concierge</h2>
                                <div className={`overflow-hidden text-sm ${expanded[2] ? 'block' : 'h-12'}`}>
                                    <p className='mb-2'>Asistencia Personalizada Disney Destinations Concierge.</p>
                                    <p className='mt-1 mb-1'>Plataforma exclusiva y autorizada por Disney para servicios concierge. A través de WhatsApp, un Magic Planner brindará asesoría personalizada en español antes, durante y después del viaje en Disney.</p>
                                    <p className='mt-1 mb-1'>Nuestro equipo se comunica contigo y tus familiares mediante WhatsApp o reuniones en Zoom para entender tus necesidades y preferencias. El Magic Planner te brinda asesoría completa para tu experiencia Disney en todos los continentes, incluyendo:</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Cotización de pasajes y hoteles.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Compra de entradas para parques y paquetes turísticos.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Reservas en cruceros y actividades dentro de los parques.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Recomendaciones sobre dónde comer y comprar, cubriendo todas tus necesidades en el destino de manera directa.</p>                                   
                                </div>
                                <button className="flex text-orangeCPN-700 items-start" onClick={()=>toggleExpand(2)}>
                                    {expanded[2] ? 'Ver menos..▲' : 'Ver más..▼'}
                                </button>
                            </div>                        
                        </div>
                        <div className="flex items-start w-1/2 p-4">
                            <img className="h-20" src="./img/mascota.svg"  />
                            <div className='flex flex-col'>
                                <h2 className="text-xl font-bold mb-2">Hospedaje mascota por viaje</h2>
                                <div className={`overflow-hidden text-sm ${expanded[3] ? 'block' : 'h-11'}`}>                                   
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Asistencia veterinaria telefónica en todo el Ecuador, sin restricciones..</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Servicio de hotel para mascotas durante el viaje del cliente, hasta 4 días una ves por año. Válido en Guayaquil, Quito y Cuenca.</p>                                    
                                </div>
                                <button className="flex text-orangeCPN-700 items-start" onClick={()=>toggleExpand(3)}>
                                    {expanded[3] ? 'Ver menos..▲' : 'Ver más..▼'}
                                </button>
                            </div>                        
                        </div>
                        <div className="flex items-start w-1/2 p-4">
                            <img className="h-20" src="./img/viajes.svg"  />
                            <div className='flex flex-col'>
                                <h2 className="text-xl font-bold mb-2">Asistencia viajes nacionales:</h2>
                                <div className={`overflow-hidden text-sm ${expanded[4] ? 'block' : 'h-10'}`}>                                   
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Asistencia vial, legal y médica.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Asesoría legal por pérdida de documentos, sin límites.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Asesoría legal por localización y envío de equipaje, sin límites..</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Mediphone: Consulta médica por teléfono.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Coordinación de traslado médico terrestre.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Transporte de un familiar durante la hospitalización del cliente.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Servicio de hotel por convalecencia hasta $50 por noche.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Servicio de estancia para un familiar durante la hospitalización del cliente hasta $50 por noche, máximo 5 noches.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Localización y envío de medicamentos.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Repatriación del cliente en caso de fallecimiento hasta $1,000.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Servicios odontológicos en caso de emergencia durante el viaje hasta $200 por evento.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Traslado de acompañantes en caso de fallecimiento del cliente.</p>
                                </div>
                                <button className="flex text-orangeCPN-700 items-start" onClick={()=>toggleExpand(4)}>
                                    {expanded[4] ? 'Ver menos..▲' : 'Ver más..▼'}
                                </button>
                            </div>                              
                        </div>
                        <div className="flex items-start w-1/2 p-4">
                            <img className="h-20" src="./img/infotour.svg"  />
                            <div className='flex flex-col'>
                                <h2 className="text-xl font-bold mb-2">InfoTour</h2>
                                <div className={`overflow-hidden text-sm ${expanded[5] ? 'block' : 'h-10'}`}>                                   
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Guía turística para actividades dentro del país.</p>
                                    <p><label className='text-orangeCPN-700 font-bold'>✔</label> Comunicación vía WhatsApp con los municipios y operación turística de cada ciudad para recomendaciones de actividades en el destino seleccionado..</p>                                    
                                </div>
                                <button className="flex text-orangeCPN-700 items-start" onClick={()=>toggleExpand(5)}>
                                    {expanded[5] ? 'Ver menos..▲' : 'Ver más..▼'}
                                </button>
                            </div>                              
                        </div>                        
                    </div>
                    <div className='flex justify-center mt-6'>
                        <a className='text-2xl mb-16 border-2 text-white border-orangeCPN-600 bg-orangeCPN-600 hover:bg-blackCPN-900 hover:border-white w-72 flex items-center justify-center rounded-full py-3 cursor-pointer'>SUSCRÍBETE AHORA</a>
                    </div>
                </div>                
            </div>
        </>
    );
};

export default Beneficios;


