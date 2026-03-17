<script>
    const nome = localStorage.getItem('usuarioNome');
    const role = localStorage.getItem('role');

    if (!nome) { window.location.href = "index.html"; }

    document.getElementById('boasVindas').innerText = `Olá, ${nome}!`;

    // Lógica de VISIBILIDADE E CONTROLE DO ADMIN
    if (role === 'admin') {
        document.getElementById('adminPanel').style.display = 'block';
        document.getElementById('statusUser').innerHTML = '<span class="badge-adm">ADMINISTRADOR</span>';
        
        carregarDadosAdmin(); // Chama a função para preencher a tabela
    }

    function carregarDadosAdmin() {
        const listaHtml = document.getElementById('listaCompras');
        const usuarios = JSON.parse(localStorage.getItem('bancoUsuarios')) || [];
        
        // Limpa a tabela antes de preencher
        listaHtml.innerHTML = "";

        // Preenche com os dados reais do "banco"
        usuarios.forEach(user => {
            const linha = `
                <tr>
                    <td>${user.nome}</td>
                    <td>${user.email}</td>
                    <td>Acessou em: ${user.data}</td>
                </tr>
            `;
            listaHtml.innerHTML += linha;
        });
    }

    function comprar(item) {
        alert(`Solicitação do ${item} enviada!`);
    }
</script>