const admins = [
    "danilo.araujo.alves2010@gmail.com.br",
    "danilo.araujo.alves@escola.pr.gov.br"
];

function verificarAcesso(emailInformado) {
    if (admins.includes(emailInformado)) {
        console.log("Acesso concedido: Administrador detectado.");
        // Aqui você pode liberar funções especiais no seu site
        return true;
    } else {
        console.log("Acesso padrão: Usuário comum.");
        return false;
    }
}

// Testando a função
verificarAcesso("danilo.araujo.alves@escola.pr.gov.br");