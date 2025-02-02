const upload = document.querySelector('#upload');
const conteudoDoArquivo = document.querySelector('#conteudoArquivo');


upload.addEventListener('change', async (event) => {
    const arquivo = event.target.files[0];
    if (arquivo) {
        try {
            const conteudo = await lerConteudoDoArquivo(arquivo);
            conteudoDoArquivo.textContent = conteudo.texto;
        } catch (erro) {
            console.error('Erro na leitura do arquivo', erro);
        }
    }
})

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => resolve({ texto: leitor.result});
        leitor.onerror = () => reject(leitor.error);
        leitor.readAsText(arquivo);
    });
}
