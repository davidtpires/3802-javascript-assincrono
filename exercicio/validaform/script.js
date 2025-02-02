document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o input de tags e a lista de tags
    const inputTags = document.getElementById('input-tags');
    const listaTags = document.getElementById('lista-tags');

    // Adiciona um ouvinte de evento para capturar a tecla Enter no input
    inputTags.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') { // Verifica se a tecla pressionada foi Enter
            event.preventDefault(); // Evita o comportamento padrão do Enter (submeter o formulário)

            const tagTexto = inputTags.value.trim(); // Obtém o texto da tag e remove espaços em branco extras
            if (tagTexto !== '') { // Verifica se o texto da tag não está vazio
                // Cria um novo elemento <li> para a nova tag
                const novaTag = document.createElement('li');
                novaTag.innerHTML = `${tagTexto} <img src="img/close.svg" class="remove-tag" alt="Remover Tag">`;
                listaTags.appendChild(novaTag); // Adiciona a nova tag à lista de tags
                inputTags.value = ''; // Limpa o input de tags para o próximo input
            }
        }
    });

    // Adiciona um ouvinte de evento para capturar cliques na lista de tags
    listaTags.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-tag')) { // Verifica se o elemento clicado é um botão de remoção de tag
            event.target.parentElement.remove(); // Remove o pai do botão (ou seja, o <li> que contém a tag)
        }
    });
});