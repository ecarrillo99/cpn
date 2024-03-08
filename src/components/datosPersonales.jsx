import React, { useEffect, useState } from 'react';
import { getRemoteCities } from "../controllers/lugares/lugaresController";
import { validatePromocionalCode } from '../controllers/suscripcion/suscripcionCodigoPromocional';
import { SyncLoader } from 'react-spinners';


const DatosPersonales = ({ handleClickSiguiente, setTar, tar, setDif, dif, setDatosPer, datosPer }) => {
    const [selectedTipo, setSelectedTipo] = useState(0);
    const [selectedDiferido, setSelectedDiferido] = useState(0);
    const [selectedTarjeta, setSelectedTarjeta] = useState("VISA");
    const [selectedProvincia, setSelectedProvincia] = useState(0);
    const [selectedCiudad, setSelectedCiudad] = useState(0);
    const [tarjeta, setTarjeta] = useState("VISA");
    const [ciudad, setCiudad] = useState();
    const [provincesData, setProvincesData] = useState();
    const [citiesData, setCitiesData] = useState();
    const [nombres, setNombres] = useState(datosPer && datosPer["nombres"]);
    const [nombresError, setNombresError] = useState();
    const [cedula, setCedula] = useState(datosPer && datosPer["cedula"]);
    const [cedulaError, setCedulaError] = useState();
    const [telefono, setTelefono] = useState(datosPer && datosPer["telefono"]);
    const [telefonoError, setTelefonoError] = useState();
    const [correo, setCorreo] = useState(datosPer && datosPer["correo"]);
    const [correoError, setCorreoError] = useState()
    const [isLoading, setIsLoading] = useState();
    const [isValido, setcodigoValido] = useState();
    const [codigoPromocional, setCodigoPromocional] = useState()
    const [idCodigoPromocional, setIdCodigoPromocional] = useState()

    const opcionesCredito = [
        { tipo: 0, meses: 0, texto: "Corriente" },
        { tipo: 0, meses: 3, texto: "3 meses sin intereses" },
        { tipo: 0, meses: 6, texto: "6 meses sin intereses" },
        { tipo: 0, meses: 12, texto: "12 meses sin intereses" },
        { tipo: 1, meses: 24, texto: "24 meses con intereses" },
    ]
    const opcionesDebito = [
        { tipo: 0, meses: 0, texto: "Corriente" }
    ]
    const [diferido, setDiferido] = useState(opcionesCredito[0]);
    const [listDiferidos, setListDiferidos] = useState(opcionesCredito);

    useEffect(() => {
        async function fetchData() {
            try {
                getRemoteCities()
                    .then((result) => {
                        if (result) {
                            setProvincesData(result.slice().sort((a, b) => a.Titulo.localeCompare(b.Titulo)))
                            setCitiesData(result.slice().sort((a, b) => a.Titulo.localeCompare(b.Titulo))[0].Valor)
                            setCiudad(result.slice().sort((a, b) => a.Titulo.localeCompare(b.Titulo))[0].Valor[0])
                        }
                    })
                    .catch((error) => { console.log(error) })
            } catch (e) { }
        }
        fetchData();
    }, []);


    const handleChangeTipo = (event) => {
        setSelectedTipo(event.target.value);
        if (event.target.value == "credito") {
            setListDiferidos(opcionesCredito)
        } else {
            setListDiferidos(opcionesDebito)
        }
    }

    const handleChangeDiferido = (event) => {
        setSelectedDiferido(event.target.value);
        setDiferido(opcionesCredito[event.target.value]);
    }

    const handleChangeTarjeta = (event) => {
        setSelectedTarjeta(event.target.value);
        setTarjeta(event.target.value);
    }

    const handleChangeProvincia = (event) => {
        setSelectedProvincia(event.target.value);
        setCitiesData(provincesData[event.target.value].Valor)
    }

    const handleChangeCiudad = (event) => {
        setSelectedCiudad(event.target.value);
    }

    const handleClickButton = () => {
        nombres == null && setNombresError(true);
        cedula == null && setCedulaError(true);
        telefono == null && setTelefonoError(true);
        correo == null && setCorreoError(true);

        if (nombres != null && cedula != null && telefono != null && correo != null) {
            setTar(tarjeta);
            setDif(diferido);
            const datos = {
                nombres: nombres,
                cedula: cedula,
                telefono: telefono,
                correo: correo,
                ciudad: ciudad,
                promo: idCodigoPromocional,
            }
            setDatosPer(datos);
            setTar(tarjeta);
            setDif(diferido);
            handleClickSiguiente(1)
        }
    }

    const handleChangeNombre = (event) => {
        setNombres(event.target.value);
    }

    const handleChangeCedula = (event) => {
        setCedula(event.target.value);
    }

    const handleChangeTelefono = (event) => {
        setTelefono(event.target.value);
    }

    const handleChangeCorreo = (event) => {
        setCorreo(event.target.value);
    }
    const handleChangeCodigo = (event) => {
        setCodigoPromocional(event.target.value);
    }

    const handleClickValidar = () => {
        setIdCodigoPromocional();
        setIsLoading(true)
        if (!isLoading) {
            setcodigoValido(false)
            if (!codigoPromocional) {
                setcodigoValido(true)
                setIsLoading(false)
            } else {
                validatePromocionalCode(codigoPromocional).then((result) => {
                    if (!result) {
                        setcodigoValido(true)
                        setIsLoading(false)
                    } else {
                        setIdCodigoPromocional(result["data"]["id_codigo_promocional"])
                        setIsLoading(false)
                        setcodigoValido(false)
                    }
                })
            }
        }
    }

    return (
        <div className='flex flex-col justify-center items-center mb-6 gap-y-3 h-[500px]'>
            <div className='flex items-center w-2/4 justify-center gap-x-2'>
                <div className="w-3/4">
                    <div className={`flex flex-row items-center border border-blackCPN-600 rounded-md w-full h-10`}>
                        <svg className='pl-3 w-10 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                            <defs>
                            </defs>
                            <path fill='#8b8b8b' d="M5.8,96.61A3.31,3.31,0,0,1,2.5,93.3V74.87a3.3,3.3,0,0,1,3.3-3.3,11.75,11.75,0,1,0,0-23.5,3.31,3.31,0,0,1-3.3-2.91V26.7a3.3,3.3,0,0,1,3.3-3.3H114.2a3.29,3.29,0,0,1,3.3,3v18.4a3.3,3.3,0,0,1-3.3,3.3,11.75,11.75,0,0,0,0,23.5,3.32,3.32,0,0,1,3.3,3.24V93.3a3.31,3.31,0,0,1-3.3,3.31Zm105.09-6.37V78.13a18.36,18.36,0,0,1,0-36V30H9.11V42.11A18.47,18.47,0,0,1,23.58,56.78,18.38,18.38,0,0,1,9.11,78.13V90.24ZM70.42,80.29a9.45,9.45,0,0,1-6.65-2.74,9.37,9.37,0,0,1,.06-13.18A9.34,9.34,0,0,1,77,64.4a9.3,9.3,0,0,1-6.62,15.89Zm0-12a2.69,2.69,0,0,0-1.9.82l-.12.12a2.59,2.59,0,0,0-.71,1.86,2.55,2.55,0,0,0,.82,1.81,2.68,2.68,0,0,0,1.91.81,2.63,2.63,0,0,0,1.9-.8.34.34,0,0,1,.19-.09,2.62,2.62,0,0,0,.62-1.8,2.53,2.53,0,0,0-.8-1.9,2.59,2.59,0,0,0-1.88-.83V68ZM42.78,79.74a3.56,3.56,0,0,1-2.37-.91,3.32,3.32,0,0,1-1-2.35,3.26,3.26,0,0,1,1-2.34l33.33-32.6a3.32,3.32,0,1,1,4.68,4.7.3.3,0,0,1-.2.08h-.06a.26.26,0,0,1-.16-.09L45.09,78.82a3.37,3.37,0,0,1-2.31.92Zm6.74-19.93a9.36,9.36,0,1,1,9.39-9.38,9.21,9.21,0,0,1-2.74,6.23,9.44,9.44,0,0,1-6.29,2.72v.14a.3.3,0,0,1-.3.29Zm.06-12.58a2.83,2.83,0,0,0-1.91.76,2.65,2.65,0,0,0-.8,1.95,2.56,2.56,0,0,0,.8,1.9l.13.12a2.72,2.72,0,0,0,4.5-2,2.68,2.68,0,0,0-2.72-2.72Z" />
                        </svg>
                        <input type="text" value={codigoPromocional} placeholder="Código Promocional (opcional)" className="w-full h-full bg-transparent outline-none px-4" onChange={handleChangeCodigo} />
                        {
                            idCodigoPromocional != null && <label className="text-green-600 pr-2 text-sm">Válido</label>
                        }
                        {
                            isValido && <label className="text-red-600 pr-2 w-24 text-sm">No válido</label>
                        }
                    </div>
                </div>
                <button className='w-1/4 bg-orangeCPN-600 h-10 rounded-full text-white' onClick={() => { !isLoading && handleClickValidar() }}>{!isLoading ? "Verificar" : <SyncLoader color='white' size={6} ></SyncLoader>}</button>
            </div>
            <div className="flex items-center w-2/4 justify-center">
                <div className={`flex flex-row items-center border ${nombresError ? "border-red-500" : "border-blackCPN-600"} rounded-md w-full h-10`}>
                    <svg className='pl-3 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0">
                        </g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                        </g>
                        <g id="SVGRepo_iconCarrier">
                            <circle strokeWidth={1.5} cx="12" cy="8" r="3.5" stroke="#8b8b8b" stroke-linecap="round"></circle>
                            <path strokeWidth={1.5} d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z" stroke="#8b8b8b" stroke-linecap="round">
                            </path>
                        </g>
                    </svg>
                    <input type="text" value={nombres} placeholder="Nombre y apellido" className="w-full h-full bg-transparent outline-none px-4" onChange={handleChangeNombre} />
                </div>
            </div>
            <div className="flex items-center w-2/4 justify-center">
                <div className={`flex flex-row items-center border ${cedulaError ? "border-red-500" : "border-blackCPN-600"} rounded-md w-full h-10`}>
                    <svg className='pl-3 w-10' viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0">
                        </g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                        </g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7V17C3.5 18.1046 4.39543 19 5.5 19H19.5C20.6046 19 21.5 18.1046 21.5 17V7C21.5 5.89543 20.6046 5 19.5 5H5.5C4.39543 5 3.5 5.89543 3.5 7Z" stroke="#8b8b8b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M15.5 10H18.5" stroke="#8b8b8b" stroke-width="1.5" stroke-linecap="round">
                            </path>
                            <path d="M15.5 13H18.5" stroke="#8b8b8b" stroke-width="1.5" stroke-linecap="round">
                            </path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 10C11.5 11.1046 10.6046 12 9.5 12C8.39543 12 7.5 11.1046 7.5 10C7.5 8.89543 8.39543 8 9.5 8C10.0304 8 10.5391 8.21071 10.9142 8.58579C11.2893 8.96086 11.5 9.46957 11.5 10Z" stroke="#8b8b8b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            </path>
                            <path d="M5.5 16C8.283 12.863 11.552 13.849 13.5 16" stroke="#8b8b8b" stroke-width="1.5" stroke-linecap="round">
                            </path>
                        </g>
                    </svg>
                    <input type="text" value={cedula} placeholder="Cédula" className="w-full h-full bg-transparent outline-none px-4" onChange={handleChangeCedula} />
                </div>
            </div>
            <div className="flex items-center w-2/4 justify-center">
                <div className={`flex flex-row items-center border ${telefonoError ? "border-red-500" : "border-blackCPN-600"}  rounded-md w-full h-10`}>
                    <svg className='w-10 pl-3' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" stroke="#8b8b8b" stroke-width="1.5" stroke-linecap="round"></path>
                        </g>
                    </svg>
                    <input type="text" value={telefono} placeholder="Teléfono" className="w-full h-full bg-transparent outline-none px-4" onChange={handleChangeTelefono} />
                </div>
            </div>
            <div className="flex items-center w-2/4 justify-center">
                <div className={`flex flex-row items-center border ${correoError ? "border-red-500" : "border-blackCPN-600"} rounded-md w-full h-10`}>
                    <svg className='pl-3 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#8b8b8b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#8b8b8b" stroke-width="1.5" stroke-linecap="round"></rect>
                        </g>
                    </svg>
                    <input type="text" value={correo} placeholder="Correo" className="w-full h-full bg-transparent outline-none px-4" onChange={handleChangeCorreo} />
                </div>
            </div>
            <div className="flex items-center w-2/4 justify-center gap-x-2">
                <div className="flex flex-row items-center border border-blackCPN-600 rounded-md w-1/2 h-10">
                    <svg className='pl-3 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 6.09371 8.00993 3 12 3C15.9901 3 19 6.09371 19 9.5C19 11.6449 17.6877 14.0406 15.9606 16.2611C14.5957 18.016 13.0773 19.5329 12 20.5944C10.9227 19.5329 9.40427 18.016 8.03935 16.2611C6.31229 14.0406 5 11.6449 5 9.5ZM12 1C6.99007 1 3 4.90629 3 9.5C3 12.3551 4.68771 15.2094 6.46065 17.4889C7.99487 19.4615 9.7194 21.1574 10.7973 22.2173C10.9831 22.4001 11.1498 22.564 11.2929 22.7071C11.4804 22.8946 11.7348 23 12 23C12.2652 23 12.5196 22.8946 12.7071 22.7071C12.8502 22.564 13.0169 22.4001 13.2027 22.2174L13.2028 22.2173C14.2806 21.1573 16.0051 19.4615 17.5394 17.4889C19.3123 15.2094 21 12.3551 21 9.5C21 4.90629 17.0099 1 12 1ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="#8b8b8b"></path>
                        </g>
                    </svg>
                    <select className='w-full h-full bg-transparent outline-none px-4' value={selectedProvincia} onChange={handleChangeProvincia}>
                        {
                            provincesData &&
                            provincesData.map((item, index) => (
                                <option value={index}>{item.Titulo}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-row items-center border border-blackCPN-600 rounded-md w-1/2 h-10">
                    <svg className='pl-3 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 6.09371 8.00993 3 12 3C15.9901 3 19 6.09371 19 9.5C19 11.6449 17.6877 14.0406 15.9606 16.2611C14.5957 18.016 13.0773 19.5329 12 20.5944C10.9227 19.5329 9.40427 18.016 8.03935 16.2611C6.31229 14.0406 5 11.6449 5 9.5ZM12 1C6.99007 1 3 4.90629 3 9.5C3 12.3551 4.68771 15.2094 6.46065 17.4889C7.99487 19.4615 9.7194 21.1574 10.7973 22.2173C10.9831 22.4001 11.1498 22.564 11.2929 22.7071C11.4804 22.8946 11.7348 23 12 23C12.2652 23 12.5196 22.8946 12.7071 22.7071C12.8502 22.564 13.0169 22.4001 13.2027 22.2174L13.2028 22.2173C14.2806 21.1573 16.0051 19.4615 17.5394 17.4889C19.3123 15.2094 21 12.3551 21 9.5C21 4.90629 17.0099 1 12 1ZM12 12.5C13.3807 12.5 14.5 11.3807 14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5Z" fill="#8b8b8b"></path>
                        </g>
                    </svg>
                    <select className='w-full h-full bg-transparent outline-none px-4' value={selectedCiudad} onChange={handleChangeCiudad}>
                        {
                            citiesData &&
                            citiesData.map((item, index) => (
                                <option value={index}>{item.Titulo}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className='w-2/4 flex gap-x-2'>
                <div className="flex flex-row items-center border border-blackCPN-600 rounded-md w-1/3 h-10">
                    <svg className='pl-3 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M3 9H21M7 15H9M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#8b8b8b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    <select className='w-full h-full bg-transparent outline-none px-4' value={selectedTipo} onChange={handleChangeTipo}>
                        <option value="credito">Crédito</option>
                        <option value="debito">Débito</option>
                    </select>
                </div>
                <div className="flex flex-row items-center border border-blackCPN-600 rounded-md w-1/3 h-10">
                    {
                        selectedTarjeta=="VISA"
                        ?<svg className='pl-3 h-10' viewBox="0 -11 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect x="0.5" y="0.5" width="69" height="47" rx="5.5" fill="white" stroke="#D9D9D9"></rect>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2505 32.5165H17.0099L13.8299 20.3847C13.679 19.8267 13.3585 19.3333 12.8871 19.1008C11.7106 18.5165 10.4142 18.0514 9 17.8169V17.3498H15.8313C16.7742 17.3498 17.4813 18.0514 17.5991 18.8663L19.2491 27.6173L23.4877 17.3498H27.6104L21.2505 32.5165ZM29.9675 32.5165H25.9626L29.2604 17.3498H33.2653L29.9675 32.5165ZM38.4467 21.5514C38.5646 20.7346 39.2717 20.2675 40.0967 20.2675C41.3931 20.1502 42.8052 20.3848 43.9838 20.9671L44.6909 17.7016C43.5123 17.2345 42.216 17 41.0395 17C37.1524 17 34.3239 19.1008 34.3239 22.0165C34.3239 24.2346 36.3274 25.3992 37.7417 26.1008C39.2717 26.8004 39.861 27.2675 39.7431 27.9671C39.7431 29.0165 38.5646 29.4836 37.3881 29.4836C35.9739 29.4836 34.5596 29.1338 33.2653 28.5494L32.5582 31.8169C33.9724 32.3992 35.5025 32.6338 36.9167 32.6338C41.2752 32.749 43.9838 30.6502 43.9838 27.5C43.9838 23.5329 38.4467 23.3004 38.4467 21.5514ZM58 32.5165L54.82 17.3498H51.4044C50.6972 17.3498 49.9901 17.8169 49.7544 18.5165L43.8659 32.5165H47.9887L48.8116 30.3004H53.8772L54.3486 32.5165H58ZM51.9936 21.4342L53.1701 27.1502H49.8723L51.9936 21.4342Z" fill="#172B85"></path>
                            </g>
                        </svg>
                        :<svg className='pl-3 h-10'  viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" fill="white" stroke="#F3F3F3"></rect>
                                <path d="M34.3102 28.9765H23.9591V10.5122H34.3102V28.9765Z" fill="#FF5F00"></path>
                                <path d="M24.6223 19.7429C24.6223 15.9973 26.3891 12.6608 29.1406 10.5107C27.1285 8.93843 24.5892 7.99998 21.8294 7.99998C15.2961 7.99998 10 13.2574 10 19.7429C10 26.2283 15.2961 31.4857 21.8294 31.4857C24.5892 31.4857 27.1285 30.5473 29.1406 28.975C26.3891 26.8249 24.6223 23.4884 24.6223 19.7429" fill="#EB001B"></path>
                                <path d="M48.2706 19.7429C48.2706 26.2283 42.9745 31.4857 36.4412 31.4857C33.6814 31.4857 31.1421 30.5473 29.1293 28.975C31.8815 26.8249 33.6483 23.4884 33.6483 19.7429C33.6483 15.9973 31.8815 12.6608 29.1293 10.5107C31.1421 8.93843 33.6814 7.99998 36.4412 7.99998C42.9745 7.99998 48.2706 13.2574 48.2706 19.7429" fill="#F79E1B"></path>
                            </g>
                        </svg>
                    }
                    <select className='w-full h-full bg-transparent outline-none px-4' value={selectedTarjeta} onChange={handleChangeTarjeta}>
                        <option value="VISA">Visa</option>
                        <option value="MASTER">Mastercard</option>
                    </select>
                </div>

                <div className="flex flex-row items-center border border-blackCPN-600 rounded-md w-1/3 h-10">
                    <svg className='pl-3 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V11M4 19V11H20M4 19V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V11M15 3V7M9 3V7" stroke="#8b8b8b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    <select className='w-full h-full bg-transparent outline-none px-4' value={selectedDiferido} onChange={handleChangeDiferido}>
                        {
                            listDiferidos.map((item, index) => (
                                <option key={index} value={index}>{item["texto"]}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className='flex justify-center mb-6'>
                <button className=' w-32 py-2 bg-orangeCPN-600 text-white rounded-full text-lg' onClick={() => handleClickButton()}>Siguiente</button>
            </div>
        </div>
    );
};

export default DatosPersonales;