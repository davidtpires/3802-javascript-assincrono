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

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

//Adicionar li na ul de Tags de acordo com input e depois limpa-lo
inputTags.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            const tagNova = document.createElement("li");
            tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
            listaTags.appendChild(tagNova);
            inputTags.value = "";
        }

    }
})

//remover tag li da ul
listaTags.addEventListener("click", (evento) => {
    if(evento.target.classList.contains("remove-tag")){
        const tagParaRemover = evento.target.parentElement;
        listaTags.removeChild(tagParaRemover);
    }
})

const tiposGatos = ["Gato Laranja", "Gato Adulto", "Gato Jovem", "Gato Preto", "Gato Branco"]

async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000)
    })
    
}
