

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
let nombres:string[] = ['mario','Juan','Pablo', 'Chuy']

console.log(nombres);


let datos : (boolean | number | string)[]=['Mario',22, true,'Gomez'];


console.log(datos);

datos.push(200);
datos.push('Maria');
datos.push(false);

console.log(datos);

//Otra forma de crear arreglos
let arreglo : Array<number>=[1,2,3,4,5,6];

const nombre1 : string='datos1';

interface Alumno{
    matricula: string,
    nombre: string,
    edad: number,
    email: string,
    materias?: string [];
}

const alumno : Alumno={
    matricula:'dario',
    nombre:'gomez',
    edad:22,
    email:'dario@gmail.com',
    materias:['Ingles','Español','Frances']
}

alumno.nombre= 'Juanito';

console.log(alumno);