interface direccion{
    calle: string ,
    pais: string,
    estado: string,
}
interface AlumnoUTL{
    nombre: string,
    edad:number,
    direccion: direccion,
    mostrarDireccion:()=>void;
}

const alumnoChido: AlumnoUTL = {
    nombre: 'Mario',
    edad:23,
    direccion:{
        calle:'Veracruz',
        pais:'MX',
        estado:'GTO'
    },
    mostrarDireccion(){
        return this.direccion.calle+', '+ this.direccion.estado+', '+ this.direccion.pais;
    }
}

const direccion = alumnoChido.mostrarDireccion();
console.log(direccion);