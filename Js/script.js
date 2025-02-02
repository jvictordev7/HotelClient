const imagens = [
  'image/apartamento1.jpg', // Caminho da imagem 1
  'image/apartamento2.jpg', // Caminho da imagem 2
  'image/apartamento3.jpg', // Caminho da imagem 3
  'image/apartamento4.jpg'  // Caminho da imagem 4
];

let indiceAtual = 0;

function trocarImagem() {
  // Atualiza o fundo da seção .main com a imagem da lista
  document.querySelector('.main').style.backgroundImage = `url('${imagens[indiceAtual]}')`;

  // Atualiza o índice da imagem atual
  indiceAtual = (indiceAtual + 1) % imagens.length;
}

// Chama a função a cada 5 segundos (5000ms)
setInterval(trocarImagem, 3000);

// INICIO APARTAMENTOS

// Função para alternar as imagens
function changeImage(direction, carouselIndex) {
  const carousels = document.querySelectorAll('.carousel');  // Seleciona todos os carrosséis
  const images = carousels[carouselIndex].querySelectorAll('.carousel-image');  // Seleciona as imagens do carrossel correspondente
  let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');  // Encontra a imagem atualmente visível

  // Se nenhuma imagem estiver visível, a primeira será a visível
  if (currentIndex === -1) {
      currentIndex = 0;
  }

  // Atualiza o índice com base na direção
  currentIndex = (currentIndex + direction + images.length) % images.length;

  // Esconde todas as imagens
  images.forEach(img => img.style.display = 'none');

  // Exibe a imagem no índice atual
  images[currentIndex].style.display = 'block';
}

// Inicializa os carrosséis ao carregar a página
window.onload = function() {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach((carousel, index) => {
      const images = carousel.querySelectorAll('.carousel-image');
      // Torna a primeira imagem visível ao carregar
      images[0].style.display = 'block';
  });
}

//FIM APARTAMENTOS

