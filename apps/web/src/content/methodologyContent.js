export const defaultMethodologyDirectionId = 'course-business-analysis-process-management';

export const methodologyContent = {
  en: {
    metaTitle: 'Methodology - Vladimir Belov',
    metaDescription:
      'Internal courses and capability development approach by Vladimir Belov across business analysis, process management, requirements traceability, and risk management.',
    title: 'Methodology and Capability Development',
    description: 'Prepared courses and provide training in the following areas:',
    menuTitle: 'Directions',
    topicsTitle: 'Topics',
    directions: [
      {
        id: 'course-business-analysis-process-management',
        menuTitle: 'Business Analysis and Process Management',
        title: 'Business Analysis and Process Management',
        topicBlocks: [
          {
            title: 'Block 1. Fundamentals: what a process is and why it matters',
            items: [
              'What is a process',
              'What is a project',
              'Process management approach',
              'Value chain',
              'Goal setting'
            ]
          },
          {
            title: 'Block 2. Business process essence: components and management',
            items: [
              'What is a business process',
              'Steps, events, and business rules',
              'Roles and objects in a process',
              'Context and process metrics',
              'Process levels: L0-L3',
              'Process model',
              'Relationship to architecture'
            ]
          },
          {
            title: 'Block 3. Process lifecycle and improvement',
            items: [
              'AS-IS / TO-BE processes',
              'Process documentation',
              'Process implementation',
              'Shewhart-Deming cycle (PDCA)'
            ]
          },
          {
            title: 'Block 4. Modeling: notations, quality, and tools',
            items: [
              'Process modeling notations',
              'BPMN 2.0: key elements',
              'IDEF0, UML Activity, and ArchiMate',
              'Limitations',
              'Tools'
            ]
          },
          {
            title: 'Block 5. Requirements preparation and traceability',
            items: [
              'User Story: template and extraction',
              'Traceability: US → Use Cases',
              'BPMN and C4 architecture',
              'UC → process model (BPMN)',
              'Business Rules in BPMN',
              'Requirements quality attributes'
            ]
          }
        ]
      },
      {
        id: 'course-risk-management-iso-31000',
        menuTitle: 'Risk Management under ISO 31000',
        title: 'Risk Management under ISO 31000',
        topicBlocks: [
          {
            title: '1. Risk definition'
          },
          {
            title: '2. Risk management process under ISO 31000',
            items: [
              'Risk identification',
              'Anomaly detection',
              'Information sources for anomaly detection',
              'Risk analysis',
              'Risk assessment',
              'Risk treatment strategy',
              'Mitigation measures',
              'Monitoring',
              'Learning and updates'
            ]
          },
          {
            title: '3. Case study: risks in MVNO'
          },
          {
            title: '4. Terms and definitions'
          },
          {
            title: '5. Standards and frameworks for risk management and antifraud'
          }
        ]
      },
      {
        id: 'course-requirements-management-traceability',
        menuTitle: 'Requirements Management and Traceability: SMART → US → C4 → BPMN → UC',
        title: 'Requirements Management and Traceability: SMART → US → C4 → BPMN → UC',
        topicBlocks: [
          {
            title: 'Block 1. Goal setting',
            items: [
              'SMART goals',
              'Requirements sources: interviews, CJM, feedback, business context',
              'User Story as a way to capture a business need',
              'User Story quality attributes'
            ]
          },
          {
            title: 'Block 2. Traceability: User Stories → Use Cases',
            items: [
              'User Story creation',
              'User Story decomposition into Use Cases',
              'Actor, business object, action, system, value',
              'Use Cases as a basis for functional requirements'
            ]
          },
          {
            title: 'Block 3. Preparing C4 Level 1',
            items: [
              'Systems and actors derived from Use Cases',
              'Data flows and calls between systems',
              'C4 as a linking layer between requirements and architecture'
            ]
          },
          {
            title: 'Block 4. Process model in BPMN notation',
            items: [
              'Using Use Cases in BPMN',
              'Relationship between C4 Level 1 and BPMN pools',
              'Message flows as integration between systems'
            ]
          },
          {
            title: 'Block 5. Business Rules and process logic',
            items: [
              'Business Rules as process branching conditions',
              'XOR / OR gateways',
              'Relationship between business rules and BPMN',
              'DMN for complex rules'
            ]
          },
          {
            title: 'Block 6. End-to-end traceability and requirements quality',
            items: [
              'Requirements traceability: SMART → US → UC → C4 → BPMN',
              'APIs and tests',
              'Integrity control for requirements, architecture, and process models',
              'Requirements quality attributes',
              'Requirements change management',
              'Task preparation for teams'
            ]
          }
        ]
      }
    ]
  },
  ru: {
    metaTitle: 'Методология - Vladimir Belov',
    metaDescription:
      'Внутренние курсы и подход к развитию компетенций от Владимира Белова на стыке бизнес-анализа, процессного управления, трассировки требований и управления рисками.',
    title: 'Методология и развитие компетенций',
    description: 'Подготовил курсы и провожу обучение по следующим направлениям:',
    menuTitle: 'Направления',
    topicsTitle: 'Темы',
    directions: [
      {
        id: 'course-business-analysis-process-management',
        menuTitle: 'Бизнес-анализ и процессное управление',
        title: 'Бизнес-анализ и процессное управление',
        topicBlocks: [
          {
            title: 'Блок 1. Основы: что такое процесс и зачем он нужен?',
            items: [
              'Что такое процесс',
              'Что такое проект',
              'Процессный подход к управлению',
              'Цепочка создания ценности',
              'Целеполагание'
            ]
          },
          {
            title: 'Блок 2. Сущность бизнес-процесса: компоненты и управление',
            items: [
              'Что такое бизнес-процесс',
              'Шаги, события и бизнес-правила',
              'Роли и объекты в процессе',
              'Контекст и метрики процесса',
              'Уровни процессов: L0-L3',
              'Модель процесса',
              'Связь с архитектурой'
            ]
          },
          {
            title: 'Блок 3. Жизненный цикл и улучшение процесса',
            items: [
              'Процессы AS-IS / TO-BE',
              'Документирование процесса',
              'Имплементация процесса',
              'Цикл Шухарта-Деминга (PDCA)'
            ]
          },
          {
            title: 'Блок 4. Моделирование: нотации, качество и инструменты',
            items: [
              'Нотации моделирования процессов',
              'BPMN 2.0: ключевые элементы',
              'IDEF0, UML Activity и ArchiMate',
              'Ограничения',
              'Инструменты'
            ]
          },
          {
            title: 'Блок 5. Подготовка требований и трассировка',
            items: [
              'User Story: шаблон и извлечение',
              'Трассировка: US → Use Cases',
              'Связь BPMN с архитектурой C4',
              'UC → модель процесса (BPMN)',
              'Business Rules в BPMN',
              'Атрибуты качества требований'
            ]
          }
        ]
      },
      {
        id: 'course-risk-management-iso-31000',
        menuTitle: 'Управление рисками по ISO 31000',
        title: 'Управление рисками по ISO 31000',
        topicBlocks: [
          {
            title: '1. Определение риска'
          },
          {
            title: '2. Процесс управления рисками по ISO 31000',
            items: [
              'Идентификация рисков',
              'Выявление аномалий',
              'Источники информации для выявления аномалий',
              'Анализ рисков',
              'Оценка рисков',
              'Стратегия управления риском',
              'Меры митигации',
              'Мониторинг',
              'Обучение и обновление'
            ]
          },
          {
            title: '3. Кейс: риски в MVNO'
          },
          {
            title: '4. Термины и определения'
          },
          {
            title: '5. Стандарты и фреймворки по управлению рисками и антифроду'
          }
        ]
      },
      {
        id: 'course-requirements-management-traceability',
        menuTitle: 'Управление требованиями и трассировка: SMART → US → C4 → BPMN → UC',
        title: 'Управление требованиями и трассировка: SMART → US → C4 → BPMN → UC',
        topicBlocks: [
          {
            title: 'Блок 1. Целеполагание',
            items: [
              'Цели по SMART',
              'Источники требований: интервью, CJM, обратная связь, бизнес-контекст',
              'User Story как форма фиксации бизнес-потребности',
              'Атрибуты качества User Story'
            ]
          },
          {
            title: 'Блок 2. Трассировка: User Stories → Use Cases',
            items: [
              'Формирование User Story',
              'Декомпозиция User Story в Use Cases',
              'Актор, бизнес-объект, действие, система, ценность',
              'Use Cases как основа функциональных требований'
            ]
          },
          {
            title: 'Блок 3. Подготовка C4 Level 1',
            items: [
              'Системы и акторы из Use Cases',
              'Потоки данных и вызовы между системами',
              'C4 как связующий слой между требованиями и архитектурой'
            ]
          },
          {
            title: 'Блок 4. Модель процесса в нотации BPMN',
            items: [
              'Использование Use Case в BPMN',
              'Связь C4 Level 1 с пулами BPMN',
              'Message flows как интеграция между системами'
            ]
          },
          {
            title: 'Блок 5. Business Rules и логика процесса',
            items: [
              'Business Rules как условия ветвления процесса',
              'XOR / OR gateways',
              'Связь бизнес-правил с BPMN',
              'DMN для сложных правил'
            ]
          },
          {
            title: 'Блок 6. Сквозная трассировка и качество требований',
            items: [
              'Трассировка требований: SMART → US → UC → C4 → BPMN',
              'API и тесты',
              'Контроль целостности требований, архитектуры и модели процесса',
              'Атрибуты качества требований',
              'Управление изменением требований',
              'Подготовка задач командам'
            ]
          }
        ]
      }
    ]
  },
  uz: {
    metaTitle: 'Metodologiya - Vladimir Belov',
    metaDescription:
      'Vladimir Belovning biznes tahlili, jarayonlarni boshqarish, talablarni kuzatish va risklar boshqaruvi bo\'yicha ichki kurslari va kompetensiyalarni rivojlantirish yondashuvi.',
    title: 'Metodologiya va kompetensiyalarni rivojlantirish',
    description: 'Quyidagi yo\'nalishlar bo\'yicha kurslar tayyorlaganman va o\'qitish o\'tkazaman:',
    menuTitle: 'Yo\'nalishlar',
    topicsTitle: 'Mavzular',
    directions: [
      {
        id: 'course-business-analysis-process-management',
        menuTitle: 'Biznes tahlili va jarayonlarni boshqarish',
        title: 'Biznes tahlili va jarayonlarni boshqarish',
        topicBlocks: [
          {
            title: '1-blok. Asoslar: jarayon nima va u nima uchun kerak?',
            items: [
              'Jarayon nima',
              'Loyiha nima',
              'Jarayonli boshqaruv yondashuvi',
              'Qiymat yaratish zanjiri',
              'Maqsad qo\'yish'
            ]
          },
          {
            title: '2-blok. Biznes jarayonning mohiyati: komponentlar va boshqaruv',
            items: [
              'Biznes jarayon nima',
              'Qadamlar, hodisalar va biznes qoidalar',
              'Jarayondagi rollar va ob\'yektlar',
              'Jarayon konteksti va metrikalari',
              'Jarayon darajalari: L0-L3',
              'Jarayon modeli',
              'Arxitektura bilan aloqasi'
            ]
          },
          {
            title: '3-blok. Jarayonning hayot sikli va takomillashtirish',
            items: [
              'AS-IS / TO-BE jarayonlari',
              'Jarayonni hujjatlashtirish',
              'Jarayonni joriy etish',
              'Shewhart-Deming sikli (PDCA)'
            ]
          },
          {
            title: '4-blok. Modellashtirish: notatsiyalar, sifat va vositalar',
            items: [
              'Jarayonlarni modellashtirish notatsiyalari',
              'BPMN 2.0: asosiy elementlar',
              'IDEF0, UML Activity va ArchiMate',
              'Cheklovlar',
              'Vositalar'
            ]
          },
          {
            title: '5-blok. Talablarni tayyorlash va kuzatish',
            items: [
              'User Story: shablon va ajratish',
              'Kuzatish: US \u2192 Use Cases',
              'BPMN va C4 arxitekturasi',
              'UC \u2192 jarayon modeli (BPMN)',
              'Business Rules BPMN da',
              'Talablar sifat atributlari'
            ]
          }
        ]
      },
      {
        id: 'course-risk-management-iso-31000',
        menuTitle: 'ISO 31000 bo\'yicha risklar boshqaruvi',
        title: 'ISO 31000 bo\'yicha risklar boshqaruvi',
        topicBlocks: [
          {
            title: '1. Risk ta\'rifi'
          },
          {
            title: '2. ISO 31000 bo\'yicha risklar boshqaruvi jarayoni',
            items: [
              'Risklarni aniqlash',
              'Anomaliyalarni aniqlash',
              'Anomaliyalarni aniqlash uchun axborot manbalari',
              'Risklar tahlili',
              'Risklar bahosi',
              'Riskni boshqarish strategiyasi',
              'Mitigatsiya choralari',
              'Monitoring',
              'O\'qitish va yangilash'
            ]
          },
          {
            title: '3. Keys: MVNO dagi risklar'
          },
          {
            title: '4. Atamalar va ta\'riflar'
          },
          {
            title: '5. Risklar boshqaruvi va antifraud bo\'yicha standartlar va freymvorklar'
          }
        ]
      },
      {
        id: 'course-requirements-management-traceability',
        menuTitle: 'Talablarni boshqarish va kuzatish: SMART \u2192 US \u2192 C4 \u2192 BPMN \u2192 UC',
        title: 'Talablarni boshqarish va kuzatish: SMART \u2192 US \u2192 C4 \u2192 BPMN \u2192 UC',
        topicBlocks: [
          {
            title: '1-blok. Maqsad qo\'yish',
            items: [
              'SMART maqsadlar',
              'Talablar manbalari: intervyular, CJM, qayta aloqa, biznes kontekst',
              'User Story biznes ehtiyojni qayd etish shakli sifatida',
              'User Story sifat atributlari'
            ]
          },
          {
            title: '2-blok. Kuzatish: User Stories \u2192 Use Cases',
            items: [
              'User Story shakllantirish',
              'User Story ni Use Cases ga dekompozitsiya qilish',
              'Aktor, biznes ob\'yekt, harakat, tizim, qiymat',
              'Use Cases funksional talablar asosi sifatida'
            ]
          },
          {
            title: '3-blok. C4 Level 1 tayyorlash',
            items: [
              'Use Cases dan olingan tizimlar va aktorlar',
              'Tizimlar orasidagi ma\'lumot oqimlari va chaqiruvlar',
              'C4 talablar va arxitektura orasidagi bog\'lovchi qatlam sifatida'
            ]
          },
          {
            title: '4-blok. BPMN notatsiyasida jarayon modeli',
            items: [
              'Use Case dan BPMN da foydalanish',
              'C4 Level 1 va BPMN pullari orasidagi aloqa',
              'Message flows tizimlar orasidagi integratsiya sifatida'
            ]
          },
          {
            title: '5-blok. Business Rules va jarayon mantiqi',
            items: [
              'Business Rules jarayon tarmoqlanish shartlari sifatida',
              'XOR / OR gateways',
              'Biznes qoidalar va BPMN orasidagi aloqa',
              'DMN murakkab qoidalar uchun'
            ]
          },
          {
            title: '6-blok. Uzluksiz kuzatish va talablar sifati',
            items: [
              'Talablarni kuzatish: SMART \u2192 US \u2192 UC \u2192 C4 \u2192 BPMN',
              'API va testlar',
              'Talablar, arxitektura va jarayon modeli yaxlitligini nazorat qilish',
              'Talablar sifat atributlari',
              'Talablar o\'zgarishlarini boshqarish',
              'Jamoalar uchun vazifalar tayyorlash'
            ]
          }
        ]
      }
    ]
  }
};

export const methodologyDirectionIds = new Set(
  methodologyContent.en.directions.map((direction) => direction.id)
);
