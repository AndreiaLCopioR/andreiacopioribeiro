// Função para carregar o conteúdo JSON dinamicamente
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Preencher a seção Sobre Mim
        document.getElementById('sobre-texto').innerText = data.sobre;
        document.getElementById('email').innerText = data.contato.email;

        // Preencher a seção de Projetos
        const projetosContainer = document.getElementById('projetos-container');
        projetosContainer.innerHTML = ''; // Limpar conteúdo anterior
        data.projetos.forEach(projeto => {
            const projetoDiv = document.createElement('div');
            projetoDiv.classList.add('projeto');
            projetoDiv.innerHTML = `
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Ver projeto</a>
            `;
            projetosContainer.appendChild(projetoDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar dados JSON:', error));

