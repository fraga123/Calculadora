// esta clase se encarga de controlar la calculadora e interactuar con los botones y mostrar al display
class Display{
    // crear controladores
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual= displayValorActual;
        this.displayValorAnterior=displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion= undefined;
        this.valorActual = '';
        this.valorAnterior='';
        //creando objetosigo
        this.signos= {
            sumar : '+',
            dividir : '/',
            restar : '-',
            multiplicar : '*',
        }
    }
// Creando Metodos
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual='';
        this.valorAnterior='';
        this.tipoOperacion= undefined;
        this.imprimirValores();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior; 
        this.valorActual='';
        this.imprimirValores();
    }
    
    //metodo para agregar numeros
    agregarNumero(numero){
        // validar para un solo decimal
        if(numero =='.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent =this.valorActual;
        this.displayValorAnterior.textContent= `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual=this.calculadora[this.tipoOperacion](valorActual,valorAnterior);
    }
}
