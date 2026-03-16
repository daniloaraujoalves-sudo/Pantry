function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const form = document.getElementById('dataForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInformado = document.getElementById('email').value;
    const nomeInformado = document.getElementById('name').value;

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

        // 4. Se o envio deu certo:
        if (resposta.ok) {
            localStorage.setItem('usuarioNome', nomeInformado); 
            
            // --- LÓGICA DE ADMINISTRADOR ADICIONADA AQUI ---
            if (emailInformado === 'danilo.araujo.alves@escola.pr.gov.br') {
                localStorage.setItem('isAdmin', 'true'); // Define como adm
                alert(`Olá, Danilo! Acesso de Administrador liberado.`);
            } else {
                localStorage.setItem('isAdmin', 'false'); // Usuário comum
                alert(`Bem-vindo, ${nomeInformado}! Redirecionando para a loja...`);
            }
            // ----------------------------------------------
            
            window.location.href = "loja.html"; 
        } else {
            alert("Erro ao processar cadastro no servidor.");
        }
    } catch (erro) {
        alert("Erro de conexão com o servidor. Verifique sua internet.");
    }
});