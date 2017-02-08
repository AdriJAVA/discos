class CD{
    constructor(id,titulo,interprete,formato,ejemplares,precio){
        this.id = id;
        this.titulo = titulo;
        this.formato = formato;
        this.ejemplares = ejemplares;
        this.precio = precio;
    }
    
    
    sumarEjemplar(){
        this.ejemplares = this.ejemplares - 1;    
    }
    
    restarEjemplar(){
        this.ejemplares = this.ejemplares + 1;
    }
    
    mostrarInformacion(){
        return `Titulo: ${this.titulo} Interprete: ${this.interprete} 
                Formato: ${this.formato} Precio: ${this.precio} ` ;
    }
    
    
}