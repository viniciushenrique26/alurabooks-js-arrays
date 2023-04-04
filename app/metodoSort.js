const botaoOrdenar = document.getElementById('btnOrdenarPorPreco');

botaoOrdenar.addEventListener('click', function () {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

  exibirOsLivrosNaTela(livrosOrdenados);
});
