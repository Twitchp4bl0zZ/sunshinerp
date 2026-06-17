// ==========================================================================
// PORTAL AZUL RP - LÓGICA DEL STAFF PANEL (ADMINISTRACIÓN)
// ==========================================================================

// --- Carga Inicial ---
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar visitas totales si no existen
  if (!localStorage.getItem("sunshine_views")) {
    localStorage.setItem("sunshine_views", "3842");
  }
  
  // Renderizar vistas iniciales de administración
  loadAdminTable();
  renderAdminStats();
  
  // Simular aumento de visitas en tiempo real para dinamismo
  setInterval(() => {
    let views = parseInt(localStorage.getItem("sunshine_views")) || 0;
    views += Math.floor(Math.random() * 3) + 1; // +1 a +3 visitas
    localStorage.setItem("sunshine_views", views.toString());
    
    // Actualizar visualmente si estamos en la pestaña
    const viewsEl = document.getElementById("admin-total-views");
    if (viewsEl) viewsEl.textContent = views.toLocaleString();
  }, 12000);
});

// --- Renderizar Estadísticas en Dashboard ---
function renderAdminStats() {
  const rulesEl = document.getElementById("admin-total-rules");
  const editEl = document.getElementById("admin-last-edit");
  const viewsEl = document.getElementById("admin-total-views");
  
  if (!rulesEl || !editEl || !viewsEl) return;
  
  const rules = getRules();
  const views = parseInt(localStorage.getItem("sunshine_views")) || 3842;
  
  // Buscar fecha del artículo más reciente
  let lastDate = "2026-06-13";
  if (rules.length > 0) {
    const dates = rules.map(r => new Date(r.lastUpdated));
    const maxDate = new Date(Math.max.apply(null, dates));
    lastDate = maxDate.toISOString().split('T')[0];
  }
  
  rulesEl.textContent = rules.length;
  editEl.textContent = lastDate;
  viewsEl.textContent = views.toLocaleString();
}

// --- Renderizar Tabla de Gestión de Artículos ---
function loadAdminTable() {
  const tbody = document.getElementById("admin-rules-tbody");
  if (!tbody) return;
  
  const rules = getRules();
  
  if (rules.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">
          No hay artículos publicados. Redacta el primero usando el formulario.
        </td>
      </tr>
    `;
    return;
  }
  
  tbody.innerHTML = rules.map(r => `
    <tr>
      <td>
        <div class="admin-table-product">
          <div class="logo-icon" style="width: 32px; height: 32px; font-size: 0.9rem; border-radius: 6px;"><i class="fa-solid ${r.icon || 'fa-file-lines'}"></i></div>
          <div>
            <div class="admin-table-product-name">${r.title}</div>
            <div style="font-size: 0.75rem; color: var(--color-text-muted);">Tag: ${r.tag}</div>
          </div>
        </div>
      </td>
      <td>
        <span style="text-transform: uppercase; font-size: 0.75rem; font-weight: 700; background: var(--bg-surface-elevated); padding: 0.25rem 0.5rem; border-radius: 4px; border: 1px solid var(--border-color)">
          ${r.category}
        </span>
      </td>
      <td style="font-weight: 600; color: var(--color-text-secondary); font-size: 0.85rem;">
        ${r.lastUpdated}
      </td>
      <td>
        <div class="admin-actions-cell">
          <button class="btn-admin-action delete" onclick="handleDeleteRule('${r.id}')" title="Eliminar artículo" aria-label="Eliminar artículo">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// --- Inserción de Formato Rápido en Textarea ---
function insertFormat(type) {
  const textarea = document.getElementById("rule-content");
  if (!textarea) return;
  
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;
  const selectedText = value.substring(start, end);
  
  let formattedText = "";
  
  if (type === "kbd") {
    formattedText = `<kbd>${selectedText || 'TECLA'}</kbd>`;
  } else if (type === "important") {
    formattedText = `
<div class="alert alert-important">
  <i class="fa-solid fa-triangle-exclamation"></i>
  <div>
    <strong>IMPORTANTE:</strong> ${selectedText || 'Redacta aquí una advertencia o aclaración clave de la regla.'}
  </div>
</div>
`;
  } else if (type === "danger") {
    formattedText = `
<div class="alert alert-danger">
  <i class="fa-solid fa-circle-xmark"></i>
  <div>
    <strong>PROHIBIDO:</strong> ${selectedText || 'Acción que se considera anti-rol o que amerita sanción directa.'}
  </div>
</div>
`;
  }
  
  textarea.value = value.substring(0, start) + formattedText + value.substring(end);
  
  // Reposicionar el cursor
  textarea.focus();
  textarea.selectionStart = start + formattedText.length;
  textarea.selectionEnd = start + formattedText.length;
}

// --- Formulario: Publicar Artículo ---
function handlePublishRule(event) {
  event.preventDefault();
  
  const title = document.getElementById("rule-title").value.trim();
  const category = document.getElementById("rule-category").value;
  const tag = document.getElementById("rule-tag").value.trim() || "NUEVO";
  const iconInput = document.getElementById("rule-icon").value.trim();
  const summary = document.getElementById("rule-summary").value.trim();
  const content = document.getElementById("rule-content").value.trim();
  
  // Asignar icono por defecto por categoría si está vacío
  const defaultIcons = {
    concepts: "fa-book-open",
    general: "fa-gavel",
    factions: "fa-building-shield",
    commands: "fa-keyboard"
  };
  const icon = iconInput !== "" ? iconInput : (defaultIcons[category] || "fa-file-lines");
  
  const ruleData = {
    title,
    category,
    tag,
    icon,
    summary,
    content
  };
  
  // Guardar artículo
  const newRule = addRule(ruleData);
  
  // Limpiar formulario
  document.getElementById("add-rule-form").reset();
  
  // Notificación
  if (typeof showToast === 'function') {
    showToast(`Artículo "${newRule.title}" publicado con éxito`, "success");
  }
  
  // Recargar vistas
  loadAdminTable();
  renderAdminStats();
  
  // Asignar como artículo activo
  if (typeof activeArticleId !== 'undefined') {
    activeArticleId = newRule.id;
  }
}

// --- Eliminar Artículo ---
function handleDeleteRule(id) {
  if (confirm("¿Estás seguro de que deseas eliminar permanentemente este artículo de normativa?")) {
    deleteRule(id);
    
    if (typeof showToast === 'function') {
      showToast("Artículo eliminado del portal", "info");
    }
    
    // Si borramos el artículo activo, seleccionar otro por defecto
    if (activeArticleId === id) {
      const remaining = getRules();
      activeArticleId = remaining.length > 0 ? remaining[0].id : null;
    }
    
    // Recargar vistas
    loadAdminTable();
    renderAdminStats();
  }
}
