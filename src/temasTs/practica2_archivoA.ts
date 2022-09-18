export class suma{
    private base: number;
    private numero: number;

    setBase(a:number){
        this.base= a;
    }
    setNumero(b:number){
        this.numero= b;
    }

    multiplicar(){
        let total:number;

        total=0;
        for(let i = 0 ; i < this.base ; i++){
            total = total + this.numero;
        }

        console.log('El resultado es '+total);
    }
}

