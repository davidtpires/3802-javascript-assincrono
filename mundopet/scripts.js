const uploadBtn = document.getElementById("upload-btn")
const inputUpload = document.getElementById("image-upload")

//transportando o click para do botão para o input oculto
uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader(); // Criamos o leitor

        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name}); // Definimos o que fazer após a leitura
        };

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`); // Definimos o que fazer se houver erro
        };

        leitor.readAsDataURL(arquivo)
    });
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
        try {
           const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
           imagemPrincipal.src = conteudoDoArquivo.url;
           nomeDaImagem.textContent = conteudoDoArquivo.nome;
           console.log(conteudoDoArquivo)
        } catch (erro) {
            console.log("Erro na leitura do arquivo");
        }
    }
})