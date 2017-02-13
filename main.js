var app = (function(){
    
    var lista = [];
    var listaDOM = document.getElementsByTagName('option');
    
    
     var encontrarDisco = function(idElegido){
        var elegido = document.getElementById('lista').selectedIndex;
        var idElegido = listaDOM[elegido].id;
        for(var i = 0; i < lista.length; i++){
            if(lista[i].getId() == idElegido){
               return lista[i];
            }
        }
    }
     
    //Funciones eventos
    var anadirCD = function(){
        var id = prompt("Introduce el id");
        var interprete = prompt("Introduce el interprete");
        var titulo = prompt("Introduce el titulo");
        var formato = prompt("Introduce el formato");
        var ejemplares = prompt("Introduce los ejemplares");
        var precio = prompt("Introduce el precio de cada ");
        
        lista.push(new CD(id,titulo,interprete,formato,ejemplares,precio));
        addOption(id,titulo,precio);
        console.table(lista);
    }
    
    
    var comprarCD = function(){   
        
        var discoElegido = encontrarDisco();
        
        if(discoElegido.getEjemplares() > 0){
            discoElegido.restarEjemplar();
        } 
        
        console.table(lista);
    }
    
    var devolverCD = function(){   
        
        var discoElegido = encontrarDisco();
        
        discoElegido.sumarEjemplar();
        
        console.table(lista);
    }
    
    var informacionCD = function(){
        var discoElegido = encontrarDisco();
        
        alert(discoElegido.mostrarInformacion());
    }
    
    //Eventos
    document.getElementById('anadir').addEventListener('click',anadirCD);
    document.getElementById('comprar').addEventListener('click',comprarCD);
    document.getElementById('devolver').addEventListener('click',devolverCD);   document.getElementById('informacion').addEventListener('click',informacionCD);

})();