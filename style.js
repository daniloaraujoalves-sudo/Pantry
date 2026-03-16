// Dentro do seu <script> no index.html
const ADM_EMAIL = "danilo.araujo.alves@escola.pr.gov.br"; // Ajustado para .gov.br

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();

    // Verificação de domínio (Opcional, mas recomendado)
    if (!email.endsWith('.com.br') && !email.endsWith('.gov.br')) {
        alert("Use um e-mail corporativo ou governamental.");
        return;
    }

    localStorage.setItem('usuarioNome', nome);
    localStorage.setItem('usuarioEmail', email);

    if (email === ADM_EMAIL) {
        localStorage.setItem('role', 'admin');
    } else {
        localStorage.setItem('role', 'user');
    }

    window.location.href = "loja.html";
});