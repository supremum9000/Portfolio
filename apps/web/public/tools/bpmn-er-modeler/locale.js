(function () {
  var SUPPORTED_LOCALES = ['ru', 'en', 'uz'];
  var LOCALE_STORAGE_KEY = 'bpmn-modeler-locale';
  var currentLocale = 'ru';
  var localeObserver = null;
  var localeApplyScheduled = false;
  var isApplyingLocale = false;

  var TRANSLATIONS = {
    en: {
      'Проекты': 'Projects',
      'Новая диаграмма (Ctrl+N)': 'New diagram (Ctrl+N)',
      'Открыть (Ctrl+O)': 'Open (Ctrl+O)',
      'Сохранить (Ctrl+S)': 'Save (Ctrl+S)',
      'Сохранить как (Ctrl+Shift+S)': 'Save as (Ctrl+Shift+S)',
      'Экспорт': 'Export',
      'Экспорт ER': 'Export ER',
      'Открыть ER': 'Open ER',
      'Сохранить ER': 'Save ER',
      'Сбросить позиции': 'Reset positions',
      'Вписать в экран': 'Fit to screen',
      'Отменить (Ctrl+Z)': 'Undo (Ctrl+Z)',
      'Повторить (Ctrl+Y)': 'Redo (Ctrl+Y)',
      'Вырезать (Ctrl+X)': 'Cut (Ctrl+X)',
      'Копировать (Ctrl+C)': 'Copy (Ctrl+C)',
      'Вставить (Ctrl+V)': 'Paste (Ctrl+V)',
      'XML (Ctrl+E)': 'XML (Ctrl+E)',
      'Свойства (Ctrl+P)': 'Properties (Ctrl+P)',
      'Закрыть': 'Close',
      'Новая': 'New',
      'Открыть': 'Open',
      'Сохранить': 'Save',
      'Сохранить как…': 'Save as…',
      'Экспорт ▾': 'Export ▾',
      'Скачать SVG': 'Export SVG',
      'Скачать PNG': 'Export PNG',
      'Скачать PNG @2x': 'Export PNG @2x',
      'Скачать PDF': 'Export PDF',
      'Вырезать': 'Cut',
      'Копировать': 'Copy',
      'Вставить': 'Paste',
      'Свойства': 'Properties',
      'Скрыть': 'Hide',
      'Автолейаут': 'Auto layout',
      'Вписать': 'Fit',
      'DSL Редактор': 'DSL Editor',
      '? Синтаксис': '? Syntax',
      'Синтаксис ER DSL': 'ER DSL syntax',
      'Типы связей:': 'Relationship types:',
      'Атрибуты:': 'Attributes:',
      'Готов': 'Ready',
      'Светлая': 'Light',
      'Тёмная': 'Dark',
      'Светлая тема': 'Light theme',
      'Тёмная тема': 'Dark theme',
      'Готов к работе': 'Ready to work',
      'Перетащите .bpmn файл': 'Drop a .bpmn file here',
      'Откроется в новой вкладке': 'It will open in a new tab',
      'Горячие клавиши': 'Keyboard shortcuts',
      'Новая вкладка': 'New tab',
      'Открыть файл': 'Open file',
      'Сохранить проект / Сохранить как…': 'Save project / Save as…',
      'Закрыть вкладку': 'Close tab',
      'Отменить / Повторить': 'Undo / Redo',
      'Вырезать элементы': 'Cut elements',
      'Копировать элементы': 'Copy elements',
      'Вставить элементы': 'Paste elements',
      'XML редактор': 'XML editor',
      'Панель свойств': 'Properties panel',
      'Переключить тему': 'Toggle theme',
      'Перемещение холста': 'Pan canvas',
      'Общие': 'General',
      'Тип': 'Type',
      'Имя': 'Name',
      'Документация': 'Documentation',
      'Описание': 'Description',
      'Процесс': 'Process',
      'Исполняемый': 'Executable',
      'Да': 'Yes',
      'Нет': 'No',
      'Задача': 'Task',
      'Преобразовать в': 'Convert to',
      'Пользовательская': 'User',
      'Сервисная': 'Service',
      'Скриптовая': 'Script',
      'Отправка': 'Send',
      'Получение': 'Receive',
      'Ручная': 'Manual',
      'Бизнес-правило': 'Business rule',
      'Компенсация': 'Compensation',
      'Многоэкземплярность': 'Multi-instance',
      'Тип цикла': 'Loop type',
      'Параллельный (|||)': 'Parallel (|||)',
      'Последовательный (≡)': 'Sequential (≡)',
      'Стандартный цикл (↻)': 'Standard loop (↻)',
      'Кардинальность': 'Cardinality',
      'Условие завершения': 'Completion condition',
      'Условие цикла': 'Loop condition',
      'Максимум итераций': 'Max iterations',
      'Скрипт': 'Script',
      'Язык (scriptFormat)': 'Language (scriptFormat)',
      'Тело скрипта': 'Script body',
      'Результат (resultVariable)': 'Result (resultVariable)',
      'Шлюз': 'Gateway',
      'Исключающий (XOR)': 'Exclusive (XOR)',
      'Параллельный (AND)': 'Parallel (AND)',
      'Включающий (OR)': 'Inclusive (OR)',
      'Сложный': 'Complex',
      'На основе событий': 'Event-based',
      'Поток по умолчанию': 'Default flow',
      '— нет —': '— none —',
      'Событие': 'Event',
      'Определение события': 'Event definition',
      'Без определения': 'None',
      'Сообщение': 'Message',
      'Таймер': 'Timer',
      'Условие': 'Condition',
      'Сигнал': 'Signal',
      'Ошибка': 'Error',
      'Эскалация': 'Escalation',
      'Ссылка': 'Link',
      'Терминация': 'Terminate',
      'Тип таймера': 'Timer type',
      'Не задан': 'Not set',
      'Длительность (Duration)': 'Duration',
      'Дата (Date)': 'Date',
      'Цикл (Cycle)': 'Cycle',
      'Значение': 'Value',
      'Имя сообщения': 'Message name',
      'Имя сигнала': 'Signal name',
      'Код ошибки': 'Error code',
      'Имя ошибки': 'Error name',
      'Код эскалации': 'Escalation code',
      'Имя ссылки': 'Link name',
      'Условие (FormalExpression)': 'Condition (FormalExpression)',
      'Поток': 'Sequence flow',
      'Размеры и позиция': 'Size and position',
      'Ширина': 'Width',
      'Высота': 'Height',
      'Цвет': 'Color',
      'Обводка': 'Stroke',
      'Сбросить': 'Reset',
      'Заливка': 'Fill',
      'Красный': 'Red',
      'Оранжевый': 'Orange',
      'Жёлтый': 'Yellow',
      'Зелёный': 'Green',
      'Синий': 'Blue',
      'Фиолетовый': 'Purple',
      'Серый': 'Gray',
      'Стандарт': 'Default',
      'Быстрый выбор': 'Quick presets',
      'Начальные события': 'Start events',
      'Начальное событие': 'Start event',
      'Начальное событие (Сообщение)': 'Start event (Message)',
      'Начальное событие (Таймер)': 'Start event (Timer)',
      'Начальное событие (Условие)': 'Start event (Condition)',
      'Начальное событие (Сигнал)': 'Start event (Signal)',
      'Промежуточные события': 'Intermediate events',
      'Промежуточное событие': 'Intermediate event',
      'Отправка сообщения': 'Throw message',
      'Эскалация (throw)': 'Escalation (throw)',
      'Ссылка (throw)': 'Link (throw)',
      'Компенсация (throw)': 'Compensation (throw)',
      'Сигнал (throw)': 'Signal (throw)',
      'Получение сообщения': 'Catch message',
      'Таймер (catch)': 'Timer (catch)',
      'Условие (catch)': 'Condition (catch)',
      'Ссылка (catch)': 'Link (catch)',
      'Сигнал (catch)': 'Signal (catch)',
      'Конечные события': 'End events',
      'Конечное событие': 'End event',
      'Конечное (Сообщение)': 'End (Message)',
      'Конечное (Эскалация)': 'End (Escalation)',
      'Конечное (Ошибка)': 'End (Error)',
      'Конечное (Компенсация)': 'End (Compensation)',
      'Конечное (Сигнал)': 'End (Signal)',
      'Конечное (Терминация)': 'End (Terminate)',
      'Шлюзы': 'Gateways',
      'Исключающий шлюз (XOR)': 'Exclusive gateway (XOR)',
      'Параллельный шлюз (AND)': 'Parallel gateway (AND)',
      'Включающий шлюз (OR)': 'Inclusive gateway (OR)',
      'Сложный шлюз': 'Complex gateway',
      'Шлюз на основе событий': 'Event-based gateway',
      'Задачи': 'Tasks',
      'Пользовательская задача': 'User task',
      'Сервисная задача': 'Service task',
      'Скриптовая задача': 'Script task',
      'Задача отправки': 'Send task',
      'Задача получения': 'Receive task',
      'Ручная задача': 'Manual task',
      'Вызов процесса': 'Call activity',
      'Подпроцессы': 'Subprocesses',
      'Подпроцесс (развёрнутый)': 'Expanded subprocess',
      'Подпроцесс (свёрнутый)': 'Collapsed subprocess',
      'Транзакция': 'Transaction',
      'Данные': 'Data',
      'Объект данных': 'Data object',
      'Хранилище данных': 'Data store',
      'Участники': 'Participants',
      'Пул (Участник)': 'Pool (Participant)',
      'Пустой пул (Empty pool)': 'Empty pool',
      'Аннотации': 'Annotations',
      'Текстовая аннотация': 'Text annotation',
      'Группа': 'Group',
      'Ничего не найдено': 'No matches found',
      'Только .bpmn, .xml и .erdsl': 'Only .bpmn, .xml and .erdsl files are supported',
      'Файл скачан': 'File downloaded',
      'SVG экспортирован': 'SVG exported',
      'PNG экспортирован': 'PNG exported',
      'Ошибка рендера PNG': 'PNG render error',
      'Ошибка экспорта PNG': 'PNG export error',
      'Позиции сброшены': 'Positions reset',
      'Нет диаграммы': 'No diagram',
      'Popup заблокирован': 'Popup blocked',
      'PDF: используйте печать': 'PDF: use print',
      'Выберите элементы для копирования': 'Select elements to copy',
      'Выберите элементы для вырезания': 'Select elements to cut',
      'Буфер обмена пуст': 'Clipboard is empty',
      'XML применён': 'XML applied',
      'ID уже используется': 'ID is already in use',
      'Требуется Chrome или Edge': 'Chrome or Edge is required',
      'Нет прав на запись в эту папку': 'No write permission for this folder',
      'Нет прав на запись': 'No write permission',
      'Проект уже открыт': 'Project is already open',
      'Проект обновлён': 'Project refreshed',
      'Ошибка обновления проекта': 'Failed to refresh project',
      'Имя файла:': 'File name:',
      'Отображаемое имя:': 'Display name:',
      'Процессы': 'Processes',
      'Модели данных': 'Data models',
      'Нет открытых проектов.': 'No open projects.',
      'Последние:': 'Recent:',
      'Откройте папку заново': 'Open a folder again',
      'Новый проект': 'New project',
      'Открыть папку': 'Open folder',
      'Создать файл': 'Create file',
      'Сохранить проект': 'Save project',
      'Обновить': 'Refresh',
      'Закрыть проект': 'Close project',
      'Применить': 'Apply',
      'Все элементы (N)': 'All elements (N)',
      'Тема (Ctrl+Shift+T)': 'Theme (Ctrl+Shift+T)',
      'Начало': 'Start',
      'Задача 1': 'Task 1',
      'Условие?': 'Condition?',
      'Вариант A': 'Option A',
      'Вариант B': 'Option B',
      'Конец': 'End',
      '📁 Проекты': '📁 Projects',
      '📐 DSL Редактор': '📐 DSL Editor',
      'ER-диаграмма': 'ER Diagram',
      'BPMN-процесс': 'BPMN Process',
      'Привязан к файлу': 'Linked file',
      'Выберите элемент': 'Select an element',
      'на диаграмме': 'on the diagram',
      'Нет данных': 'No data',
      'Ошибка создания вкладки': 'Failed to create tab',
      'Ошибка при закрытии вкладки': 'Failed to close tab',
      'Ошибка сохранения': 'Save error',
      'Ошибка открытия': 'Open error',
      'Ошибка открытия проекта': 'Failed to open project',
      'Ошибка создания проекта': 'Failed to create project',
      'Ошибка создания файла': 'Failed to create file',
      'ER-диаграмма сохранена': 'ER diagram saved',
      'ER-диаграмма скачана': 'ER diagram downloaded',
      'Ошибка копирования': 'Copy error',
      'Ошибка вырезания': 'Cut error',
      'Ошибка вставки': 'Paste error',
      'Ошибка при открытии файла': 'File open error',
      'Ошибка инициализации': 'Initialization error',
      'Нет несохранённых файлов': 'No unsaved files',
      'Русский': 'Russian'
    },
    uz: {
      'Проекты': 'Loyihalar',
      'Новая диаграмма (Ctrl+N)': 'Yangi diagramma (Ctrl+N)',
      'Открыть (Ctrl+O)': 'Ochish (Ctrl+O)',
      'Сохранить (Ctrl+S)': 'Saqlash (Ctrl+S)',
      'Сохранить как (Ctrl+Shift+S)': 'Boshqa nom bilan saqlash (Ctrl+Shift+S)',
      'Экспорт': 'Eksport',
      'Экспорт ER': 'ER eksport',
      'Открыть ER': 'ER ochish',
      'Сохранить ER': 'ER saqlash',
      'Сбросить позиции': 'Joylashuvlarni tiklash',
      'Вписать в экран': 'Ekranga moslashtirish',
      'Отменить (Ctrl+Z)': 'Bekor qilish (Ctrl+Z)',
      'Повторить (Ctrl+Y)': 'Qaytarish (Ctrl+Y)',
      'Вырезать (Ctrl+X)': 'Qirqish (Ctrl+X)',
      'Копировать (Ctrl+C)': 'Nusxalash (Ctrl+C)',
      'Вставить (Ctrl+V)': 'Qo\'yish (Ctrl+V)',
      'XML (Ctrl+E)': 'XML (Ctrl+E)',
      'Свойства (Ctrl+P)': 'Xususiyatlar (Ctrl+P)',
      'Закрыть': 'Yopish',
      'Новая': 'Yangi',
      'Открыть': 'Ochish',
      'Сохранить': 'Saqlash',
      'Сохранить как…': 'Boshqa nom bilan saqlash…',
      'Экспорт ▾': 'Eksport ▾',
      'Скачать SVG': 'SVG eksport',
      'Скачать PNG': 'PNG eksport',
      'Скачать PNG @2x': 'PNG eksport @2x',
      'Скачать PDF': 'PDF eksport',
      'Вырезать': 'Qirqish',
      'Копировать': 'Nusxalash',
      'Вставить': 'Qo\'yish',
      'Свойства': 'Xususiyatlar',
      'Скрыть': 'Yashirish',
      'Автолейаут': 'Avto tartib',
      'Вписать': 'Moslashtirish',
      'DSL Редактор': 'DSL Muharrir',
      '? Синтаксис': '? Sintaksis',
      'Синтаксис ER DSL': 'ER DSL sintaksisi',
      'Типы связей:': 'Bog\'lanish turlari:',
      'Атрибуты:': 'Atributlar:',
      'Готов': 'Tayyor',
      'Светлая': 'Yorug\'',
      'Тёмная': 'Qorong\'u',
      'Светлая тема': 'Yorug\' mavzu',
      'Тёмная тема': 'Qorong\'u mavzu',
      'Готов к работе': 'Ishga tayyor',
      'Перетащите .bpmn файл': '.bpmn faylni shu yerga tashlang',
      'Откроется в новой вкладке': 'Yangi varaqda ochiladi',
      'Горячие клавиши': 'Tezkor tugmalar',
      'Новая вкладка': 'Yangi varaq',
      'Открыть файл': 'Faylni ochish',
      'Сохранить проект / Сохранить как…': 'Loyihani saqlash / Boshqa nom bilan saqlash…',
      'Закрыть вкладку': 'Varaqni yopish',
      'Отменить / Повторить': 'Bekor qilish / Qaytarish',
      'Вырезать элементы': 'Elementlarni qirqish',
      'Копировать элементы': 'Elementlarni nusxalash',
      'Вставить элементы': 'Elementlarni qo\'yish',
      'XML редактор': 'XML muharrir',
      'Панель свойств': 'Xususiyatlar paneli',
      'Переключить тему': 'Mavzuni almashtirish',
      'Перемещение холста': 'Kanvasni siljitish',
      'Общие': 'Umumiy',
      'Тип': 'Tur',
      'Имя': 'Nom',
      'Документация': 'Hujjatlashtirish',
      'Описание': 'Tavsif',
      'Процесс': 'Jarayon',
      'Исполняемый': 'Bajariladigan',
      'Да': 'Ha',
      'Нет': 'Yo\'q',
      'Задача': 'Vazifa',
      'Преобразовать в': 'Ga aylantirish',
      'Пользовательская': 'Foydalanuvchi',
      'Сервисная': 'Servis',
      'Скриптовая': 'Skript',
      'Отправка': 'Yuborish',
      'Получение': 'Qabul qilish',
      'Ручная': 'Qo\'lda',
      'Бизнес-правило': 'Biznes qoida',
      'Компенсация': 'Kompensatsiya',
      'Многоэкземплярность': 'Ko\'p nusxalilik',
      'Тип цикла': 'Sikl turi',
      'Параллельный (|||)': 'Parallel (|||)',
      'Последовательный (≡)': 'Ketma-ket (≡)',
      'Стандартный цикл (↻)': 'Standart sikl (↻)',
      'Кардинальность': 'Kardinallik',
      'Условие завершения': 'Tugash sharti',
      'Условие цикла': 'Sikl sharti',
      'Максимум итераций': 'Maksimal iteratsiyalar',
      'Скрипт': 'Skript',
      'Язык (scriptFormat)': 'Til (scriptFormat)',
      'Тело скрипта': 'Skript tanasi',
      'Результат (resultVariable)': 'Natija (resultVariable)',
      'Шлюз': 'Shlyuz',
      'Исключающий (XOR)': 'Istisno qiluvchi (XOR)',
      'Параллельный (AND)': 'Parallel (AND)',
      'Включающий (OR)': 'Qamrab oluvchi (OR)',
      'Сложный': 'Murakkab',
      'На основе событий': 'Hodisaga asoslangan',
      'Поток по умолчанию': 'Standart oqim',
      '— нет —': '— yo\'q —',
      'Событие': 'Hodisa',
      'Определение события': 'Hodisa ta\'rifi',
      'Без определения': 'Ta\'rifsiz',
      'Сообщение': 'Xabar',
      'Таймер': 'Taymer',
      'Условие': 'Shart',
      'Сигнал': 'Signal',
      'Ошибка': 'Xatolik',
      'Эскалация': 'Eskalatsiya',
      'Ссылка': 'Havola',
      'Терминация': 'Terminatsiya',
      'Тип таймера': 'Taymer turi',
      'Не задан': 'Belgilanmagan',
      'Длительность (Duration)': 'Davomiylik (Duration)',
      'Дата (Date)': 'Sana (Date)',
      'Цикл (Cycle)': 'Sikl (Cycle)',
      'Значение': 'Qiymat',
      'Имя сообщения': 'Xabar nomi',
      'Имя сигнала': 'Signal nomi',
      'Код ошибки': 'Xatolik kodi',
      'Имя ошибки': 'Xatolik nomi',
      'Код эскалации': 'Eskalatsiya kodi',
      'Имя ссылки': 'Havola nomi',
      'Условие (FormalExpression)': 'Shart (FormalExpression)',
      'Поток': 'Ketma-ket oqim',
      'Размеры и позиция': 'O\'lcham va joylashuv',
      'Ширина': 'Kenglik',
      'Высота': 'Balandlik',
      'Цвет': 'Rang',
      'Обводка': 'Chegara',
      'Сбросить': 'Tiklash',
      'Заливка': 'To\'ldirish',
      'Красный': 'Qizil',
      'Оранжевый': 'To\'q sariq',
      'Жёлтый': 'Sariq',
      'Зелёный': 'Yashil',
      'Синий': 'Ko\'k',
      'Фиолетовый': 'Binafsha',
      'Серый': 'Kulrang',
      'Стандарт': 'Standart',
      'Быстрый выбор': 'Tezkor tanlash',
      'Начальные события': 'Boshlang\'ich hodisalar',
      'Начальное событие': 'Boshlang\'ich hodisa',
      'Начальное событие (Сообщение)': 'Boshlang\'ich hodisa (Xabar)',
      'Начальное событие (Таймер)': 'Boshlang\'ich hodisa (Taymer)',
      'Начальное событие (Условие)': 'Boshlang\'ich hodisa (Shart)',
      'Начальное событие (Сигнал)': 'Boshlang\'ich hodisa (Signal)',
      'Промежуточные события': 'Oraliq hodisalar',
      'Промежуточное событие': 'Oraliq hodisa',
      'Отправка сообщения': 'Xabar yuborish',
      'Эскалация (throw)': 'Eskalatsiya (throw)',
      'Ссылка (throw)': 'Havola (throw)',
      'Компенсация (throw)': 'Kompensatsiya (throw)',
      'Сигнал (throw)': 'Signal (throw)',
      'Получение сообщения': 'Xabar qabul qilish',
      'Таймер (catch)': 'Taymer (catch)',
      'Условие (catch)': 'Shart (catch)',
      'Ссылка (catch)': 'Havola (catch)',
      'Сигнал (catch)': 'Signal (catch)',
      'Конечные события': 'Yakuniy hodisalar',
      'Конечное событие': 'Yakuniy hodisa',
      'Конечное (Сообщение)': 'Yakuniy (Xabar)',
      'Конечное (Эскалация)': 'Yakuniy (Eskalatsiya)',
      'Конечное (Ошибка)': 'Yakuniy (Xatolik)',
      'Конечное (Компенсация)': 'Yakuniy (Kompensatsiya)',
      'Конечное (Сигнал)': 'Yakuniy (Signal)',
      'Конечное (Терминация)': 'Yakuniy (Terminatsiya)',
      'Шлюзы': 'Shlyuzlar',
      'Исключающий шлюз (XOR)': 'Istisno qiluvchi shlyuz (XOR)',
      'Параллельный шлюз (AND)': 'Parallel shlyuz (AND)',
      'Включающий шлюз (OR)': 'Qamrab oluvchi shlyuz (OR)',
      'Сложный шлюз': 'Murakkab shlyuz',
      'Шлюз на основе событий': 'Hodisaga asoslangan shlyuz',
      'Задачи': 'Vazifalar',
      'Пользовательская задача': 'Foydalanuvchi vazifasi',
      'Сервисная задача': 'Servis vazifasi',
      'Скриптовая задача': 'Skript vazifasi',
      'Задача отправки': 'Yuborish vazifasi',
      'Задача получения': 'Qabul qilish vazifasi',
      'Ручная задача': 'Qo\'lda vazifa',
      'Вызов процесса': 'Jarayonni chaqirish',
      'Подпроцессы': 'Quyi jarayonlar',
      'Подпроцесс (развёрнутый)': 'Kengaytirilgan quyi jarayon',
      'Подпроцесс (свёрнутый)': 'Yig\'ilgan quyi jarayon',
      'Транзакция': 'Tranzaksiya',
      'Данные': 'Ma\'lumotlar',
      'Объект данных': 'Ma\'lumot obyekti',
      'Хранилище данных': 'Ma\'lumotlar ombori',
      'Участники': 'Ishtirokchilar',
      'Пул (Участник)': 'Pul (Ishtirokchi)',
      'Пустой пул (Empty pool)': 'Bo\'sh pul',
      'Аннотации': 'Izohlar',
      'Текстовая аннотация': 'Matnli izoh',
      'Группа': 'Guruh',
      'Ничего не найдено': 'Hech narsa topilmadi',
      'Только .bpmn, .xml и .erdsl': 'Faqat .bpmn, .xml va .erdsl fayllar qo\'llab-quvvatlanadi',
      'Файл скачан': 'Fayl yuklab olindi',
      'SVG экспортирован': 'SVG eksport qilindi',
      'PNG экспортирован': 'PNG eksport qilindi',
      'Ошибка рендера PNG': 'PNG render xatoligi',
      'Ошибка экспорта PNG': 'PNG eksport xatoligi',
      'Позиции сброшены': 'Joylashuvlar tiklandi',
      'Нет диаграммы': 'Diagramma yo\'q',
      'Popup заблокирован': 'Popup bloklangan',
      'PDF: используйте печать': 'PDF: chop etishdan foydalaning',
      'Выберите элементы для копирования': 'Nusxalash uchun elementlarni tanlang',
      'Выберите элементы для вырезания': 'Qirqish uchun elementlarni tanlang',
      'Буфер обмена пуст': 'Almashinuv buferi bo\'sh',
      'XML применён': 'XML qo\'llandi',
      'ID уже используется': 'ID allaqachon ishlatilmoqda',
      'Требуется Chrome или Edge': 'Chrome yoki Edge talab qilinadi',
      'Нет прав на запись в эту папку': 'Bu papkaga yozish huquqi yo\'q',
      'Нет прав на запись': 'Yozish huquqi yo\'q',
      'Проект уже открыт': 'Loyiha allaqachon ochiq',
      'Проект обновлён': 'Loyiha yangilandi',
      'Ошибка обновления проекта': 'Loyihani yangilashda xatolik',
      'Имя файла:': 'Fayl nomi:',
      'Отображаемое имя:': 'Ko\'rsatiladigan nom:',
      'Процессы': 'Jarayonlar',
      'Модели данных': 'Ma\'lumot modellari',
      'Нет открытых проектов.': 'Ochiq loyihalar yo\'q.',
      'Последние:': 'Oxirgilar:',
      'Откройте папку заново': 'Papkani qayta oching',
      'Новый проект': 'Yangi loyiha',
      'Открыть папку': 'Papkani ochish',
      'Создать файл': 'Fayl yaratish',
      'Сохранить проект': 'Loyihani saqlash',
      'Обновить': 'Yangilash',
      'Закрыть проект': 'Loyihani yopish',
      'Применить': 'Qo\'llash',
      'Все элементы (N)': 'Barcha elementlar (N)',
      'Тема (Ctrl+Shift+T)': 'Mavzu (Ctrl+Shift+T)',
      'Начало': 'Boshlanish',
      'Задача 1': 'Vazifa 1',
      'Условие?': 'Shart?',
      'Вариант A': 'Variant A',
      'Вариант B': 'Variant B',
      'Конец': 'Tugash',
      '📁 Проекты': '📁 Loyihalar',
      '📐 DSL Редактор': '📐 DSL Muharrir',
      'ER-диаграмма': 'ER Diagramma',
      'BPMN-процесс': 'BPMN Jarayon',
      'Привязан к файлу': 'Faylga bog\'langan',
      'Выберите элемент': 'Elementni tanlang',
      'на диаграмме': 'diagrammada',
      'Нет данных': 'Ma\'lumot yo\'q',
      'Ошибка создания вкладки': 'Varaq yaratishda xatolik',
      'Ошибка при закрытии вкладки': 'Varaqni yopishda xatolik',
      'Ошибка сохранения': 'Saqlash xatoligi',
      'Ошибка открытия': 'Ochish xatoligi',
      'Ошибка открытия проекта': 'Loyihani ochishda xatolik',
      'Ошибка создания проекта': 'Loyiha yaratishda xatolik',
      'Ошибка создания файла': 'Fayl yaratishda xatolik',
      'ER-диаграмма сохранена': 'ER diagramma saqlandi',
      'ER-диаграмма скачана': 'ER diagramma yuklab olindi',
      'Ошибка копирования': 'Nusxalash xatoligi',
      'Ошибка вырезания': 'Qirqish xatoligi',
      'Ошибка вставки': 'Qo\'yish xatoligi',
      'Ошибка при открытии файла': 'Faylni ochishda xatolik',
      'Ошибка инициализации': 'Ishga tushirish xatoligi',
      'Нет несохранённых файлов': 'Saqlanmagan fayllar yo\'q',
      'Русский': 'Ruscha'
    }
  };

  var PATTERNS = {
    en: [
      {
        regex: /^«(.+)» открыт$/,
        replace: function (_, name) { return 'Opened "' + name + '"'; }
      },
      {
        regex: /^Сохранено в «(.+)»$/,
        replace: function (_, name) { return 'Saved to "' + name + '"'; }
      },
      {
        regex: /^Сохранено как «(.+)»$/,
        replace: function (_, name) { return 'Saved as "' + name + '"'; }
      },
      {
        regex: /^Проект «(.+)» создан$/,
        replace: function (_, name) { return 'Project "' + name + '" created'; }
      },
      {
        regex: /^Проект «(.+)» открыт$/,
        replace: function (_, name) { return 'Project "' + name + '" opened'; }
      },
      {
        regex: /^Папка «(.+)» уже содержит проект\. Открыть его\?$/,
        replace: function (_, name) { return 'Folder "' + name + '" already contains a project. Open it?'; }
      },
      {
        regex: /^В папке «(.+)» нет project\.json\. Создать проект\?$/,
        replace: function (_, name) { return 'Folder "' + name + '" has no project.json. Create a project?'; }
      },
      {
        regex: /^Проект «(.+)» содержит несохранённые изменения\. Закрыть\?$/,
        replace: function (_, name) { return 'Project "' + name + '" has unsaved changes. Close it?'; }
      },
      {
        regex: /^Файл «(.+)» уже существует\. Перезаписать\?$/,
        replace: function (_, name) { return 'File "' + name + '" already exists. Overwrite it?'; }
      },
      {
        regex: /^«(.+)» создан$/,
        replace: function (_, name) { return 'Created "' + name + '"'; }
      },
      {
        regex: /^Файл загружен: (.+)$/,
        replace: function (_, name) { return 'Loaded file: ' + name; }
      },
      {
        regex: /^Строка (\d+): не распознано «(.+)»$/,
        replace: function (_, line, token) { return 'Line ' + line + ': could not parse "' + token + '"'; }
      },
      {
        regex: /^Поле «(.+)» не найдено в таблице «(.+)»$/,
        replace: function (_, field, table) { return 'Field "' + field + '" was not found in table "' + table + '"'; }
      },
      {
        regex: /^(\d+) таблиц, (\d+) связей$/,
        replace: function (_, tables, refs) { return tables + ' tables, ' + refs + ' relationships'; }
      },
      {
        regex: /^(\d+) ошибок:\n([\s\S]+)$/,
        replace: function (_, count, rest) { return count + ' errors:\n' + rest; }
      },
      {
        regex: /^Скопировано: (\d+) эл\.$/,
        replace: function (_, count) { return 'Copied: ' + count + ' items'; }
      },
      {
        regex: /^Вырезано: (\d+) эл\.$/,
        replace: function (_, count) { return 'Cut: ' + count + ' items'; }
      },
      {
        regex: /^Вставлено: (\d+) эл\.$/,
        replace: function (_, count) { return 'Pasted: ' + count + ' items'; }
      },
      {
        regex: /^Ошибка: (.+)$/,
        replace: function (_, msg) { return 'Error: ' + msg; }
      },
      {
        regex: /^Ничего не найдено$/,
        replace: function () { return 'No matches found'; }
      },
      {
        regex: /^Файл не найден или недоступен\. Нажмите ↻ для обновления дерева\.$/,
        replace: function () { return 'File not found or unavailable. Click ↻ to refresh the tree.'; }
      },
      {
        regex: /^Сохранено (\d+) файл$/,
        replace: function (_, count) { return 'Saved ' + count + ' file'; }
      },
      {
        regex: /^Сохранено (\d+) файла$/,
        replace: function (_, count) { return 'Saved ' + count + ' files'; }
      },
      {
        regex: /^Сохранено (\d+) файлов$/,
        replace: function (_, count) { return 'Saved ' + count + ' files'; }
      },
      {
        regex: /^Сохранено (\d+) из (\d+) файл$/,
        replace: function (_, saved, total) { return 'Saved ' + saved + ' of ' + total + ' file'; }
      },
      {
        regex: /^Сохранено (\d+) из (\d+) файла$/,
        replace: function (_, saved, total) { return 'Saved ' + saved + ' of ' + total + ' files'; }
      },
      {
        regex: /^Сохранено (\d+) из (\d+) файлов$/,
        replace: function (_, saved, total) { return 'Saved ' + saved + ' of ' + total + ' files'; }
      }
    ],
    uz: [
      {
        regex: /^«(.+)» открыт$/,
        replace: function (_, name) { return '"' + name + '" ochildi'; }
      },
      {
        regex: /^Сохранено в «(.+)»$/,
        replace: function (_, name) { return '"' + name + '" ga saqlandi'; }
      },
      {
        regex: /^Сохранено как «(.+)»$/,
        replace: function (_, name) { return '"' + name + '" sifatida saqlandi'; }
      },
      {
        regex: /^Проект «(.+)» создан$/,
        replace: function (_, name) { return '"' + name + '" loyihasi yaratildi'; }
      },
      {
        regex: /^Проект «(.+)» открыт$/,
        replace: function (_, name) { return '"' + name + '" loyihasi ochildi'; }
      },
      {
        regex: /^Папка «(.+)» уже содержит проект\. Открыть его\?$/,
        replace: function (_, name) { return '"' + name + '" papkasida allaqachon loyiha bor. Uni ochishni xohlaysizmi?'; }
      },
      {
        regex: /^В папке «(.+)» нет project\.json\. Создать проект\?$/,
        replace: function (_, name) { return '"' + name + '" papkasida project.json yo\'q. Loyiha yaratilsinmi?'; }
      },
      {
        regex: /^Проект «(.+)» содержит несохранённые изменения\. Закрыть\?$/,
        replace: function (_, name) { return '"' + name + '" loyihasida saqlanmagan o\'zgarishlar bor. Yopilsinmi?'; }
      },
      {
        regex: /^Файл «(.+)» уже существует\. Перезаписать\?$/,
        replace: function (_, name) { return '"' + name + '" fayli allaqachon mavjud. Qayta yozilsinmi?'; }
      },
      {
        regex: /^«(.+)» создан$/,
        replace: function (_, name) { return '"' + name + '" yaratildi'; }
      },
      {
        regex: /^Файл загружен: (.+)$/,
        replace: function (_, name) { return 'Fayl yuklandi: ' + name; }
      },
      {
        regex: /^Строка (\d+): не распознано «(.+)»$/,
        replace: function (_, line, token) { return line + '-qator: "' + token + '" tahlil qilib bo\'lmadi'; }
      },
      {
        regex: /^Поле «(.+)» не найдено в таблице «(.+)»$/,
        replace: function (_, field, table) { return '"' + field + '" maydoni "' + table + '" jadvalida topilmadi'; }
      },
      {
        regex: /^(\d+) таблиц, (\d+) связей$/,
        replace: function (_, tables, refs) { return tables + ' ta jadval, ' + refs + ' ta bog\'lanish'; }
      },
      {
        regex: /^(\d+) ошибок:\n([\s\S]+)$/,
        replace: function (_, count, rest) { return count + ' ta xatolik:\n' + rest; }
      },
      {
        regex: /^Скопировано: (\d+) эл\.$/,
        replace: function (_, count) { return 'Nusxalandi: ' + count + ' ta element'; }
      },
      {
        regex: /^Вырезано: (\d+) эл\.$/,
        replace: function (_, count) { return 'Qirqildi: ' + count + ' ta element'; }
      },
      {
        regex: /^Вставлено: (\d+) эл\.$/,
        replace: function (_, count) { return 'Qo\'yildi: ' + count + ' ta element'; }
      },
      {
        regex: /^Ошибка: (.+)$/,
        replace: function (_, msg) { return 'Xatolik: ' + msg; }
      },
      {
        regex: /^Ничего не найдено$/,
        replace: function () { return 'Hech narsa topilmadi'; }
      },
      {
        regex: /^Файл не найден или недоступен\. Нажмите ↻ для обновления дерева\.$/,
        replace: function () { return 'Fayl topilmadi yoki mavjud emas. Daraxtni yangilash uchun ↻ bosing.'; }
      },
      {
        regex: /^Сохранено (\d+) файл$/,
        replace: function (_, count) { return count + ' ta fayl saqlandi'; }
      },
      {
        regex: /^Сохранено (\d+) файла$/,
        replace: function (_, count) { return count + ' ta fayl saqlandi'; }
      },
      {
        regex: /^Сохранено (\d+) файлов$/,
        replace: function (_, count) { return count + ' ta fayl saqlandi'; }
      },
      {
        regex: /^Сохранено (\d+) из (\d+) файл$/,
        replace: function (_, saved, total) { return total + ' dan ' + saved + ' ta fayl saqlandi'; }
      },
      {
        regex: /^Сохранено (\d+) из (\d+) файла$/,
        replace: function (_, saved, total) { return total + ' dan ' + saved + ' ta fayl saqlandi'; }
      },
      {
        regex: /^Сохранено (\d+) из (\d+) файлов$/,
        replace: function (_, saved, total) { return total + ' dan ' + saved + ' ta fayl saqlandi'; }
      }
    ]
  };

  function normalizeLocale(locale) {
    return SUPPORTED_LOCALES.indexOf(locale) >= 0 ? locale : null;
  }

  function getQueryLocale() {
    try {
      return normalizeLocale(new URLSearchParams(window.location.search).get('locale'));
    } catch (error) {
      return null;
    }
  }

  function getStoredLocale() {
    try {
      return normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
    } catch (error) {
      return null;
    }
  }

  function setStoredLocale(locale) {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch (error) {
      return;
    }
  }

  function updateLocaleQuery(locale) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('locale', locale);
      window.history.replaceState({}, '', url.toString());
    } catch (error) {
      return;
    }
  }

  function translateExact(text) {
    if (currentLocale === 'ru') {
      return text;
    }

    var dict = TRANSLATIONS[currentLocale];
    if (dict && Object.prototype.hasOwnProperty.call(dict, text)) {
      return dict[text];
    }

    var patterns = PATTERNS[currentLocale];
    if (patterns) {
      for (var i = 0; i < patterns.length; i += 1) {
        var rule = patterns[i];
        if (rule.regex.test(text)) {
          return text.replace(rule.regex, rule.replace);
        }
      }
    }

    return text;
  }

  function translateTextPreservingWhitespace(value) {
    if (!value || currentLocale === 'ru') {
      return value;
    }

    var match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match) {
      return value;
    }

    var translated = translateExact(match[2]);
    return match[1] + translated + match[3];
  }

  function shouldSkipNode(node) {
    if (!node || !node.parentNode || node.parentNode.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }

    var tagName = node.parentNode.tagName;
    return tagName === 'PRE' || tagName === 'CODE' || tagName === 'SCRIPT' || tagName === 'STYLE' || tagName === 'TEXTAREA';
  }

  function localizeTextNode(node) {
    if (shouldSkipNode(node)) {
      return;
    }

    if (typeof node._i18nOriginalText === 'undefined') {
      node._i18nOriginalText = node.textContent;
    }

    node.textContent = currentLocale !== 'ru'
      ? translateTextPreservingWhitespace(node._i18nOriginalText)
      : node._i18nOriginalText;
  }

  function localizeAttribute(element, attributeName) {
    if (!element.hasAttribute(attributeName)) {
      return;
    }

    var storeKey = '_i18nOriginal' + attributeName.charAt(0).toUpperCase() + attributeName.slice(1);
    if (typeof element[storeKey] === 'undefined') {
      element[storeKey] = element.getAttribute(attributeName);
    }

    element.setAttribute(
      attributeName,
      currentLocale !== 'ru' ? translateTextPreservingWhitespace(element[storeKey]) : element[storeKey]
    );
  }

  function localizeTree(root) {
    if (!root) {
      return;
    }

    if (root.nodeType === Node.TEXT_NODE) {
      localizeTextNode(root);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE) {
      return;
    }

    localizeAttribute(root, 'title');
    localizeAttribute(root, 'placeholder');
    localizeAttribute(root, 'aria-label');

    var childNodes = root.childNodes;
    for (var i = 0; i < childNodes.length; i += 1) {
      localizeTree(childNodes[i]);
    }
  }

  function updateLocaleButtons() {
    var ruButton = document.getElementById('localeRu');
    var enButton = document.getElementById('localeEn');
    var uzButton = document.getElementById('localeUz');
    if (!ruButton || !enButton) {
      return;
    }

    ruButton.classList.toggle('active', currentLocale === 'ru');
    enButton.classList.toggle('active', currentLocale === 'en');
    if (uzButton) uzButton.classList.toggle('active', currentLocale === 'uz');
    ruButton.title = currentLocale === 'en' ? 'Russian' : currentLocale === 'uz' ? 'Ruscha' : 'Русский';
    enButton.title = 'English';
    if (uzButton) uzButton.title = currentLocale === 'en' ? 'Uzbek' : currentLocale === 'uz' ? 'O\'zbekcha' : 'Узбекский';
  }

  function getDefaultErDsl() {
    if (currentLocale === 'en') {
      return 'Table users {\n'
        + '  id int [pk]\n'
        + '  username varchar\n'
        + '  email varchar [unique]\n'
        + '  role_id int [ref: > roles.id]\n'
        + '  created_at timestamp\n'
        + '}\n\n'
        + 'Table roles {\n'
        + '  id int [pk]\n'
        + '  name varchar [unique]\n'
        + '  description text\n'
        + '}\n\n'
        + 'Table requests {\n'
        + '  id int [pk]\n'
        + '  title varchar [not null]\n'
        + '  owner_id int [ref: > users.id]\n'
        + '  status_id int [ref: > statuses.id]\n'
        + '  created_at timestamp\n'
        + '}\n\n'
        + 'Table statuses {\n'
        + '  id int [pk]\n'
        + '  name varchar [unique]\n'
        + '}\n\n'
        + 'Ref: requests.status_id > statuses.id';
    }

    if (currentLocale === 'uz') {
      return 'Table foydalanuvchilar {\n'
        + '  id int [pk]\n'
        + '  login varchar\n'
        + '  email varchar [unique]\n'
        + '  rol_id int [ref: > rollar.id]\n'
        + '  created_at timestamp\n'
        + '}\n\n'
        + 'Table rollar {\n'
        + '  id int [pk]\n'
        + '  name varchar [unique]\n'
        + '  description text\n'
        + '}\n\n'
        + 'Table sorovlar {\n'
        + '  id int [pk]\n'
        + '  title varchar [not null]\n'
        + '  owner_id int [ref: > foydalanuvchilar.id]\n'
        + '  status_id int [ref: > holatlar.id]\n'
        + '  created_at timestamp\n'
        + '}\n\n'
        + 'Table holatlar {\n'
        + '  id int [pk]\n'
        + '  name varchar [unique]\n'
        + '}\n\n'
        + 'Ref: sorovlar.status_id > holatlar.id';
    }

    return 'Table polzovateli {\n'
      + '  id int [pk]\n'
      + '  login varchar\n'
      + '  email varchar [unique]\n'
      + '  rol_id int [ref: > roli.id]\n'
      + '  created_at timestamp\n'
      + '}\n\n'
      + 'Table roli {\n'
      + '  id int [pk]\n'
      + '  name varchar [unique]\n'
      + '  description text\n'
      + '}\n\n'
      + 'Table zayavki {\n'
      + '  id int [pk]\n'
      + '  title varchar [not null]\n'
      + '  owner_id int [ref: > polzovateli.id]\n'
      + '  status_id int [ref: > statusy.id]\n'
      + '  created_at timestamp\n'
      + '}\n\n'
      + 'Table statusy {\n'
      + '  id int [pk]\n'
      + '  name varchar [unique]\n'
      + '}\n\n'
      + 'Ref: zayavki.status_id > statusy.id';
  }

  function getErHelpExample() {
    if (currentLocale === 'en') {
      return 'Table users {\n'
        + '  id int [pk]\n'
        + '  name varchar\n'
        + '  email varchar [unique]\n'
        + '  role_id int [ref: > roles.id]\n'
        + '}\n\n'
        + 'Table roles {\n'
        + '  id int [pk]\n'
        + '  name varchar\n'
        + '}\n\n'
        + 'Ref: users.role_id > roles.id';
    }

    if (currentLocale === 'uz') {
      return 'Table foydalanuvchilar {\n'
        + '  id int [pk]\n'
        + '  name varchar\n'
        + '  email varchar [unique]\n'
        + '  rol_id int [ref: > rollar.id]\n'
        + '}\n\n'
        + 'Table rollar {\n'
        + '  id int [pk]\n'
        + '  name varchar\n'
        + '}\n\n'
        + 'Ref: foydalanuvchilar.rol_id > rollar.id';
    }

    return 'Table polzovateli {\n'
      + '  id int [pk]\n'
      + '  name varchar\n'
      + '  email varchar [unique]\n'
      + '  rol_id int [ref: > roli.id]\n'
      + '}\n\n'
      + 'Table roli {\n'
      + '  id int [pk]\n'
      + '  name varchar\n'
      + '}\n\n'
      + 'Ref: polzovateli.rol_id > roli.id';
  }

  function getErPlaceholder() {
    if (currentLocale === 'en') {
      return 'Table users {\n  id int [pk]\n  name varchar\n  email varchar [unique]\n}';
    }

    if (currentLocale === 'uz') {
      return 'Table foydalanuvchilar {\n  id int [pk]\n  name varchar\n  email varchar [unique]\n}';
    }

    return 'Table polzovateli {\n  id int [pk]\n  name varchar\n  email varchar [unique]\n}';
  }

  function updateLocaleSpecificContent() {
    var erEditor = document.getElementById('erDslEditor');
    if (erEditor) {
      erEditor.setAttribute('placeholder', getErPlaceholder());
    }

    var erHelpExample = document.querySelector('#erHelp pre');
    if (erHelpExample) {
      erHelpExample.textContent = getErHelpExample();
    }
  }

  function getWindowTitle(mode) {
    if (mode === 'er') {
      if (currentLocale === 'en') return 'ER Diagram — Local editor';
      if (currentLocale === 'uz') return 'ER Diagram — Mahalliy muharrir';
      return 'ER Diagram — Локальный редактор';
    }

    if (currentLocale === 'en') return 'BPMN Modeler — Local editor';
    if (currentLocale === 'uz') return 'BPMN Modeler — Mahalliy muharrir';
    return 'BPMN Modeler — Локальный редактор';
  }

  function applyLocaleToDom(root) {
    if (isApplyingLocale) {
      return;
    }

    isApplyingLocale = true;
    document.documentElement.lang = currentLocale;
    document.title = getWindowTitle(window.currentMode || 'bpmn');
    localizeTree(root || document.body);
    updateLocaleSpecificContent();
    updateLocaleButtons();
    isApplyingLocale = false;
  }

  function scheduleApplyLocale(root) {
    if (localeApplyScheduled) {
      return;
    }

    localeApplyScheduled = true;
    window.requestAnimationFrame(function () {
      localeApplyScheduled = false;
      applyLocaleToDom(root || document.body);
    });
  }

  function notifyParent(locale) {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'modeler-locale-change', locale: locale }, '*');
    }
  }

  function setModelerLocale(locale, options) {
    var normalized = normalizeLocale(locale);
    if (!normalized) {
      return;
    }

    var settings = Object.assign(
      {
        notifyParent: false,
        persist: true,
        updateQuery: true
      },
      options || {}
    );

    currentLocale = normalized;

    if (settings.persist) {
      setStoredLocale(normalized);
    }

    if (settings.updateQuery) {
      updateLocaleQuery(normalized);
    }

    applyLocaleToDom(document.body);

    if (settings.notifyParent) {
      notifyParent(normalized);
    }
  }

  function initializeLocaleObserver() {
    if (localeObserver || !document.body) {
      return;
    }

    localeObserver = new MutationObserver(function () {
      if (currentLocale !== 'ru') {
        scheduleApplyLocale(document.body);
      }
    });

    localeObserver.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }

  function getDefaultBpmnLabels() {
    if (currentLocale === 'en') {
      return {
        start: 'Start',
        task: 'Task 1',
        gateway: 'Condition?',
        optionA: 'Option A',
        optionB: 'Option B',
        end: 'End',
        yes: 'Yes',
        no: 'No'
      };
    }

    if (currentLocale === 'uz') {
      return {
        start: 'Boshlanish',
        task: 'Vazifa 1',
        gateway: 'Shart?',
        optionA: 'Variant A',
        optionB: 'Variant B',
        end: 'Tugash',
        yes: 'Ha',
        no: 'Yo\'q'
      };
    }

    return {
      start: 'Начало',
      task: 'Задача 1',
      gateway: 'Условие?',
      optionA: 'Вариант A',
      optionB: 'Вариант B',
      end: 'Конец',
      yes: 'Да',
      no: 'Нет'
    };
  }

  function initializeModelerLocale() {
    currentLocale = getQueryLocale() || getStoredLocale() || 'ru';
    document.documentElement.lang = currentLocale;
    initializeLocaleObserver();
    applyLocaleToDom(document.body);
  }

  window.getModelerLocale = function () {
    return currentLocale;
  };

  window.localizeText = function (text) {
    return translateExact(text);
  };

  window.applyLocaleToDom = applyLocaleToDom;
  window.getModelerWindowTitle = getWindowTitle;
  window.getDefaultBpmnLabels = getDefaultBpmnLabels;
  window.getDefaultErDsl = getDefaultErDsl;
  window.initializeModelerLocale = initializeModelerLocale;

  var nativeConfirm = window.confirm.bind(window);
  var nativePrompt = window.prompt.bind(window);

  window.confirm = function (message) {
    return nativeConfirm(currentLocale !== 'ru' ? translateExact(message) : message);
  };

  window.prompt = function (message, defaultValue) {
    return nativePrompt(currentLocale !== 'ru' ? translateExact(message) : message, defaultValue);
  };

  window.setModelerLocale = function (locale) {
    setModelerLocale(locale, {
      notifyParent: true,
      persist: true,
      updateQuery: true
    });
  };
})();
