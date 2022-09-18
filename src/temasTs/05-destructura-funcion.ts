export interface Producto{
    desc:string;
    precio:number;
}

const telefono: Producto={
    desc:'Noki',
    precio:1234
}
const ipad: Producto={
    desc:'ipad 3',
    precio:156
}
function calcularIva(productos:Producto[]):number{
    let total =0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}
const articulos1 = [telefono,ipad];
const IVATotal =calcularIva(articulos1);
console.log(`IVA: ${IVATotal}`);

export function calcularIva2(productos: Producto[]):[number,number]{
    let total = 0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return[total,total*0.16];
}

const articulos2 = [telefono,ipad];
const [total,iva] = calcularIva2(articulos2);
console.log(`Total: ${total} \n IVA: ${iva}`);