import { carregarLivros } from './data.js';

// Função para criar o HTML de um "card" de livro
function criarCardLivro(livro) {
    const card = document.createElement('div');
    card.classList.add('book-card');

    card.innerHTML = `
        <img class="book-image" src="${livro.capa}" alt="Capa de ${livro.titulo}">
        <h3 class="book-title">${livro.titulo}</h3>
        <p class="book-author">Autor: ${livro.autor}</p>
        <p class="book-price">Preço: R$ ${livro.preco.toFixed(2)}</p>
    `;
    return card;
}

// Função principal para renderizar o catálogo
function renderizarCatalogo() {
    const livros = carregarLivros();
    const container = document.querySelector('.catalogo-container');
    
    livros.forEach(livro => {
        const card = criarCardLivro(livro);
        container.appendChild(card);
    });
}

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', renderizarCatalogo);