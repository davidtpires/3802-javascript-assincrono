const emailsCadastrados = [
    "davidt.info@gmail.com",
    "david@gmail.com",
    "david@gruporei.com.br"
];

const botaoSubmit = document.querySelector(".submit-button");

async function verificaEmailExiste(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(emailsCadastrados.includes(email));
        }, 1000)
    })
    
}

botaoSubmit.addEventListener("click", async (evento) => {
    evento.preventDefault();
    const email = document.getElementById("email").value;
    const emailExiste = await verificaEmailExiste(email);
    
    console.log(emailExiste);
    if (emailExiste){
        alert("Email existe na base, redirecionando....");
    } else  {
        alert("Erro: email não existe");
    }
    console.log(email)

})