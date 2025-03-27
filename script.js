function carregarFotoDeCachorro() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            document.getElementById("minhaFotoDeCachorro").src = data.message; // Define a imagem no elemento <img>
        })
        .catch(error => console.error("Erro ao carregar imagem:", error));
}

function ativarTrocaDeCachorro() {
    carregarFotoDeCachorro(); // Carrega uma imagem imediatamente
    setInterval(carregarFotoDeCachorro, 3000); // Troca a cada 3 segundos
}

// Opcional: Chamar a função automaticamente ao carregar a página
window.onload = ativarTrocaDeCachorro;
