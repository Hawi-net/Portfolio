document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      name: "Evangadi Forum",
      desc: " A responsive platform that features secure user authentication, robust API integration, and complete functionality for managing questions and answers, alongside an exploration of AI-powered semantic search and document-based retrieval techniques.",
      image: "images/community.jpg",
      imageAlt: "Community platform project",
      tags: ["React", "JS", "Node.js", "Express.js", "MySQL", "REST APIs", "Git"],
      live: "https://evangadi-forum-xi2d-eight.vercel.app/",
      github: "https://github.com/Hawi-net/Evangadi-forum"
    },
    {
      name: "Chat GPT clone",
      desc: "A responsive AI chat web application features a database-backed conversation and message management system, integrated generative AI capabilities, and seamless connectivity linking frontend interfaces, backend endpoints, and database operations.",
      image: "images/chatgpt.jpg",
      imageAlt: "Chat GPT clone project",
      tags: ["React", "JS", "Node.js", "Express.js", "MySQL", "Gemini API"],
      live: "https://chat-gpt-clone-klzo.vercel.app/",
      github: "https://github.com/Hawi-net/ChatGPT-Clone"
    },
    {
      name: "Netflix clone",
      desc: "A responsive Netflix-style movie browsing interface features a dynamic footer component, smooth navigation via routing, and data retrieval from an external movie database API, all built through collaborative version-control workflows.Community-focused learning concept designed to connect learners, share educational resources, and support collaboration in low-connectivity environments.",
      image: "images/netflix.jpg",
      imageAlt: "Movie Browse project",
      tags: ["React", "JS", "Axios", "TMDB API", "CSS", "Git"],
      live: "https://netflix-clone-alpha-sand-14.vercel.app/",
      github: "https://github.com/Hawi-net/NetflixClone"
    },
  ];

  const projectsContainer = document.getElementById("projects-container");

  if (projectsContainer) {
    projects.forEach(p => {
      const article = document.createElement("article");
      article.className = "card";
      
      article.innerHTML = `
        <img class="project-image" src="${p.image}" alt="${p.imageAlt}">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <div class="links">
          <a class="btn fill" href="${p.live}" target="_blank" rel="noopener">Live</a>
          <a class="btn" href="${p.github}" target="_blank" rel="noopener">GitHub</a>
        </div>
      `;
      
      projectsContainer.appendChild(article);
    });
  }

  // Set dynamic copyright year
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
