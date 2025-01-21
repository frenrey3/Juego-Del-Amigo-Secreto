var amigos = [];

function agregarAmigo() {
    var nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        document.getElementById("amigo").value = "";
    }
}

function actualizarListaAmigos() {
    var listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(function(amigo) {
        var li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    var amigosSorteados = amigos.slice();
    for (var i = amigosSorteados.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = amigosSorteados[i];
        amigosSorteados[i] = amigosSorteados[j];
        amigosSorteados[j] = temp;
    }
    amigosSorteados.forEach(function(amigo, index) {
        var li = document.createElement("li");
        li.textContent = "Amigo " + (index + 1) + ": " + amigo;
        resultado.appendChild(li);
    });
}
