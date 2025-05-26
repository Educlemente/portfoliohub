document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Website Pessoal",
      description:
        "Um website responsivo e moderno para exibir meu currículo e habilidades. Desenvolvido com HTML, CSS e JavaScript puro.",
      githubLink: "https://github.com/seu-usuario/website-pessoal", // Substitua pelo seu link real
    },
    {
      title: "App de Lista de Tarefas",
      description:
        "Um aplicativo simples de lista de tarefas com funcionalidades de adicionar, remover e marcar como concluída. Armazena dados localmente no navegador.",
      githubLink: "https://github.com/seu-usuario/todo-app", // Substitua pelo seu link real
    },
    {
      title: "Calculadora Interativa",
      description:
        "Uma calculadora baseada em navegador com operações básicas de adição, subtração, multiplicação e divisão. Interface intuitiva.",
      githubLink: "https://github.com/seu-usuario/calculadora-interativa", // Substitua pelo seu link real
    },
    {
      title: "Landing Page de Produto",
      description:
        "Uma landing page atraente para um produto fictício, focada em conversão. Design limpo e otimizado para mobile.",
      githubLink: "https://github.com/seu-usuario/landing-page-produto", // Substitua pelo seu link real
    },
    {
      title: "Jogo da Memória",
      description:
        "Um divertido jogo da memória desenvolvido para exercitar lógica e manipulação do DOM. Possui contador de jogadas e tempo.",
      githubLink: "https://github.com/seu-usuario/jogo-memoria", // Substitua pelo seu link real
    },
    // Adicione mais projetos aqui seguindo o mesmo formato
  ];

  const projectListDiv = document.getElementById("project-list");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.githubLink}" target="_blank" class="project-link">Ver no GitHub</a>
        `;

    projectListDiv.appendChild(projectCard);
  });

  // Você pode personalizar o nome no header aqui também, ou diretamente no HTML
  const yourNameElement = document.querySelector("header h1");
  if (yourNameElement) {
    yourNameElement.textContent = "Eduardo Cantuária Clemente"; // Substitua pelo seu nome
  }

  const footerNameElement = document.querySelector("footer p");
  if (footerNameElement) {
    footerNameElement.innerHTML = `&copy; 2025 Eduardo Cantuária Clemente. Todos os direitos reservados.`; // Substitua pelo seu nome
  }
});
