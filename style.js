function validarEmail(email) {
    // Esta regra (Regex) verifica se o texto segue o padrão: texto@texto.dominio
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const form = document.getElementById('dataForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInformado = document.getElementById('email').value;

    // 1. Verificação de Autenticidade Básica
    if (!validarEmail(emailInformado)) {
        alert("Por favor, insira um e-mail válido.");
        return; // Para o código aqui se for inválido
    }

    // 2. Verificação de Domínio Corporativo (Opcional)
    if (!emailInformado.endsWith('.com.br') && !emailInformado.endsWith('.gov.br')) {
        alert("Atenção: Use apenas e-mails corporativos ou governamentais.");
        return;
    }

    console.log("E-mail validado! Iniciando envio...");
    
    // ... restante do código de envio (fetch) que vimos antes
});
