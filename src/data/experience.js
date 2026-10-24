// Experiencia profesional — transcrita literalmente de docs fuente (cv-master).
// CLAIMS PROHIBIDOS: no "en producción" para Conductor/Mercanza; no "autónomo",
// "freelance" ni "clientes" para la etapa 04/2026–hoy (son proyectos propios).
export const experience = [
  {
    id: 'independent',
    role: 'Desarrollador independiente — Herramientas open source para agentes IA',
    roleEn: 'Independent Developer — Open source tools for AI agents',
    meta: 'Proyectos propios · Madrid · Remoto · 04/2026 – actualidad',
    metaEn: 'Own projects · Madrid · Remote · 04/2026 – present',
    bullets: [
      'Diseñé applyr (PyPI), una CLI operada por agentes LLM: salida --json en todos los comandos, errores estructurados a stderr y contratos documentados; 1.230 tests, 15 ADRs y releases automatizadas a PyPI con GitHub Actions.',
      'Usé applyr en mi propia búsqueda: 310 ofertas analizadas y 142 candidaturas gestionadas, con calibración de score frente a respuestas reales.',
      'Construí ClaudeStat (npm): captura cada tool call, token y coste de Claude Code y OpenCode con dashboard React en tiempo real y servidor MCP propio — 3.100+ sesiones y 63.000+ eventos en 23 proyectos.',
    ],
    bulletsEn: [
      'Designed applyr (PyPI), an LLM-operated CLI: --json output on every command, structured errors on stderr and documented contracts; 1,230 tests, 15 ADRs and automated releases to PyPI with GitHub Actions.',
      'Used applyr in my own job search: 310 offers analyzed and 142 applications managed, with score calibration against real responses.',
      'Built ClaudeStat (npm): captures every tool call, token and cost of Claude Code and OpenCode with a real-time React dashboard and its own MCP server — 3,100+ sessions and 63,000+ events across 23 projects.',
    ],
    stack: ['Python', 'TypeScript', 'Node.js', 'React', 'SQLite', 'MCP', 'GitHub Actions'],
  },
  {
    id: 'mercanza',
    role: 'Junior Developer (Prácticas FP)',
    roleEn: 'Junior Developer (FP Internship)',
    meta: 'Mercanza · Madrid · Híbrido · 02/2026 – 06/2026',
    metaEn: 'Mercanza · Madrid · Hybrid · 02/2026 – 06/2026',
    bullets: [
      'Desarrollo del módulo de ventas de Conductor, ERP modular multi-tenant con arquitectura de microservicios; equipo de 11 personas y metodología ágil con GitLab. Preparado para conectar un ERP real.',
      'Diseño del contrato de integración con el módulo de finanzas: business catalog compartido (compañías, tenants, schemas) para que ambos módulos consumieran la misma fuente de verdad.',
      'Sales Emulator y Sales Manager: facturas sintéticas con Faker publicadas en Kafka y consumidor que persiste en PostgreSQL con SQLAlchemy asíncrono — 158+ facturas procesadas end-to-end.',
      'Refactorización de base de datos: de arquitectura per-company (5 empresas, 5 tablas) a esquema centralizado (2 tablas), y alineación de los topics de Kafka entre ventas y finanzas.',
    ],
    bulletsEn: [
      'Developed the sales module of Conductor, a multi-tenant modular ERP with a microservices architecture; 11-person team using agile methodology with GitLab. Prepared to connect a real ERP.',
      'Designed the integration contract with the finance module: a shared business catalog (companies, tenants, schemas) so both modules consumed the same source of truth.',
      'Sales Emulator and Sales Manager: synthetic invoices generated with Faker and published to Kafka, plus a consumer persisting them to PostgreSQL with async SQLAlchemy — 158+ invoices processed end-to-end.',
      'Database refactor: from a per-company architecture (5 companies, 5 tables) to a centralized schema (2 tables), and alignment of Kafka topics between sales and finance.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Apache Kafka', 'Docker', 'SQLAlchemy', 'Pydantic v2', 'MongoDB', 'Traefik'],
  },
]
