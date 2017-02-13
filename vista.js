
function addOption(id,titulo,precio){
    var lista = document.getElementById('lista');
    var opcion = document.createElement('option');
    opcion.id = id;
    opcion.text = `Titulo: ${titulo} -> Precio: ${precio} ` ;
    lista.options.add(opcion,0);
}