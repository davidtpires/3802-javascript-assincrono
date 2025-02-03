let promessaDePizza = new Promise(function(resolve, reject) {
    // Simulando a entrega da pizza
    let pizzaEntregue = true; // Tente mudar para false e veja o que acontece
    if (pizzaEntregue) {
      resolve('Pizza entregue com sucesso!');
    } else {
      reject('Entrega da pizza falhou.');
    }
  });