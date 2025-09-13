// Dados iniciais para o catálogo
const livrosIniciais = [
  { id: 1, titulo: "A Mãe", autor: "Máximo Gorki", preco: 79.50, capa: "https://expressaopopular.com.br/wp-content/uploads/2021/08/1475031154_.jpg" },
  { id: 2, titulo: "A FOTOGRAFIA em um mundo onde todos fotografam", autor: "Daniela Agostini", preco: 81.90, capa: "https://m.media-amazon.com/images/I/91YZCu9tXnL._UF1000,1000_QL80_.jpg" },
  { id: 3, titulo: "A preparação do Ator", autor: "Constantin Stanislavisk", preco: 67.90, capa: "https://m.media-amazon.com/images/I/51VSNPxyvZL._UF1000,1000_QL80_.jpg" }
];

// Função para carregar a lista de livros do localStorage
export function carregarLivros() {
  const livrosArmazenados = localStorage.getItem('catalogoLivros');
  if (!livrosArmazenados) {
    localStorage.setItem('catalogoLivros', JSON.stringify(livrosIniciais));
  }
  return JSON.parse(localStorage.getItem('catalogoLivros'));
}

// Função para salvar a lista de livros no localStorage
export function salvarLivros(listaDeLivros) {
  localStorage.setItem('catalogoLivros', JSON.stringify(listaDeLivros));
}