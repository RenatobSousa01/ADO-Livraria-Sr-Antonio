// Dados iniciais para o catálogo
const livrosIniciais = [
  { id: 1, titulo: "O Guia do Mochileiro das Galáxias", autor: "Douglas Adams", preco: 49.90, capa: "https://images-na.ssl-images-amazon.com/images/I/41K-m3WzTLL.jpg" },
  { id: 2, titulo: "1984", autor: "George Orwell", preco: 35.50, capa: "https://images-na.ssl-images-amazon.com/images/I/41D9s-k7OAL._SX323_BO1,204,203,200_.jpg" },
  { id: 3, titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", preco: 59.90, capa: "https://images-na.ssl-images-amazon.com/images/I/5155x51z3YL._SY498_BO1,204,203,200_.jpg" }
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