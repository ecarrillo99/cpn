import ContactoService from "../../services/contacto/ContactoService";

export const sendContactanos = async function ( nombres, email, mensaje){
    try{
        const contactoService= new ContactoService();
        const params={
            "nombres":nombres,
            "email":email,
            "mensaje":mensaje
        }
        const res = await contactoService.formularioContactanos(params);
        if (res.estado) {
            return true;
        }
        return false;
    }catch(e){

    }
}