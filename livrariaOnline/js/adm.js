import { carregarLivros, salvarLivros } from './data.js'; // Caminho corrigido

let livroEmEdicao = null;

// --- R (Read): Exibir a lista de livros no painel de administração
function renderizarTabela() {
    const tabelaCorpo = document.getElementById('tabela-livros');
    tabelaCorpo.innerHTML = '';

    const livros = carregarLivros();
    livros.forEach(livro => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td data-label="Título">${livro.titulo}</td>
            <td data-label="Autor">${livro.autor}</td>
            <td data-label="Preço">R$ ${livro.preco.toFixed(2)}</td>
            <td data-label="Ações">
                <button class="btn-editar" data-id="${livro.id}">Editar</button>
                <button class="btn-delete" data-id="${livro.id}">Deletar</button>
            </td>
        `;
        tabelaCorpo.appendChild(tr);
    });
}

// --- C (Create) & U (Update): Adicionar ou Editar um livro
const formLivro = document.getElementById('form-livro');
formLivro.addEventListener('submit', (event) => {
    event.preventDefault();

    const novoLivro = {
        titulo: document.getElementById('titulo').value,
        autor: document.getElementById('autor').value,
        preco: parseFloat(document.getElementById('preco').value),
        capa: document.getElementById('capa').value
    };

    let livros = carregarLivros();
    if (livroEmEdicao) {
        // Atualiza o livro existente
        livros = livros.map(livro => livro.id === livroEmEdicao.id ? { ...livroEmEdicao, ...novoLivro } : livro);
        livroEmEdicao = null; // Reseta o estado de edição
    } else {
        // Adiciona um novo livro
        novoLivro.id = Date.now(); // Atribui o ID aqui para evitar duplicatas
        livros.push(novoLivro);
    }

    salvarLivros(livros);
    formLivro.reset();
    renderizarTabela();
});

// --- U (Update) e D (Delete): Lógica para preencher o formulário e deletar
document.getElementById('tabela-livros').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-editar')) {
        const idParaEditar = parseInt(event.target.dataset.id);
        const livros = carregarLivros();
        const livroParaEditar = livros.find(livro => livro.id === idParaEditar);

        if (livroParaEditar) {
            document.getElementById('titulo').value = livroParaEditar.titulo;
            document.getElementById('autor').value = livroParaEditar.autor;
            document.getElementById('preco').value = livroParaEditar.preco;
            document.getElementById('capa').value = livroParaEditar.capa;
            livroEmEdicao = livroParaEditar; // Armazena o objeto completo, não apenas o ID
        }
    }
    
    if (event.target.classList.contains('btn-delete')) {
        const idParaDeletar = parseInt(event.target.dataset.id);
        const livros = carregarLivros();
        const livrosFiltrados = livros.filter(livro => livro.id !== idParaDeletar);

        salvarLivros(livrosFiltrados);
        renderizarTabela();
    }
});

// Executa a função ao carregar a página admin
document.addEventListener('DOMContentLoaded', renderizarTabela);