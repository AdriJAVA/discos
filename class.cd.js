class CD{
    constructor(id,titulo,interprete,formato,ejemplares,precio){
        this.id = id;
        this.titulo = titulo;
        this.interprete = interprete;
        this.formato = formato;
        this.ejemplares = ejemplares;
        this.precio = precio;
    }
    
    getId(){
        return this.id;
    }
    
    getEjemplares(){
        return this.ejemplares;
    }
    
    sumarEjemplar(){
        this.ejemplares = this.ejemplares +1;    
    }
    
    restarEjemplar(){
        this.ejemplares = this.ejemplares - 1;
    }
    
    mostrarInformacion(){
        return `Titulo: ${this.titulo} Interprete: ${this.interprete}  Formato: ${this.formato} Precio: ${this.precio} ` ;
    }
    
    
}