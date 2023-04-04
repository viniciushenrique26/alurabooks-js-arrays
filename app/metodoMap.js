function aplicarDesconto(livros) {
  const desconto = 0.3;
  livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: livro.preco - livro.preco * desconto }; //faz uma cópia de todo o nosso array para um outro objeto
  });
  return livrosComDesconto;
}
