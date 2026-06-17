// ==========================================================================
// PORTAL SUNSHINE RP - LÓGICA DE APLICACIÓN PRINCIPAL (CLIENTE)
// ==========================================================================

// --- Estado Global ---
let activeArticleId = null;
let searchFilter = "";
let discordConnectedUser = null;
let currentTab = "home";
let isConnecting = false;

// --- Carga Inicial ---
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar artículos y navegación
  const rules = getRules();
  if (rules.length > 0) {
    activeArticleId = rules[0].id;
  }
  
  refreshPortal();
  initPlayerCounter();
  
  // Escuchadores globales
  window.addEventListener("scroll", () => {
    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
    
    // Reading progress bar calculation
    updateReadingProgress();
  });
});

// --- Contador de Jugadores Fluctuante ---
function initPlayerCounter() {
  const playerCountEl = document.getElementById("player-count");
  if (!playerCountEl) return;
  
  setInterval(() => {
    const min = 135;
    const max = 198;
    const current = Math.floor(Math.random() * (max - min + 1) + min);
    playerCountEl.textContent = `${current} / 250 ONLINE`;
  }, 8000);
}

// --- Refrescar Vista de Documentos ---
function refreshPortal() {
  renderTreeNavigation();
  loadActiveArticle();
}

// --- Renderizado del Menú Lateral en Árbol ---
function renderTreeNavigation() {
  const treeConcepts = document.getElementById("tree-concepts");
  const treeGeneral = document.getElementById("tree-general");
  const treeFactions = document.getElementById("tree-factions");
  const treeCommands = document.getElementById("tree-commands");
  
  if (!treeConcepts || !treeGeneral || !treeFactions || !treeCommands) return;
  
  // Limpiar árboles
  treeConcepts.innerHTML = "";
  treeGeneral.innerHTML = "";
  treeFactions.innerHTML = "";
  treeCommands.innerHTML = "";
  
  const rules = getRules();
  
  // Agrupar y filtrar si hay búsqueda activa
  rules.forEach(rule => {
    const matchesSearch = rule.title.toLowerCase().includes(searchFilter.toLowerCase()) || 
                          rule.summary.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          rule.content.toLowerCase().includes(searchFilter.toLowerCase());
                          
    if (searchFilter && !matchesSearch) return; // Filtrar
    
    const isActive = rule.id === activeArticleId;
    const itemHTML = `
      <li class="nav-tree-item ${isActive ? 'active' : ''}">
        <a href="#" onclick="loadActiveArticleById('${rule.id}')">
          <i class="fa-regular fa-file-lines" style="margin-right: 0.4rem;"></i> ${rule.title}
        </a>
      </li>
    `;
    
    // Asignar al árbol correspondiente
    if (rule.category === "concepts") {
      treeConcepts.insertAdjacentHTML("beforeend", itemHTML);
    } else if (rule.category === "general") {
      treeGeneral.insertAdjacentHTML("beforeend", itemHTML);
    } else if (rule.category === "factions") {
      treeFactions.insertAdjacentHTML("beforeend", itemHTML);
    } else if (rule.category === "commands") {
      treeCommands.insertAdjacentHTML("beforeend", itemHTML);
    }
  });
  
  // Mostrar mensaje vacío por categoría si no hay resultados
  checkEmptyTree(treeConcepts, "No hay conceptos coincidentes");
  checkEmptyTree(treeGeneral, "No hay normas coincidentes");
  checkEmptyTree(treeFactions, "No hay facciones coincidentes");
  checkEmptyTree(treeCommands, "No hay guías coincidentes");
}

function checkEmptyTree(el, message) {
  if (el.children.length === 0) {
    el.innerHTML = `<li style="font-size: 0.75rem; color: var(--color-text-muted); padding: 0.25rem 0.5rem; font-style: italic;">${message}</li>`;
  }
}

// --- Carga del Artículo Activo en Pantalla ---
function loadActiveArticle() {
  const contentArea = document.getElementById("doc-active-content");
  if (!contentArea) return;
  
  const rules = getRules();
  const rule = rules.find(r => r.id === activeArticleId);
  
  if (!rule) {
    contentArea.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--color-text-secondary);">
        <i class="fa-solid fa-book-open" style="font-size: 3rem; color: var(--color-text-muted); margin-bottom: 1rem; display: block;"></i>
        <p style="font-size: 1.1rem; font-weight: 700;">Selecciona una normativa</p>
        <p style="font-size: 0.9rem;">Utiliza el menú lateral izquierdo o el buscador principal para seleccionar un tema.</p>
      </div>
    `;
    // Limpiar Tabla de Contenidos (TOC)
    const tocList = document.getElementById("toc-list-content");
    if (tocList) tocList.innerHTML = `<li style="font-size: 0.75rem; color: var(--color-text-muted); font-style: italic;">No hay secciones</li>`;
    return;
  }
  
  contentArea.innerHTML = `
    <div class="doc-header">
      <div class="doc-meta">
        <span class="doc-tag">${rule.tag}</span>
        <span><i class="fa-solid fa-clock-rotate-left"></i> Act: ${rule.lastUpdated}</span>
        <span style="text-transform: capitalize;"><i class="fa-solid fa-folder"></i> ${rule.category}</span>
      </div>
      <h2 class="doc-title"><i class="fa-solid ${rule.icon} text-gradient" style="margin-right: 0.75rem;"></i>${rule.title}</h2>
    </div>
    
    <div class="doc-body">
      ${rule.content}
    </div>
  `;
  
  // Construir Tabla de Contenidos (TOC)
  buildTableOfContents(contentArea);
  
  // Resetear barra de progreso de lectura
  const bar = document.getElementById("reading-progress-indicator");
  if (bar) bar.style.width = "0%";
}

function loadActiveArticleById(id) {
  activeArticleId = id;
  renderTreeNavigation();
  
  const reader = document.getElementById("doc-reader");
  reader.style.transition = "opacity 0.15s ease";
  reader.style.opacity = "0.3";
  
  setTimeout(() => {
    loadActiveArticle();
    reader.style.opacity = "1";
    updateReadingProgress();
  }, 150);
}

// --- Construcción de Tabla de Contenidos (TOC) ---
function buildTableOfContents(contentArea) {
  const headings = contentArea.querySelectorAll(".doc-body h3, .doc-body h4");
  const tocList = document.getElementById("toc-list-content");
  if (!tocList) return;
  
  tocList.innerHTML = "";
  
  if (headings.length === 0) {
    tocList.innerHTML = `<li style="font-size: 0.75rem; color: var(--color-text-muted); font-style: italic;">No hay secciones</li>`;
    return;
  }
  
  headings.forEach((heading, index) => {
    // Generar ID único si no lo tiene
    const headingId = `heading-${index}`;
    heading.id = headingId;
    
    const isLevel4 = heading.tagName.toLowerCase() === "h4";
    const li = document.createElement("li");
    li.className = `toc-item ${isLevel4 ? 'level-4' : ''}`;
    
    li.innerHTML = `<a href="#${headingId}" onclick="scrollToHeading(event, '${headingId}')">${heading.textContent}</a>`;
    tocList.appendChild(li);
  });
  
  // Highlight inicial del TOC
  highlightTOC();
  window.addEventListener("scroll", highlightTOC);
}

function scrollToHeading(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  if (!target) return;
  
  const navbarHeight = document.getElementById("navbar").offsetHeight + 20;
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}

// Resaltado dinámico del TOC al hacer scroll
function highlightTOC() {
  const tocItems = document.querySelectorAll(".toc-item");
  const headings = document.querySelectorAll(".doc-body h3, .doc-body h4");
  if (headings.length === 0 || tocItems.length === 0) return;
  
  const navbarHeight = document.getElementById("navbar").offsetHeight + 50;
  let activeIndex = 0;
  
  for (let i = 0; i < headings.length; i++) {
    const rect = headings[i].getBoundingClientRect();
    if (rect.top <= navbarHeight) {
      activeIndex = i;
    } else {
      break;
    }
  }
  
  tocItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// --- Barra de Progreso de Lectura ---
function updateReadingProgress() {
  const reader = document.getElementById("doc-reader");
  const bar = document.getElementById("reading-progress-indicator");
  if (!reader || !bar) return;
  
  const rect = reader.getBoundingClientRect();
  const readerHeight = rect.height;
  const readerTop = rect.top;
  
  const windowHeight = window.innerHeight;
  const startOffset = 120; // Cuándo empieza a contar
  
  if (readerTop <= startOffset) {
    const totalScroll = readerHeight - windowHeight + startOffset + 80;
    const spentScroll = Math.abs(readerTop) + startOffset;
    
    let percentage = (spentScroll / totalScroll) * 100;
    percentage = Math.min(Math.max(percentage, 0), 100);
    
    bar.style.width = `${percentage}%`;
  } else {
    bar.style.width = "0%";
  }
}

// --- Cambio de Pestañas (Vistas) ---
function switchTab(tabName) {
  currentTab = tabName;
  const homeView = document.getElementById("home-view");
  const docsView = document.getElementById("docs-view");
  const adminView = document.getElementById("admin-view");
  const heroSection = document.getElementById("hero-section");
  const heroSubtitle = document.getElementById("hero-subtitle-text");
  
  // Remover scroll listener para el TOC si salimos de docs
  if (tabName !== "docs") {
    window.removeEventListener("scroll", highlightTOC);
  }
  
  document.getElementById("nav-home").classList.remove("active");
  document.getElementById("nav-docs").classList.remove("active");
  document.getElementById("nav-admin").classList.remove("active");
  
  homeView.style.display = "none";
  docsView.style.display = "none";
  adminView.style.display = "none";
  heroSection.style.display = "none";
  
  if (tabName === "home") {
    homeView.style.display = "flex";
    heroSection.style.display = "block";
    heroSubtitle.style.display = "block";
    document.getElementById("nav-home").classList.add("active");
  } else if (tabName === "docs") {
    docsView.style.display = "grid";
    heroSection.style.display = "block";
    heroSubtitle.style.display = "none";
    document.getElementById("nav-docs").classList.add("active");
    refreshPortal();
  } else if (tabName === "admin") {
    adminView.style.display = "block";
    document.getElementById("nav-admin").classList.add("active");
    if (typeof loadAdminTable === 'function') {
      loadAdminTable();
    }
  }
  
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- Buscador General ---
function handleSearch(event) {
  searchFilter = event.target.value;
  
  if (currentTab === "home" && searchFilter.trim() !== "") {
    switchTab("docs");
    const searchBar = document.getElementById("global-search");
    if (searchBar) {
      searchBar.value = searchFilter;
      searchBar.focus();
    }
  }
  
  renderTreeNavigation();
}

// --- Simulador de Conexión en Terminal (Ultra Premium) ---
function connectToFiveM() {
  if (isConnecting) return;
  isConnecting = true;
  
  const connectBtn = document.querySelector(".btn-connect-server");
  const terminal = document.getElementById("terminal-content");
  if (!connectBtn || !terminal) return;
  
  // Bloquear botón
  connectBtn.disabled = true;
  connectBtn.style.opacity = "0.5";
  connectBtn.style.cursor = "not-allowed";
  
  // Limpiar terminal excepto primera línea status
  terminal.innerHTML = `
    <div class="terminal-line">
      <span class="terminal-prompt">$</span>
      <span class="terminal-text">cat server_status.log</span>
    </div>
    <div class="terminal-line">
      <span class="terminal-text success">Sunshine RP status: ONLINE</span>
    </div>
    <div class="terminal-line">
      <span class="terminal-text info">IP: play.sunshinerp.net | PORT: 30120</span>
    </div>
  `;
  
  const logSteps = [
    { text: "ssh play@sunshinerp.net -p 30120 ...", isPrompt: true },
    { text: "DNS resolved to IP 185.244.195.42:30120", class: "info" },
    { text: "TCP connection established. Downloading manifest...", class: "info" },
    { text: "Loading core framework: QBCore v2.8.4 ...", class: "info" },
    { text: "Framework loaded successfully.", class: "success" },
    { text: "Verifying whitelist validation for Discord (pablo#1337)...", class: "info" },
    { text: "Discord UID verified. Whitelist [GRANTED].", class: "success" },
    { text: "Syncing server mapping assets: Sunshine_Plaza.ytd, Hospital_Pillbox.ytd...", class: "info" },
    { text: "Custom vehicle packs downloaded: 42 files (24.8 MB).", class: "info" },
    { text: "Connecting TeamSpeak voice channel (TokoVOIP protocol v1.4.2)...", class: "info" },
    { text: "Channel connected. Microphone active.", class: "success" },
    { text: "Spawning character... enjoy your roleplay story!", class: "success" }
  ];
  
  let stepIdx = 0;
  
  function runStep() {
    if (stepIdx >= logSteps.length) {
      // Finalizado
      isConnecting = false;
      connectBtn.disabled = false;
      connectBtn.style.opacity = "1";
      connectBtn.style.cursor = "pointer";
      
      // Añadir la última línea interactiva de espera
      terminal.insertAdjacentHTML("beforeend", `
        <div class="terminal-line">
          <span class="terminal-prompt">$</span>
          <span class="terminal-text">esperando orden de conexion...</span>
          <span class="terminal-cursor"></span>
        </div>
      `);
      terminal.scrollTop = terminal.scrollHeight;
      
      showToast("¡Estableciendo conexión exitosa! Cargando Los Santos...", "success");
      return;
    }
    
    const step = logSteps[stepIdx];
    const lineId = `term-line-${stepIdx}`;
    
    // Crear línea de terminal
    const lineHTML = `
      <div class="terminal-line" id="${lineId}">
        <span class="terminal-prompt">${step.isPrompt ? '$' : ''}</span>
        <span class="terminal-text ${step.class || ''}"></span>
      </div>
    `;
    terminal.insertAdjacentHTML("beforeend", lineHTML);
    terminal.scrollTop = terminal.scrollHeight;
    
    const textSpan = document.querySelector(`#${lineId} .terminal-text`);
    let charIdx = 0;
    
    function typeChar() {
      if (charIdx >= step.text.length) {
        stepIdx++;
        setTimeout(runStep, step.isPrompt ? 600 : 350);
        return;
      }
      textSpan.textContent += step.text.charAt(charIdx);
      charIdx++;
      setTimeout(typeChar, step.isPrompt ? 30 : 15);
    }
    
    typeChar();
  }
  
  // Empezar animación
  showToast("Iniciando secuencia de conexión terminal...", "info");
  setTimeout(runStep, 500);
}

// --- Conectar Discord ---
function toggleDiscordLogin() {
  const btn = document.getElementById("discord-login-btn");
  
  if (discordConnectedUser) {
    discordConnectedUser = null;
    btn.innerHTML = `<i class="fa-brands fa-discord"></i> Conectar Discord`;
    btn.classList.remove("connected");
    showToast("Cuenta de Discord desvinculada", "info");
  } else {
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Conectando...`;
    setTimeout(() => {
      discordConnectedUser = {
        tag: "pablo#1337",
        avatarLetter: "P"
      };
      btn.innerHTML = `<i class="fa-brands fa-discord"></i> Conectado: pablo`;
      btn.classList.add("connected");
      showToast("¡Discord verificado correctamente!", "success");
    }, 1200);
  }
}

// --- Notificaciones Toast Flotantes ---
function showToast(message, type = "info") {
  const container = document.getElementById("notification-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "error") icon = "fa-triangle-exclamation";
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 3500);
}
