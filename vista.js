document.getElementById('anadir').addEventListener('click',app.anadirCD);

function addOption(id,titulo,precio){
    var lista = document.getElementById('lista');
    var opcion = document.createElement('option');
    option.id = id;
    opcion.text = titulo + " " + precio;
    lista.options.add(opcion,0);
}