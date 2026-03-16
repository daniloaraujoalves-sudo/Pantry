const form = document.getElementById('dataForm');

form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura os dados do formulário
    const dadosParaEnviar = {
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    console.log("Enviando dados para o servidor...", dadosParaEnviar);

    try {
        // O 'fetch' é como o garçom levando o pedido para a cozinha (Backend)
        // Aqui usamos uma URL de teste que apenas simula o recebimento
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(dadosParaEnviar),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (resposta.ok) {
            // Se o "servidor" respondeu que deu certo
            alert(`Sucesso! O cliente ${dadosParaEnviar.nome} foi salvo no banco de dados.`);
            form.reset(); // Limpa o formulário
        } else {
            alert("Erro ao salvar no servidor.");
        }
    } catch (erro) {
        console.error("Erro na conexão:", erro);
        alert("Não foi possível conectar ao servidor.");
    }
});
