import { calcularIva2,Producto } from "./05-destructura-funcion";
const tiendaProductos:Producto[]=[
    {
        desc:'Telefono1',
        precio: 2356
    },
    {
        desc:'Tablet2',
        precio: 2356
    },
    {
        desc:'Telefono2',
        precio: 2356
    },
    {
        desc:'Tablet2',
        precio: 2356
    },
];

const [total1,iva1] = calcularIva2(tiendaProductos);
console.log(`Total: ${total1} \n IVA: ${iva1}`);