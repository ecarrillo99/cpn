import Config from "./config";

export function generarEsquemaSus(transaccion){
    var esquema= {
        id_empresa:1,
        tiempo:5,
        id_canal:1,
        aceptocondiciones:1,
        notificar:true,
        verificar:false,
        id_servicio:1,
        metodo:"visitaecuador",
        personal:{
            ci:transaccion["customer"]["identificationDocId"],
            nombres:transaccion["customer"]["givenName"],
            celular:transaccion["customer"]["phone"],
            email:transaccion["customer"]["email"],
            pais: Config.IDPAIS,
            ciudad: 297,
        },
        producto:{
            id_codigo_promocional: (transaccion["customParameters"]["codigoPromocional"]!=null&&transaccion["customParameters"]["codigoPromocional"]!="undefinded")?transaccion["customParameters"]["codigoPromocional"]:75057,
            beneficio_cantidad_tiempo:100,
            beneficio_tipo_tiempo:1,
            id_usuario_vendedor:89994, //IDuSUARIO DE CPN
            id_suscripcion_vendedor:75429, //ID SUSCRIPCION CPN
            cantidad:1,
            fecha_final:"",
            precio: 78.00,
            id_producto:16904,
            id_lista_precio_producto:1695,
            id_prod_suscripcion:393,
            id_tipo_canal: 14,
            id_suscripcion_renovacion:11,
            pago:[
                {
                    tipo_pago:2,
                    id_prepago:0,
                    tipo_pago_boton:6,
                    intereses: transaccion["customParameters"]["SHOPPER_interes"],
                    diferido:transaccion["recurring"]["numberOfInstallments"],
                    envio:0,
                    subtotal:transaccion["customParameters"]["SHOPPER_VAL_BASEIMP"],
                    iva:transaccion["customParameters"]["SHOPPER_VAL_IVA"],
                    total: transaccion["amount"],
                    cuenta:{
                        nombreTitular:  transaccion["card"]["holder"],
                        id_diferido:transaccion["recurringType"],
                        datapago: transaccion["card"]["bin"]+"XXXXXX"+transaccion["card"]["last4Digits"],
                    },
                    transaccion: transaccion,
                }
            ]
        },
    }
    console.log(esquema)
    return esquema;
}