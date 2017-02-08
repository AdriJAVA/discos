var app = (function(){
    
    var lista = [];
    
    var anadirCD = function(){
        var id = prompt("Introduce el id");
        var interprete = prompt("Introduce el interprete");
        var titulo = prompt("Introduce el titulo");
        var formato = prompt("Introduce el formato");
        var ejemplares = prompt("Introduce los ejemplares");
        var precio = prompt("Introduce el precio de cada ");
        
        lista.push(new CD(id,titulo,interprete,formato,ejemplares,precio));
        addOption(titulo,precio);
        console.table(lista);
    }
    
    var comprarCD = function(){
        
    }
    
    return{
        anadirCD: anadirCD
    }
    
})();