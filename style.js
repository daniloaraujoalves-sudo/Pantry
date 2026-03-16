function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const form = document.getElementById('dataForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInformado = document.getElementById('email').value;
    const nomeInformado = document.getElementById('name').value;

    // ... dentro do if (resposta.ok)
if (resposta.ok) {
    // SALVA O NOME AQUI
    localStorage.setItem('usuarioNome', nomeInformado); 
    
    alert("Cliente autenticado!");
    window.location.href = "loja.html"; 
}
    // 1. Verificação de Formato
    if (!validarEmail(emailInformado)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // 2. Verificação de Domínio
    if (!emailInformado.endsWith('.com.br') && !emailInformado.endsWith('.gov.br')) {
        alert("Atenção: Use apenas e-mails corporativos ou governamentais.");
        return;
    }

    // 3. Simulação de Envio (O Fetch)
    try {
        const resposta = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: nomeInformado, email: emailInformado })
        });

        if (resposta.ok) {
            alert("Cliente autenticado! Redirecionando para a loja...");
            // Redireciona para a página da loja que você criou
            window.location.href = "loja.html"; 
        } else {
            alert("Erro ao processar cadastro.");
        }
    } catch (erro) {
        alert("Erro de conexão com o servidor.");
    }
});
