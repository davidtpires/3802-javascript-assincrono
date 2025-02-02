
//************************************** */ Cor de gatos
// let listaDeGatos = [
//     {nome: 'Garfield', cor: 'laranja'},
//     { nome: 'Whiskers', cor: 'preto' },
//     { nome: 'Mittens', cor: 'laranja' },
//     { nome: 'Snowball', cor: 'branco' }
// ]

// function filtrarGatosPorCor(listaDeGatos, corDesejada) {
//     return listaDeGatos.filter(gato => gato.cor === corDesejada);
// }

// let gatosLaranja = filtrarGatosPorCor(listaDeGatos, 'preto');
// console.log(gatosLaranja);

//************************************** Leitor de arquivo
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name})
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo)

    })
}

const conteudoDoArquivo = await lerConteudoDoArquivo("teste.json");