// Substitua o script do seu index.html por este:
const form = document.getElementById('dataForm');
const ADM_EMAIL = "danilo.araujo.alves@escola.pr.gov.br";

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();

    // --- LÓGICA DE REGISTRO DE USUÁRIOS NO "BANCO" ---
    // Pegamos a lista de usuários já cadastrados ou criamos uma vazia
    let usuariosCadastrados = JSON.parse(localStorage.getItem('bancoUsuarios')) || [];
    
    // Adicionamos o novo usuário na lista
    usuariosCadastrados.push({ nome, email, data: new Date().toLocaleDateString() });
    
    // Salvamos de volta no localStorage
    localStorage.setItem('bancoUsuarios', JSON.stringify(usuariosCadastrados));
    // ------------------------------------------------

    // Sessão atual
    localStorage.setItem('usuarioNome', nome);
    localStorage.setItem('usuarioEmail', email);

    if (email === ADM_EMAIL) {
        localStorage.setItem('role', 'admin');
        alert("Bem-vindo, Administrador Danilo!");
    } else {
        localStorage.setItem('role', 'user');
        alert(`Olá, ${nome}! Acessando loja...`);
    }

    window.location.href = "loja.html";
});