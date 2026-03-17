const CONFIG = {
    TOKEN: "SEU_GITHUB_TOKEN", // ⚠️ CUIDADO: Não poste isso publicamente
    REPO: "seu-usuario/seu-repositorio",
    PATH: "clientes.json" // Arquivo que guardará os dados
};

document.getElementById('formCadastro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.getElementById('status');
    status.innerText = "Processando...";

    const novoCliente = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        data: new Date().toISOString()
    };

    try {
        // 1. Buscar o arquivo atual para não apagar os clientes antigos
        const url = `https://api.github.com/repos/${CONFIG.REPO}/contents/${CONFIG.PATH}`;
        let sha = "";
        let listaClientes = [];

        const resGet = await fetch(url, {
            headers: { "Authorization": `token ${CONFIG.TOKEN}` }
        });

        if (resGet.ok) {
            const data = await resGet.json();
            sha = data.sha;
            // Decodifica o conteúdo Base64 e transforma em Objeto JS
            listaClientes = JSON.parse(atob(data.content));
        }

        // 2. Adicionar o novo cliente à lista
        listaClientes.push(novoCliente);

        // 3. Salvar a lista atualizada de volta no GitHub
        const resPut = await fetch(url, {
            method: "PUT",
            headers: {
                "Authorization": `token ${CONFIG.TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: `Novo cadastro: ${novoCliente.nome}`,
                content: btoa(JSON.stringify(listaClientes, null, 2)), // Converte para Base64
                sha: sha // Necessário para atualizar arquivo existente
            })
        });

        if (resPut.ok) {
            status.innerText = "✅ Cliente cadastrado com sucesso!";
            document.getElementById('formCadastro').reset();
        } else {
            throw new Error("Erro ao salvar");
        }

    } catch (error) {
        console.error(error);
        status.innerText = "❌ Erro ao cadastrar. Verifique o console.";
    }
});