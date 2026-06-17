// Base de datos de normativas por defecto para Sunshine RP
const DEFAULT_RULES = [
  {
    id: "rule-normativa-oficial-t1",
    title: "Normativa Oficial Extendida - Título I",
    category: "general",
    tag: "OBLIGATORIO",
    icon: "fa-scale-balanced",
    lastUpdated: "2026-06-13",
    summary: "Objeto, ámbito de aplicación y principios de roleplay de Sunshine RP.",
    content: `
      <p>Este documento contiene las disposiciones generales y los principios fundamentales que regulan el funcionamiento de Sunshine RP.</p>

      <div class="alert alert-important">
        <i class="fa-solid fa-scale-balanced"></i>
        <div>
          <strong>NORMATIVA OFICIAL EXTENDIDA DE SUNSHINE RP 2026 - TÍTULOS I y II</strong>
        </div>
      </div>

      <h3>TÍTULO I - DISPOSICIONES GENERALES</h3>

      <h4>Capítulo 1 - Objeto, ámbito de aplicación y carácter obligatorio</h4>

      <h5>1.1. Objeto de la normativa</h5>
      <p>La presente normativa tiene por objeto regular el funcionamiento del servidor Sunshine RP, así como la conducta de todos los jugadores y miembros del staff, tanto dentro del juego (FiveM/QBCore/Qbox) como en los espacios asociados de la comunidad (Discord y demás plataformas oficiales). Su finalidad es garantizar una experiencia de roleplay seria, coherente, ultrarrealista y sostenible en el tiempo.</p>

      <h5>1.2. Ámbito de aplicación</h5>
      <p>Esta normativa es de obligado cumplimiento para:</p>
      <ul>
        <li>Toda persona que acceda al servidor de FiveM de Sunshine RP, con independencia de su tiempo de conexión o rango.</li>
        <li>Toda persona que forme parte del Discord oficial o de cualquier otro canal oficial asociado al proyecto Sunshine RP.</li>
        <li>Todo miembro del staff, administración, desarrolladores y colaboradores, en el ejercicio de sus funciones.</li>
      </ul>
      <p>El ámbito de aplicación se extiende a cualquier conducta que, aun realizándose fuera de las plataformas oficiales, tenga impacto grave y demostrable sobre la comunidad de Sunshine RP, su estabilidad o la integridad de sus miembros.</p>

      <h5>1.3. Carácter obligatorio y aceptación</h5>
      <p>El acceso al servidor y/o a los canales oficiales implica la aceptación íntegra de esta normativa, sin necesidad de firma adicional ni de lectura expresa previa. El desconocimiento de una norma no exime de su cumplimiento ni impide la aplicación de sanciones cuando proceda.</p>

      <hr style="border: none; border-bottom: 1px dashed rgba(255, 255, 255, 0.05); margin: 2rem 0;">

      <h4>Capítulo 2 - Filosofía del servidor y principios de roleplay</h4>

      <h5>2.1. Filosofía general de Sunshine RP</h5>
      <p>Sunshine RP es un servidor de roleplay ultrarrealista en español, orientado a la construcción de historias creíbles, profundas y con consecuencias. El objetivo no es "ganar" al resto de jugadores ni acumular dinero, vehículos o poder, sino interpretar personajes con identidad propia y desarrollar tramas coherentes, tanto civiles como criminales.</p>
      <p>En Sunshine RP se prioriza la calidad del rol por encima del farmeo, del PVP y de cualquier dinámica arcade. Las decisiones del staff y de la administración estarán siempre alineadas con la protección de la inmersión, la narrativa y la estabilidad de la comunidad.</p>

      <h5>2.2. Principios básicos del roleplay</h5>
      <p>Todo jugador está obligado a respetar, como mínimo, los siguientes principios básicos:</p>
      <ul>
        <li><strong>Coherencia:</strong> el personaje debe actuar de forma consistente con su historia, carácter, contexto social y circunstancias del momento.</li>
        <li><strong>Realismo:</strong> no se admiten acciones imposibles o extremadamente inverosímiles para un ser humano medio, salvo excepciones muy justificadas por trama y autorizadas por staff.</li>
        <li><strong>Continuidad:</strong> los hechos tienen consecuencias; las escenas dejan huella; los sucesos importantes afectan a la forma en que el personaje se comporta en el futuro.</li>
      </ul>
    `
  },
  {
    id: "rule-conceptos-basicos",
    title: "Conceptos Básicos de Rol",
    category: "concepts",
    tag: "FUNDAMENTAL",
    icon: "fa-book-open",
    lastUpdated: "2026-06-13",
    summary: "Aprende los conceptos esenciales para rolear correctamente: IC, OOC, y canales de chat.",
    content: `
      <p>Para garantizar una experiencia de juego inmersiva y justa, todos los miembros de Sunshine RP deben comprender y respetar los conceptos fundamentales del juego de rol.</p>
      
      <h3>1. In Character (IC) y Out Of Character (OOC)</h3>
      <p><strong>In Character (IC):</strong> Es todo lo que realiza, dice o piensa tu personaje dentro del servidor. Todo lo relacionado con la vida virtual de tu personaje.</p>
      <p><strong>Out Of Character (OOC):</strong> Es todo lo relacionado contigo, el jugador real, fuera de la vida de tu personaje (tus problemas reales, fallos técnicos, etc.).</p>
      
      <div class="alert alert-important">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <div>
          <strong>REGLA DE ORO:</strong> Nunca debes mezclar canales. Hablar sobre temas OOC a través de canales IC (o viceversa) se considera una falta grave y será sancionado.
        </div>
      </div>

      <h3>2. Uso de Canales de Chat</h3>
      <ul>
        <li><strong>Chat de Voz local:</strong> Estrictamente IC. Debes hablar siempre metido en tu personaje.</li>
        <li><strong>Comando <kbd>/me</kbd>:</strong> Se utiliza para describir acciones físicas de tu personaje que no se pueden ver visualmente por las animaciones del juego. <em>Ejemplo: /me le entrega el documento de identidad con la mano derecha.</em></li>
        <li><strong>Comando <kbd>/do</kbd>:</strong> Se utiliza para describir el entorno, hacer preguntas sobre situaciones de rol o definir el resultado de una acción. Siempre debe decir la verdad. <em>Ejemplo: /do ¿El DNI de Carlos tiene antecedentes visibles?</em></li>
        <li><strong>Chat <kbd>/ooc</kbd> o <kbd>/b</kbd>:</strong> Chat de texto exclusivo para comunicaciones fuera de rol. Úsalo solo en casos de emergencias técnicas.</li>
      </ul>
    `
  },
  {
    id: "rule-mg-pg-dm",
    title: "Metagaming, Powergaming y DM",
    category: "concepts",
    tag: "CRÍTICO",
    icon: "fa-user-slash",
    lastUpdated: "2026-06-13",
    summary: "Definiciones claras y ejemplos de Metagaming (MG), Powergaming (PG) y Deathmatch (DM).",
    content: `
      <p>En esta sección se detallan las infracciones de rol más comunes que arruinan la experiencia de juego. Su incumplimiento conlleva sanciones directas.</p>
      
      <h3>1. Metagaming (MG)</h3>
      <p>Consiste en utilizar cualquier tipo de información obtenida fuera de los canales del personaje (OOC) para beneficio de tu personaje dentro del juego (IC).</p>
      <div class="alert alert-danger">
        <i class="fa-solid fa-circle-xmark"></i>
        <div>
          <strong>EJEMPLO DE MG:</strong> Mirar un directo en Twitch de otro jugador, ver dónde tiene un alijo de armas, e ir con tu personaje a robarlo directamente.
        </div>
      </div>
      <p>Toda la información in-game debe ser descubierta de forma orgánica a través de conversaciones, investigaciones o interacciones dentro de Los Santos.</p>

      <h3>2. Powergaming (PG)</h3>
      <p>Realizar acciones que sobrepasan los límites físicos humanos o realizar acciones dentro del juego que serían totalmente imposibles de hacer en la vida real. También incluye forzar el rol de otro jugador sin darle oportunidad de reacción.</p>
      <ul>
        <li>Chocar a 150 km/h contra una pared, salir volando del vehículo y continuar corriendo como si nada hubiera pasado (No valorar daños).</li>
        <li>Conducir un vehículo deportivo por la cima de una montaña rocosa empinada (Coche no apto para montaña).</li>
        <li>Escribir <em>/me le noquea de un golpe y le roba todo</em> sin usar un <kbd>/do</kbd> previo para preguntar si fue posible la acción.</li>
      </ul>

      <h3>3. Deathmatch (DM) y Vehicle Deathmatch (VDM)</h3>
      <p><strong>Deathmatch (DM):</strong> Agredir o asesinar a otro personaje sin un rol previo justificado ni una razón sólida de peso.</p>
      <p><strong>Vehicle Deathmatch (VDM):</strong> Utilizar tu vehículo como un arma para atropellar o embestir a otros jugadores o sus propiedades.</p>
    `
  },
  {
    id: "rule-normativa-general",
    title: "Normativa de Convivencia General",
    category: "general",
    tag: "OBLIGATORIO",
    icon: "fa-gavel",
    lastUpdated: "2026-06-13",
    summary: "Reglas fundamentales sobre el comportamiento, valorar vida y zonas seguras.",
    content: `
      <p>Todos los jugadores tienen el deber de respetar las reglas básicas de comportamiento en Sunshine RP. Buscamos fomentar una comunidad sana y madura.</p>
      
      <h3>1. Valorar la Vida de tu Personaje (VVD)</h3>
      <p>La vida de tu personaje es su posesión más valiosa. En cualquier rol donde te veas amenazado (ej. apuntado con un arma de fuego por 2 atracadores), debes actuar con miedo realista y cooperar.</p>
      <div class="alert alert-important">
        <i class="fa-solid fa-shield-heart"></i>
        <div>
          <strong>EXCEPCIONES DE VVD:</strong> No valorar tu vida al verte superado en número o armas con el único fin de iniciar un tiroteo se considera una falta grave (Anti-rol).
        </div>
      </div>

      <h3>2. Zonas Seguras (Safe Zones)</h3>
      <p>Las zonas seguras son áreas donde no está permitido realizar ningún tipo de rol delictivo, agresión, secuestro o robo. Estas zonas están altamente protegidas por cámaras y presencia policial simulada.</p>
      <p><strong>Lista de Zonas Seguras del Servidor:</strong></p>
      <ul>
        <li>Hospital General de Los Santos (Pillbox Hill).</li>
        <li>Comisarías de Policía (Mission Row, Sandy Shores, Paleto).</li>
        <li>Concesionario Principal del Centro.</li>
        <li>Zonas de spawn inicial (Aeropuerto y Plaza Central).</li>
      </ul>
      <p><em>Nota: Si inicias un rol agresivo fuera de una zona segura, no puedes refugiarte en una zona segura para evadirte (Evasión de rol).</em></p>
    `
  },
  {
    id: "rule-robos-secuestros",
    title: "Robos, Secuestros y Rehenes",
    category: "general",
    tag: "DELICTIVO",
    icon: "fa-mask",
    lastUpdated: "2026-06-13",
    summary: "Límites y normativas al realizar atracos a tiendas, bancos o secuestrar ciudadanos.",
    content: `
      <p>El rol delictivo está permitido y es parte vital del servidor, pero tiene límites estrictos para evitar abusos y dar oportunidades a la policía.</p>
      
      <h3>1. Robos a Establecimientos</h3>
      <p>Para realizar atracos debes contar con un número mínimo de agentes de policía activos en el servidor:</p>
      <table>
        <thead>
          <tr>
            <th>Tipo de Atraco</th>
            <th>Policías Mínimos</th>
            <th>Atracadores Máximos</th>
            <th>Rehenes Requeridos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tienda de 24/7</td>
            <td>2 oficiales</td>
            <td>2 personas</td>
            <td>No obligatorio</td>
          </tr>
          <tr>
            <td>Joyería Vangelico</td>
            <td>4 oficiales</td>
            <td>4 personas</td>
            <td>1 rehén</td>
          </tr>
          <tr>
            <td>Banco Fleeca</td>
            <td>5 oficiales</td>
            <td>5 personas</td>
            <td>2 rehenes</td>
          </tr>
        </tbody>
      </table>

      <h3>2. Normativa de Rehenes</h3>
      <p>Los rehenes deben ser personas reales capturadas de forma legítima. Está prohibido utilizar "rehenes de mentira" (amigos de tu banda compinchados) para negociar con la policía.</p>
      <div class="alert alert-danger">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <div>
          <strong>PROHIBICIÓN:</strong> No se puede asesinar al rehén si la policía cumple con las demandas lógicas de la negociación (ej. salida limpia y sin pinchos).
        </div>
      </div>
    `
  },
  {
    id: "rule-lspd-ems",
    title: "Cuerpos de Seguridad (LSPD y EMS)",
    category: "factions",
    tag: "FACCIONES",
    icon: "fa-building-shield",
    lastUpdated: "2026-06-13",
    summary: "Guía de conducta y deberes para oficiales de policía y personal médico del hospital.",
    content: `
      <p>Los miembros de facciones gubernamentales actúan bajo un estándar de rol institucional y profesional en Sunshine RP.</p>
      
      <h3>1. Departamento de Policía (LSPD / BCSO)</h3>
      <p>Los policías tienen la autoridad de hacer cumplir el código penal, pero deben respetar el debido proceso y la integridad física de los sospechosos.</p>
      <ul>
        <li><strong>Fuerza Proporcional:</strong> Un oficial no puede usar fuerza letal (armas de fuego) a menos que su vida o la de terceros corra peligro inminente.</li>
        <li><strong>Derechos Miranda:</strong> Al detener a un ciudadano, se le deben leer sus derechos antes del interrogatorio in-game.</li>
        <li><strong>Corrupción Policial:</strong> La corrupción policial extrema está estrictamente prohibida a menos que cuente con aprobación administrativa de rol.</li>
      </ul>

      <h3>2. Servicios Médicos (EMS)</h3>
      <p>Los médicos son personajes neutros en cualquier conflicto de bandas o persecuciones.</p>
      <div class="alert alert-info">
        <i class="fa-solid fa-circle-info"></i>
        <div>
          <strong>ZONA NEUTRAL:</strong> Está estrictamente prohibido disparar, secuestrar o robar a un médico en servicio activo. Los médicos curarán a cualquier persona sin importar su bando.
        </div>
      </div>
    `
  },
  {
    id: "rule-controles-comandos",
    title: "Controles del Servidor y Comandos",
    category: "commands",
    tag: "GUÍA RÁPIDA",
    icon: "fa-keyboard",
    lastUpdated: "2026-06-13",
    summary: "Listado de atajos de teclado y comandos de chat esenciales para moverte en la ciudad.",
    content: `
      <p>Memoriza estas teclas y comandos para interactuar de forma fluida con los menús y sistemas exclusivos de nuestro servidor.</p>
      
      <h3>1. Controles Clave (Teclado)</h3>
      <p>Usa estas teclas cuando estés dentro del servidor:</p>
      
      <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 0.75rem; background: var(--bg-surface-elevated); padding: 1.25rem; border-radius: var(--border-radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
        <div><kbd>F1</kbd></div>
        <div>Abrir Menú Radial (Animaciones, Ropa, Gestos)</div>
        
        <div><kbd>F5</kbd></div>
        <div>Abrir Inventario de tu personaje</div>
        
        <div><kbd>F10</kbd></div>
        <div>Mostrar/Ocultar lista de jugadores cercanos (ID sobre cabezas)</div>
        
        <div><kbd>E</kbd></div>
        <div>Tecla de interacción universal (Hablar con NPCs, comprar, entrar a casas)</div>
        
        <div><kbd>G</kbd></div>
        <div>Ponerse / Quitarse el cinturón de seguridad en coches</div>
        
        <div><kbd>Z</kbd></div>
        <div>Alternar el rango de voz (Susurrar, Normal, Gritar)</div>
      </div>

      <h3>2. Comandos Útiles del Chat</h3>
      <p>Escribe estos comandos en la consola pulsando la tecla <kbd>T</kbd>:</p>
      <ul>
        <li><kbd>/report [Mensaje]</kbd> - Abre un ticket de soporte directo con los administradores en línea.</li>
        <li><kbd>/auxilio</kbd> - Llama a los médicos cuando estás inconsciente y envía tu ubicación.</li>
        <li><kbd>/entorno [Descripción]</kbd> - Avisa a la policía sobre un delito cometido en el entorno (Simulando testigos locales).</li>
        <li><kbd>/dados [Número]</kbd> - Lanza un dado del 1 al número especificado para resolver situaciones de azar.</li>
      </ul>
    `
  }
];

// Obtener las reglas activas de localStorage o inicializarlas con las por defecto
function getRules() {
  const rules = localStorage.getItem("sunshine_rules");
  if (!rules) {
    localStorage.setItem("sunshine_rules", JSON.stringify(DEFAULT_RULES));
    return DEFAULT_RULES;
  }
  
  // Lógica de autoreparación: si no contiene nuestra nueva regla Título I, resetear/fusionar para forzar actualización
  const parsed = JSON.parse(rules);
  const hasOfficialRule = parsed.some(r => r.id === "rule-normativa-oficial-t1");
  if (!hasOfficialRule) {
    localStorage.setItem("sunshine_rules", JSON.stringify(DEFAULT_RULES));
    return DEFAULT_RULES;
  }
  
  return parsed;
}

// Guardar lista completa de reglas
function saveRules(rules) {
  localStorage.setItem("sunshine_rules", JSON.stringify(rules));
}

// Agregar un nuevo artículo de normativa
function addRule(ruleData) {
  const rules = getRules();
  const id = "rule-" + Date.now();
  
  const newRule = {
    id: id,
    title: ruleData.title,
    category: ruleData.category,
    tag: ruleData.tag || "NUEVO",
    icon: ruleData.icon || "fa-file-lines",
    lastUpdated: new Date().toISOString().split('T')[0],
    summary: ruleData.summary || "Sin resumen disponible.",
    content: ruleData.content || "<p>Sin contenido redactado.</p>"
  };
  
  rules.push(newRule);
  saveRules(rules);
  return newRule;
}

// Eliminar un artículo de normativa
function deleteRule(id) {
  let rules = getRules();
  rules = rules.filter(r => r.id !== id);
  saveRules(rules);
  return true;
}

// Actualizar un artículo existente
function updateRule(id, updatedData) {
  const rules = getRules();
  const index = rules.findIndex(r => r.id === id);
  
  if (index !== -1) {
    rules[index] = {
      ...rules[index],
      ...updatedData,
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    saveRules(rules);
    return rules[index];
  }
  return null;
}
