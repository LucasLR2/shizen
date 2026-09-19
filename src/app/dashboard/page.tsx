import "./dashboard.css";

// Icono de Calendario / Agenda para el Header
const AgendaHeaderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="agenda-header-icon"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
);

// Icono de Calendario pequeño para las tareas
const CalendarMiniIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="task-date-icon"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      {/* Sección Superior (Hero + Agenda) */}
      <div className="dashboard-top-section">
        {/* Banner Principal */}
        <div className="hero-card">
          <div>
            <span className="hero-subtitle">BUENAS NOCHES,</span>
            <h1 className="hero-title">LucasLR2</h1>
            <p className="hero-quote">
              Que la disciplina de hoy construya la libertad de mañana.
            </p>
          </div>

          <div>
            <div className="hero-time">9:07 p. m.</div>
            <div className="hero-date">MARTES 15 DE SEPTIEMBRE</div>
          </div>
        </div>

        {/* Panel de Agenda */}
        <div className="agenda-card">
          {/* Cabecera */}
          <div className="agenda-header">
            <AgendaHeaderIcon />
            <h2>Agenda</h2>
          </div>

          <div className="agenda-content">
            {/* Sección Siguiente Tarea */}
            <div className="agenda-section">
              <span className="agenda-section-title">Siguiente tarea</span>
              
              <div className="task-card featured">
                <div className="task-header">
                  <div className="task-title-group">
                    <span className="dot red"></span>
                    <span className="task-title">Entrega de shizen</span>
                  </div>
                  <span className="time-badge red">En 4h</span>
                </div>

                <div className="task-datetime">
                  <CalendarMiniIcon />
                  <span>Lun. 21 · 13:00</span>
                </div>

                <p className="task-description">
                  Entregar el diseño final de la app Shizen al cliente.
                </p>
              </div>
            </div>

            {/* Sección Próximas Tareas */}
            <div className="agenda-section">
              <span className="agenda-section-title">Próximas tareas</span>

              <div className="task-list">
                {/* Tarea 1 */}
                <div className="task-card">
                  <div className="task-header">
                    <div className="task-title-group">
                      <span className="dot red"></span>
                      <span className="task-title">Reunión con equipo</span>
                    </div>
                    <span className="time-badge">En 2d</span>
                  </div>
                  <div className="task-datetime">
                    <CalendarMiniIcon />
                    <span>Mié. 22 · 10:00</span>
                  </div>
                </div>

                {/* Tarea 2 */}
                <div className="task-card">
                  <div className="task-header">
                    <div className="task-title-group">
                      <span className="dot red"></span>
                      <span className="task-title">Revisar código</span>
                    </div>
                    <span className="time-badge">En 3d</span>
                  </div>
                  <div className="task-datetime">
                    <CalendarMiniIcon />
                    <span>Jue. 23 · 16:00</span>
                  </div>
                </div>

                {/* Tarea 3 */}
                <div className="task-card">
                  <div className="task-header">
                    <div className="task-title-group">
                      <span className="dot red"></span>
                      <span className="task-title">Gym</span>
                    </div>
                    <span className="time-badge">En 4d</span>
                  </div>
                  <div className="task-datetime">
                    <CalendarMiniIcon />
                    <span>Vie. 24 · 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fila Inferior: Panel de Estadísticas */}
      <div className="stats-bar">
        {/* Notas */}
        <div className="stat-item">
          <div className="stat-text-group">
            <span className="stat-label">Notas</span>
            <span className="stat-number">8</span>
          </div>
          <div className="stat-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="8" y1="13" x2="16" y2="13"/>
              <line x1="8" y1="17" x2="12" y2="17"/>
            </svg>
          </div>
        </div>

        {/* Cuentas */}
        <div className="stat-item">
          <div className="stat-text-group">
            <span className="stat-label">Cuentas</span>
            <span className="stat-number">4</span>
          </div>
          <div className="stat-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        {/* Links */}
        <div className="stat-item">
          <div className="stat-text-group">
            <span className="stat-label">Links</span>
            <span className="stat-number">9</span>
          </div>
          <div className="stat-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
          </div>
        </div>

        {/* Proyectos */}
        <div className="stat-item">
          <div className="stat-text-group">
            <span className="stat-label">Proyectos</span>
            <span className="stat-number">2</span>
          </div>
          <div className="stat-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3A2 2 0 0 0 6.9 2.5H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}