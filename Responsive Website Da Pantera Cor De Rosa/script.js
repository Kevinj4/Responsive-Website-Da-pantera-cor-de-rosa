// Seleciona o elemento com o ID "menu-icon"
let menu = document.querySelector("#menu-icon");

// Seleciona o elemento com a CLASSE "navlist"
// ATENÇÃO: O seu código original estava "navlist" (sem o ponto).
// Se "navlist" é uma classe CSS, precisa do "." na frente.
// Se "navlist" é um ID, precisa de "#" na frente.
// Assumi que é uma classe, o que é comum para listas de navegação.
let navlist = document.querySelector(".navlist"); // Corrigido aqui para ".navlist"

// Evento de clique no ícone do menu
// ATENÇÃO: O seu código original estava "menu.onlick" (com 'k').
// O correto é "onclick" (sem 'k').
menu.onclick = () => {
  // Alterna a classe 'bx-x' no ícone do menu
  // Isso geralmente muda o ícone de um "hambúrguer" para um "X" e vice-versa.
  menu.classList.toggle("bx-x");

  // Alterna a classe 'open' na lista de navegação
  // Isso geralmente mostra ou esconde o menu de navegação em telas menores.
  navlist.classList.toggle("open");
};

// --- Configuração do ScrollReveal ---
// ATENÇÃO: A variável 'scrollReveal' não está definida no seu código.
// Para usar 'scrollReveal', você precisa ter a biblioteca ScrollReveal.js
// incluída no seu arquivo HTML antes do seu script.
// Exemplo: <script src="https://unpkg.com/scrollreveal"></script>

// Inicializa o ScrollReveal com configurações globais
const sr = ScrollReveal({
  // Corrigido para 'ScrollReveal' com 'S' maiúsculo
  distance: "65px", // Distância que o elemento irá se mover
  duration: 2600, // Duração da animação em milissegundos
  delay: 450, // Atraso antes da animação começar
  reset: true, // Define se a animação deve ser reiniciada ao rolar para cima
});

// Revela o elemento com a CLASSE "hero-text"
// ATENÇÃO: O seu código original estava "hero-text" (sem o ponto).
// Se "hero-text" é uma classe CSS, precisa do "." na frente.
// Se "hero-text" é um ID, precisa de "#" na frente.
// Assumi que é uma classe.
sr.reveal(".hero-text", { delay: 200, origin: "top" }); // Corrigido para ".hero-text"

// Revela o elemento com a CLASSE "hero-img"
// ATENÇÃO: O seu código original estava "hero-img" (sem o ponto).
// Se "hero-img" é uma classe CSS, precisa do "." na frente.
// Se "hero-img" é um ID, precisa de "#" na frente.
// Assumi que é uma classe.
sr.reveal(".hero-img", { delay: 450, origin: "top" }); // Corrigido para ".hero-img"
