// script.js - Interatividade básica para o portfólio

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar funcionalidade de toggle para descrições
    const trabalhos = document.querySelectorAll('.trabalho');

    trabalhos.forEach(trabalho => {
        const descricao = trabalho.querySelector('p');
        const titulo = trabalho.querySelector('h3');

        // Criar botão "Ver mais"
        const botao = document.createElement('button');
        botao.textContent = 'Ver mais';
        botao.style.backgroundColor = '#FFD700';
        botao.style.color = '#A0522D';
        botao.style.border = 'none';
        botao.style.padding = '0.5rem 1rem';
        botao.style.borderRadius = '4px';
        botao.style.cursor = 'pointer';
        botao.style.marginTop = '0.5rem';

        trabalho.appendChild(botao);

        botao.addEventListener('click', function() {
            if (descricao.style.display === 'none') {
                descricao.style.display = 'block';
                botao.textContent = 'Ver menos';
            } else {
                descricao.style.display = 'none';
                botao.textContent = 'Ver mais';
            }
        });

        // Inicialmente esconder descrição
        descricao.style.display = 'none';
    });

    console.log('Portfólio carregado com sucesso!');
});