const portfolioCaseIdList = [
  'fraud-detection',
  'ai-voice-assistant',
  'notification-service',
  'atm-consent-signing',
  'engineering-project-management',
  'engineering-management-oil-gas',
  'unified-information-space',
  'financial-management-project-planning',
  'engineering-data-document-management',
  'procurement-supply-chain',
  'bpmn-er-modeler'
];

const portfolioSectorIdList = ['all', 'telecom', 'fintech', 'construction', 'oil-gas', 'other'];

export const defaultPortfolioCaseId = portfolioCaseIdList[0];
export const defaultPortfolioSectorId = portfolioSectorIdList[0];

export const portfolioCaseIds = new Set(portfolioCaseIdList);
export const portfolioSectorIds = new Set(portfolioSectorIdList);

export const portfolioPageContent = {
  en: {
    metaTitle: 'Portfolio - Vladimir Belov',
    metaDescription:
      'Selected case studies by Vladimir Belov across telecom, fintech, industrial construction, and oil and gas covering antifraud, service design, engineering project management, ATM consent signing, and procurement systems.',
    title: 'Portfolio',
    description:
      'Selected case studies focused on requirements, analytical artifacts, architecture, and project documentation across telecom, fintech, and industrial construction.',
    menuTitle: 'Projects',
    sectors: {
      all: 'All',
      telecom: 'Telecom',
      fintech: 'Fintech',
      construction: 'Construction',
      'oil-gas': 'Oil & Gas',
      other: 'Modeling tools'
    },
    sections: {
      description: 'Project description',
      preparedArtifacts: 'Artifacts',
      technologies: 'Technologies',
      outcome: 'Results'
    }
  },
  ru: {
    metaTitle: 'Портфолио - Vladimir Belov',
    metaDescription:
      'Избранные кейсы Владимира Белова в телекоме, финтехе, промышленном строительстве и нефтегазе: антифрод, сервисы для телекома, управление инжиниринговыми проектами, подписание согласий в АТМ и система закупок.',
    title: 'Портфолио',
    description:
      'Избранные кейсы с фокусом на требованиях, аналитических артефактах, архитектуре и проектной документации для телекома, финтеха и промышленного строительства.',
    menuTitle: 'Проекты',
    sectors: {
      all: 'Все',
      telecom: 'Телеком',
      fintech: 'Финтех',
      construction: 'Строительство',
      'oil-gas': 'Нефтегаз',
      other: 'Инструменты моделирования'
    },
    sections: {
      description: 'Описание проекта',
      preparedArtifacts: 'Артефакты',
      technologies: 'Технологии',
      outcome: 'Результаты'
    }
  }
};

export const portfolioCases = {
  en: [
    {
      id: 'fraud-detection',
      sectors: ['telecom'],
      title: 'Fraud Detection',
      company: 'Alfa-Mobile',
      role: 'Information Security Direction Analyst',
      contextLine: 'Alfa-Mobile · Systems & Business Analysis · Antifraud',
      summary:
        'Prepared analytical artifacts and requirements for a telecom antifraud initiative at the intersection of MVNO operations and the bank’s fraud prevention system, covering fraud scenarios, business-significant events, detection logic, and mitigation measures.',
      preparedArtifacts: [
        'Fraud scenario registry classified across five anomaly groups: behavioral, financial, contextual, technical, and client-related.',
        'Detection metrics, threshold values, and calculation approaches for fraud monitoring.',
        'Business-significant events, data sources, and control actions for MVNO-to-bank fraud prevention integration.',
        'AI fraud detection scenarios and requirements for the antifraud system.'
      ],
      technologies: ['Kafka', 'SS7', 'OCS Forward Fusion', 'DMS', 'IBM DataPower', 'SMS Center', 'REST'],
      outcome: [
        'Developed and implemented an antifraud system.',
        'Implemented integration with the bank’s fraud prevention system.',
        'Reduced fraud risks for clients and the company.'
      ]
    },
    {
      id: 'ai-voice-assistant',
      sectors: ['telecom'],
      title: 'AI Voice Assistant',
      company: 'Alfa-Mobile',
      role: 'Information Security Direction Analyst',
      contextLine: 'Alfa-Mobile · Systems & Business Analysis · Antifraud',
      summary:
        'Prepared requirements for an AI voice assistant for subscriber interactions, focusing on service scenarios and the analytical artifacts needed for further solution design.',
      preparedArtifacts: [
        'Functional requirements.',
        'Non-functional requirements.',
        'Customer journey maps (CJM).',
        'BPMN diagrams for service scenarios.'
      ],
      technologies: ['Just AI', 'Kafka', 'Keycloak', 'S3 MinIO', 'IBM DataPower', 'PostgreSQL', 'MongoDB', 'REST'],
      outcome: [
        'Implemented an AI voice assistant for subscriber interactions.'
      ]
    },
    {
      id: 'notification-service',
      sectors: ['telecom'],
      title: 'Notification Service',
      company: 'Alfa-Mobile',
      role: 'Information Security Direction Analyst',
      contextLine: 'Alfa-Mobile · Systems & Business Analysis · Antifraud',
      summary:
        'Prepared analytical artifacts for a notification service, with focus on communication scenarios, API description, and high-level architecture boundaries.',
      preparedArtifacts: [
        'Functional requirements.',
        'BPMN diagrams.',
        'REST API specification.',
        'C4 Level 1 architecture artifacts.'
      ],
      technologies: ['REST API', 'Go', 'Kafka', 'PostgreSQL', 'MongoDB', 'Microservices'],
      outcome: [
        'Developed and implemented a notification service.',
        'All notifications are handled through this service.'
      ]
    },
    {
      id: 'atm-consent-signing',
      sectors: ['fintech'],
      title: 'ATM Consent Signing',
      company: 'Innotech',
      role: 'Lead Systems Analyst',
      contextLine: 'Innotech · Systems & Business Analysis · Fintech',
      summary:
        'Prepared a full analytical package for signing credit bureau and related consents at ATMs, covering business justification, requirements, API design, data modeling, and risk analysis.',
      preparedArtifacts: [
        'Business case and economic effects.',
        'Business, functional, non-functional, and integration requirements.',
        'REST API design and data model artifacts, including class and ER diagrams.',
        'Risk description with financial impact calculation, mitigation measures, CJM, and MVP scope.'
      ],
      technologies: ['REST API', 'Java EE', 'PostgreSQL', 'Microservices'],
      outcome: [
        'Implemented credit bureau and related consent signing at ATMs.',
        'Improved loan issuance to bank clients.'
      ]
    },
    {
      id: 'engineering-project-management',
      sectors: ['construction'],
      title: 'Engineering Project Management',
      company: 'Mosinzhproekt',
      role: 'Lead Specialist',
      contextLine: 'Mosinzhproekt · Systems Analysis · Construction',
      summary:
        'Developed the target business architecture and requirements for an information system for engineering project management, including technical document management and integration with planning tools.',
      preparedArtifacts: [
        'Target business processes.',
        'Role model.',
        'Data model.',
        'Functional requirements for the information system.',
        'Test program and methodology.',
        'Implementation methodology.'
      ],
      technologies: ['Oracle Primavera', '1C PM'],
      outcome: [
        'Implemented an engineering project management and technical document control system.',
        'Implemented modules for contract management, budgeting, engineering data, resource management, and Oracle Primavera integration.'
      ]
    },
    {
      id: 'engineering-management-oil-gas',
      sectors: ['construction', 'oil-gas'],
      title: 'Engineering Project Management in Industrial Construction (Oil & Gas)',
      company: 'NIPIGAZ',
      role: 'Information Systems Architect',
      sectorLabel: 'Oil & Gas and Construction',
      contextLine: 'NIPIGAZ · Oil & Gas and Construction',
      summary:
        'Developed the architecture of an engineering project management system for oil and gas construction, focused on planning accuracy, engineering data continuity, and integration across project delivery processes.',
      preparedArtifacts: [
        'Functional requirements.',
        'System architecture.',
        'Integration requirements.',
        'Test program and methodology.'
      ],
      technologies: ['Oracle Primavera', '1C Accounting', '1C UH', '1C ERP', 'AVEVA PDMS', 'CAD systems', 'SOAP', 'MS SQL'],
      outcome: [
        'Developed the architecture of an engineering project management system for oil and gas construction.',
        'Implemented planning, budgeting, treasury, and integrations with related systems.'
      ]
    },
    {
      id: 'unified-information-space',
      sectors: ['construction', 'oil-gas'],
      title: 'Unified Information Space for a Design Institute',
      company: 'VNIPIneft',
      role: 'Head of Unit',
      sectorLabel: 'Oil & Gas and Construction',
      contextLine: 'VNIPIneft · Oil & Gas and Construction',
      summary:
        'Analyzed first- and second-level processes and the current information landscape, then proposed process optimization, reengineering measures, and a strategy for creating a unified information space to manage the production processes of a design institute.',
      preparedArtifacts: [
        'Project goals and charter.',
        'Budget model.',
        'System architecture.',
        'Business, functional, and non-functional requirements.',
        'Target processes, class diagrams, ER diagrams, and integration requirements.',
        'Screen forms, testing methodology, and implementation methodology.'
      ],
      technologies: ['MS SQL', '1C ERP', 'Oracle Primavera', 'AutoCAD', 'Aveva PDMS', 'SOAP'],
      outcome: [
        'Created a unified information system for project management, resource management, and engineering document control.',
        'Implemented early-stage incident forecasting, risk management, and estimation of project cost and duration.',
        'Reduced project timelines and costs and improved project quality.',
        'The system was used by about 800 employees and handled about 450,000 files totaling 6 TB, with up to 90,000 transactions per month and peak throughput of 25 transactions per second.'
      ]
    },
    {
      id: 'financial-management-project-planning',
      sectors: ['construction', 'oil-gas'],
      title: 'Budgeting, Contracts, and Settlements in Engineering Projects',
      company: 'Giprovostokneft',
      role: 'Lead Software Engineer',
      sectorLabel: 'Oil & Gas and Construction',
      contextLine: 'Giprovostokneft · Oil & Gas and Construction',
      summary:
        'Developed and implemented systems for treasury, budgeting, financial control, and project planning in a design institute, including integrations with the corporate portal and Oracle Primavera.',
      preparedArtifacts: [
        'Treasury, cash flow budgeting, income and expense budgeting, and investment budget modules.',
        'Functional budgets for production, sales, payroll, investments, and credit lines.',
        'Multi-currency settlements, contract accounting, addenda tracking, and term control.',
        'Analytical reporting, debt forecasting, what-if analysis, and factor analysis.',
        'Project volume-calendar planning, subcontract work accounting, and calendar planning.',
        'Integrations with 1C ZUP, the corporate portal, and Oracle Primavera.'
      ],
      technologies: ['.NET C#', '1C Accounting', 'Intalev Corporate Finance', 'MS SQL', 'MS SharePoint', 'Oracle Primavera', 'SOAP'],
      outcome: [
        'Implemented a financial management and project planning system for about 1000 users.',
        'Reduced short-term loan debt and enterprise expenses. Improved settlement transparency, forecasting, and control of financial condition and risks.'
      ]
    },
    {
      id: 'engineering-data-document-management',
      sectors: ['construction'],
      title: 'Engineering Data Management and Engineering Document Control',
      company: 'Enter Engineering Russia',
      role: 'Systems Analyst',
      summary:
        'Prepared requirements and technical design artifacts for engineering data management and engineering document control in industrial construction based on Intergraph Hexagon.',
      preparedArtifacts: [
        'Technical design for engineering data management covering 1D, 2D, and 3D data.',
        'Requirements for technical document management.',
        'System scope for engineering document release and related engineering data flows.',
        'System landscape description for SDx as the engineering document management system.'
      ],
      technologies: ['Intergraph Hexagon SDx', 'Intergraph Hexagon SRD', 'CAD systems', 'REST'],
      outcome: [
        'Implemented a subsystem for engineering data management and engineering document control.',
        'Implemented workflows for engineering document release and management of 1D, 2D, and 3D data.'
      ]
    },
    {
      id: 'procurement-supply-chain',
      sectors: ['construction'],
      title: 'Procurement & Supply Chain Management',
      company: 'Enter Engineering Russia',
      role: 'Systems Analyst',
      contextLine: 'Enter Engineering Russia · Systems Analysis · Construction',
      summary:
        'Prepared requirements and technical design artifacts for procurement, logistics, supply chain, and construction handover processes for industrial construction based on Smart Materials, Smart Reference Data, and 1C ERP USO.',
      preparedArtifacts: [
        'Requirements for procurement and logistics management.',
        'Requirements for construction work execution and handover to operations.',
        'Requirements for master and reference data management.',
        'System landscape description covering Smart Materials, Smart Reference Data, and 1C ERP USO.'
      ],
      technologies: ['Intergraph Hexagon', 'Smart Materials', 'Smart Reference Data', 'REST', 'SOAP', '1C ERP USO', 'Oracle DB'],
      outcome: [
        'Implemented a procurement and supply chain management system.',
        'Implemented the integration contour for procurement, logistics, reference data, and handover to operations.'
      ]
    },
    {
      id: 'bpmn-er-modeler',
      sectors: ['other'],
      title: 'BPMN/ER Modeler',
      company: 'Personal project',
      role: 'Authorial tool',
      contextLine: 'Personal project · Other projects',
      summary:
        'Developed a local BPMN/ER Modeler: a BPMN editor based on BPMN.io (bpmn-js) and an ER editor built on a custom DSL based on DBML/dbdiagram.io syntax.',
      preparedArtifacts: [],
      technologies: [
        'BPMN.io (bpmn-js)',
        'DBML',
        'HTML',
        'CSS',
        'JavaScript',
        'SVG',
        'File System Access API',
        'Canvas API'
      ],
      outcome: [
        'Implemented a local tool for BPMN process modeling and ER diagrams.',
        'Combined process and data modeling in a single workspace without server-side infrastructure.'
      ]
    }
  ],
  ru: [
    {
      id: 'fraud-detection',
      sectors: ['telecom'],
      title: 'Антифрод',
      company: 'Alfa-Mobile',
      role: 'Аналитик направления информационной безопасности',
      contextLine: 'Alfa-Mobile · Системный и бизнес-анализ · Антифрод',
      summary:
        'Подготовил аналитические артефакты и требования для телеком-антифрод инициативы на стыке MVNO и банковской СПМ: сценарии фрода, бизнес-значимые события, логика детекции и меры митигации рисков.',
      preparedArtifacts: [
        'Реестр сценариев фрода с классификацией по пяти типам аномалий: поведенческим, финансовым, контекстным, техническим и клиентским.',
        'Метрики детекции, пороговые значения и подходы к расчету для мониторинга фрода.',
        'Бизнес-значимые события, источники данных и управляющие действия для взаимодействия MVNO и банковской СПМ.',
        'AI-сценарии выявления фрода и требования к системе антифрода.'
      ],
      technologies: ['Kafka', 'SS7', 'OCS Forward Fusion', 'DMS', 'IBM DataPower', 'SMS-центр', 'REST'],
      outcome: [
        'Разработана и внедрена антифрод-система.',
        'Реализована интеграция с банковской системой противодействия мошенничеству.',
        'Снижены риски фрода для клиентов и компании.'
      ]
    },
    {
      id: 'ai-voice-assistant',
      sectors: ['telecom'],
      title: 'AI-голосовой помощник',
      company: 'Alfa-Mobile',
      role: 'Аналитик направления информационной безопасности',
      contextLine: 'Alfa-Mobile · Системный и бизнес-анализ · Антифрод',
      summary:
        'Подготовил требования для AI-голосового помощника для взаимодействия с абонентами, с акцентом на сервисные сценарии и аналитические артефакты для дальнейшего проектирования решения.',
      preparedArtifacts: [
        'Функциональные требования.',
        'Нефункциональные требования.',
        'Карты клиентского пути (CJM).',
        'BPMN-схемы сервисных сценариев.'
      ],
      technologies: ['Just AI', 'Kafka', 'Keycloak', 'S3 MinIO', 'IBM DataPower', 'PostgreSQL', 'MongoDB', 'REST'],
      outcome: [
        'Внедрен AI-голосовой помощник для взаимодействия с абонентами.'
      ]
    },
    {
      id: 'notification-service',
      sectors: ['telecom'],
      title: 'Сервис нотификации',
      company: 'Alfa-Mobile',
      role: 'Аналитик направления информационной безопасности',
      contextLine: 'Alfa-Mobile · Системный и бизнес-анализ · Антифрод',
      summary:
        'Подготовил аналитические артефакты для сервиса нотификации с фокусом на коммуникационных сценариях, описании API и высокоуровневых архитектурных границах.',
      preparedArtifacts: [
        'Функциональные требования.',
        'BPMN-схемы.',
        'Спецификация REST API.',
        'Архитектурные артефакты C4 Level 1.'
      ],
      technologies: ['REST API', 'Go', 'Kafka', 'PostgreSQL', 'MongoDB', 'Микросервисы'],
      outcome: [
        'Разработан и внедрен сервис нотификации.',
        'Все нотификации происходят через этот сервис.'
      ]
    },
    {
      id: 'atm-consent-signing',
      sectors: ['fintech'],
      title: 'Подписание согласий в АТМ',
      company: 'Иннотех',
      role: 'Главный системный аналитик',
      contextLine: 'Иннотех · Системный и бизнес-анализ · Финтех',
      summary:
        'Подготовил полный аналитический пакет для проекта подписания согласий БКИ и других согласий в АТМ: от бизнес-обоснования и требований до API, модели данных и описания рисков.',
      preparedArtifacts: [
        'Бизнес-кейс и экономические эффекты.',
        'Бизнес-, функциональные, нефункциональные и интеграционные требования.',
        'Проектирование REST API и артефакты модели данных, включая диаграммы классов и ER-диаграммы.',
        'Описание рисков с расчетом финансовых последствий, мерами митигации, CJM и границами MVP.'
      ],
      technologies: ['REST API', 'Java EE', 'PostgreSQL', 'Микросервисы'],
      outcome: [
        'Реализовано подписание согласий БКИ и других согласий в АТМ.',
        'Повысилась выдача кредитов клиентам банка.'
      ]
    },
    {
      id: 'engineering-project-management',
      sectors: ['construction'],
      title: 'Управление инжиниринговыми проектами',
      company: 'Мосинжпроект',
      role: 'Главный специалист',
      contextLine: 'Мосинжпроект · Системный анализ · Строительство',
      summary:
        'Разработал целевую бизнес-архитектуру и требования к информационной системе управления инжиниринговыми проектами, включая развитие системы технического документооборота и интеграцию с инструментами планирования.',
      preparedArtifacts: [
        'Целевые бизнес-процессы.',
        'Ролевая модель.',
        'Модель данных.',
        'Функциональные требования к информационной системе.',
        'Программа и методика испытаний.',
        'Методика внедрения.'
      ],
      technologies: ['Oracle Primavera', '1С PM'],
      outcome: [
        'Внедрена система управления инжиниринговыми проектами и техническим документооборотом.',
        'Реализованы блоки управления договорами, бюджетами, инженерными данными, ресурсами и интеграцией с Oracle Primavera.'
      ]
    },
    {
      id: 'engineering-management-oil-gas',
      sectors: ['construction', 'oil-gas'],
      title: 'Управление инжиниринговыми проектами в промышленном строительстве (нефть, газ)',
      company: 'НИПИгазпереработка',
      role: 'Архитектор информационных систем',
      sectorLabel: 'Нефтегаз и строительство',
      contextLine: 'НИПИгазпереработка · Нефтегаз и строительство',
      summary:
        'Разработал архитектуру системы управления инжиниринговыми проектами для нефтегазового строительства с фокусом на точности планирования, сквозном учете материалов и оборудования и интеграции процессов проектирования, поставок и строительства.',
      preparedArtifacts: [
        'Функциональные требования.',
        'Архитектура системы.',
        'Интеграционные требования.',
        'Программа и методика испытаний.'
      ],
      technologies: ['Oracle Primavera', '1С Бухгалтерия', '1С УХ', '1С ERP', 'AVEVA PDMS', 'CAD-системы', 'SOAP', 'MS SQL'],
      outcome: [
        'Разработана архитектура системы управления инжиниринговыми проектами для нефтегазового строительства.',
        'Реализовано: планирование, бюджетирование, казначейство и интеграции со смежными системами.'
      ]
    },
    {
      id: 'unified-information-space',
      sectors: ['construction', 'oil-gas'],
      title: 'Единое информационное пространство проектного института',
      company: 'ВНИПИнефть',
      role: 'Руководитель сектора',
      sectorLabel: 'Нефтегаз и строительство',
      contextLine: 'ВНИПИнефть · Нефтегаз и строительство',
      summary:
        'Провел анализ процессов первого и второго уровня и текущего информационного ландшафта компании, предложил меры по оптимизации и реинжинирингу процессов, а также стратегию создания и развития единого информационного пространства для управления производственными процессами проектного института.',
      preparedArtifacts: [
        'Цели и устав проекта.',
        'Бюджетная модель.',
        'Архитектура системы.',
        'Бизнес-, функциональные и нефункциональные требования.',
        'Целевые процессы, диаграммы классов, ER-диаграммы и интеграционные требования.',
        'Экранные формы, методика тестирования и методика внедрения.'
      ],
      technologies: ['MS SQL', '1С ERP', 'Oracle Primavera', 'AutoCAD', 'Aveva PDMS', 'SOAP'],
      outcome: [
        'Создана единая информационная система управления проектами, ресурсами и инженерным документооборотом.',
        'Реализованы прогнозирование инцидентов на ранней стадии, управление рисками и оценка стоимости и длительности проектных работ.',
        'Сокращены сроки и стоимость проектов, повышено качество проектных работ.',
        'Системой пользовались около 800 сотрудников; обрабатывалось около 450000 файлов общим объемом 6 ТБ, до 90000 транзакций в месяц при пиковой производительности 25 транзакций в секунду.'
      ]
    },
    {
      id: 'financial-management-project-planning',
      sectors: ['construction', 'oil-gas'],
      title: 'Управление бюджетированием, договорами и взаиморасчетами в инжиниринговых проектах',
      company: 'Гипровостокнефть',
      role: 'Ведущий инженер-программист',
      sectorLabel: 'Нефтегаз и строительство',
      contextLine: 'Гипровостокнефть · Нефтегаз и строительство',
      summary:
        'Разработал и внедрил системы для казначейства, бюджетирования, финансового контроля и проектного планирования в проектном институте, включая интеграции с корпоративным порталом и Oracle Primavera.',
      preparedArtifacts: [
        'Модули казначейства, БДДС, БДР и инвестиционного бюджета.',
        'Функциональные бюджеты по производству, реализации, заработной плате, инвестициям и кредитным линиям.',
        'Многовалютные взаиморасчеты, учет договоров и дополнительных соглашений, контроль изменений, сроков и условий.',
        'Аналитическая отчетность, прогнозирование задолженности, анализ «что если» и факторный анализ.',
        'Объемно-календарное планирование по проектам, учет субподрядных работ и календарное планирование.',
        'Интеграции с 1С ЗУП, корпоративным порталом и Oracle Primavera.'
      ],
      technologies: ['.NET C#', '1С Бухгалтерия', 'Инталев Корпоративные финансы', 'MS SQL', 'MS SharePoint', 'Oracle Primavera', 'SOAP'],
      outcome: [
        'Внедрена система финансового управления и проектного планирования примерно для 1000 пользователей.',
        'Сокращена краткосрочная кредитная задолженность и расходы предприятия. Повышена прозрачность расчетов, улучшены прогнозирование и контроль финансового состояния и рисков.'
      ]
    },
    {
      id: 'engineering-data-document-management',
      sectors: ['construction'],
      title: 'Управление инженерными данными и инженерный документооборот',
      company: 'Энтер Инжиниринг Россия',
      role: 'Системный аналитик',
      summary:
        'Подготовил требования и артефакты технического проекта по управлению инженерными данными и инженерному документообороту в промышленном строительстве на базе Intergraph Hexagon.',
      preparedArtifacts: [
        'Технический проект по управлению инженерными данными, включая 1D, 2D и 3D данные.',
        'Требования по техническому документообороту.',
        'Системные границы решения по выпуску инженерной документации и связанным потокам инженерных данных.',
        'Описание системного ландшафта для SDx как системы инженерного документооборота.'
      ],
      technologies: ['Intergraph Hexagon SDx', 'Intergraph Hexagon SRD', 'CAD-системы', 'REST'],
      outcome: [
        'Внедрена система управления инженерными данными и инженерным документооборотом.',
        'Реализован контур выпуска инженерной документации и управления 1D, 2D и 3D-данными.'
      ]
    },
    {
      id: 'procurement-supply-chain',
      sectors: ['construction'],
      title: 'Управление закупками и цепочками поставок',
      company: 'Энтер Инжиниринг Россия',
      role: 'Системный аналитик',
      contextLine: 'Энтер Инжиниринг Россия · Системный анализ · Строительство',
      summary:
        'Подготовил требования и артефакты технического проекта для управления закупками, логистикой, цепочками поставок и передачей в эксплуатацию в промышленном строительстве на базе Smart Materials, Smart Reference Data и 1C ERP УСО.',
      preparedArtifacts: [
        'Требования по управлению закупками и логистикой.',
        'Требования по управлению производством строительных работ и передаче в эксплуатацию.',
        'Требования по управлению нормативно-справочной информацией.',
        'Описание системного ландшафта: Smart Materials, Smart Reference Data и 1C ERP УСО.'
      ],
      technologies: ['Intergraph Hexagon', 'Smart Materials', 'Smart Reference Data', 'REST', 'SOAP', '1C ERP УСО', 'Oracle DB'],
      outcome: [
        'Внедрена система управления закупками и цепочками поставок.',
        'Реализован интеграционный контур закупок, логистики, НСИ и передачи в эксплуатацию.'
      ]
    },
    {
      id: 'bpmn-er-modeler',
      sectors: ['other'],
      title: 'BPMN/ER Modeler',
      company: 'Личный проект',
      role: 'Авторский инструмент',
      contextLine: 'Личный проект · Прочие проекты',
      summary:
        'Разработал локальный BPMN/ER Modeler: BPMN-редактор на базе BPMN.io (bpmn-js) и ER-редактор на собственном DSL, основанном на синтаксисе DBML/dbdiagram.io.',
      preparedArtifacts: [],
      technologies: [
        'BPMN.io (bpmn-js)',
        'DBML',
        'HTML',
        'CSS',
        'JavaScript',
        'SVG',
        'File System Access API',
        'Canvas API'
      ],
      outcome: [
        'Реализован локальный инструмент для моделирования BPMN-процессов и ER-диаграмм.',
        'Объединена работа с процессными и дата-моделями в одном рабочем пространстве без серверной инфраструктуры.'
      ]
    }
  ]
};
