const form = document.getElementById('dataForm');
const ADM_EMAIL = "danilo.araujo.alves@escola.pr.gov.br";  // E-mail do administrador

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();

    if (!nome || !email) {
        alert("Preencha nome e e-mail.");
        return;
    }

    // Salva sessão atual
    localStorage.setItem('usuarioNome', nome);
    localStorage.setItem('usuarioEmail', email);

    // Registra o acesso do usuário no "banco" local
    let banco = JSON.parse(localStorage.getItem('bancoUsuarios')) || [];
    banco.push({
        nome,
        email,
        data: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
    });
    localStorage.setItem('bancoUsuarios', JSON.stringify(banco));

    // Define o papel (role) do usuário
    if (email === ADM_EMAIL) {
        localStorage.setItem('role', 'admin');
        alert("Bem-vindo, Administrador Danilo!");
    } else {
        localStorage.setItem('role', 'user');
        alert(`Olá, ${nome}! Acessando loja...`);
    }

    window.location.href = "loja.html";  // Redireciona para a página da loja
});