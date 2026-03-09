# Auto Playwright Cucumber

Framework de automatización de pruebas E2E utilizando **Playwright** y **Cucumber** con el patrón **Page Object Model**.

## Tecnologías

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| [Node.js](https://nodejs.org/) | 18+ | Entorno de ejecución |
| [Playwright](https://playwright.dev/) | 1.40+ | Framework de automatización de navegadores |
| [Cucumber](https://cucumber.io/) | 9.0+ | Framework BDD para escribir tests en Gherkin |

## Arquitectura

```
┌─────────────────────────────────────────────────────────────────┐
│                         FEATURES (.feature)                      │
│                    Escenarios escritos en Gherkin                │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                     STEP DEFINITIONS (.steps.js)                 │
│              Implementación de los pasos del escenario           │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                       PAGE OBJECTS (.js)                         │
│         Encapsulan los selectores y acciones de cada página      │
└─────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                          PLAYWRIGHT                              │
│                  Interacción con el navegador                    │
└─────────────────────────────────────────────────────────────────┘
```

## Estructura del Proyecto

```
auto-playwright-cucumber/
├── features/                  # Archivos .feature con escenarios Gherkin
│   └── shopping.feature
├── pages/                     # Page Objects
│   ├── loginPage.js
│   └── inventoryPage.js
├── step-definitions/          # Implementación de los steps
│   ├── login.steps.js
│   └── inventory.steps.js
├── support/                   # Configuración y hooks
│   └── hooks.js
├── cucumber.js                # Configuración de Cucumber
├── playwright.config.js       # Configuración de Playwright
├── package.json
└── README.md
```

## Requisitos Previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd auto-playwright-cucumber
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar navegadores de Playwright**
   ```bash
   npx playwright install
   ```

## Ejecución de Tests

### Ejecutar todos los tests (modo por defecto)
```bash
npm test
```

### Ejecutar con navegador visible (headed)
```bash
npm run test:headed
```

### Ejecutar sin navegador visible (headless)
```bash
npm run test:headless
```

## Configuración

### Playwright (`playwright.config.js`)

| Opción | Valor | Descripción |
|--------|-------|-------------|
| `headless` | `false` | Valor por defecto (navegador visible) |
| `browserName` | `chromium` | Navegador a utilizar |
| `viewport` | `1280x720` | Resolución de pantalla |
| `baseURL` | `https://www.saucedemo.com` | URL base de la aplicación |

> **Nota:** Actualmente el proyecto solo soporta **Chromium**. Soporte para Firefox y WebKit puede agregarse en futuras versiones.

### Modos de Ejecución

| Comando | Modo | Descripción |
|---------|------|-------------|
| `npm test` | Por defecto | Usa configuración de `playwright.config.js` |
| `npm run test:headed` | Con navegador | Abre ventana del navegador visible |
| `npm run test:headless` | Sin navegador | Ejecución en segundo plano (ideal para CI/CD) |

### Cucumber (`cucumber.js`)

| Opción | Descripción |
|--------|-------------|
| `require` | Rutas a step definitions y hooks |
| `format` | Formatos de reporte (progress-bar, html) |

## Buenas Prácticas Implementadas

- **Page Object Model**: Separación de selectores y lógica de negocio
- **Selectores como constantes**: Fácil mantenimiento
- **Steps reutilizables**: Un archivo de steps por Page Object
- **Gherkin claro**: Escenarios legibles por no técnicos
- **Configuración centralizada**: playwright.config.js

## Reportes

Después de ejecutar los tests, se genera un reporte HTML en:
```
cucumber-report.html
```

## Autor

**Adrian Ramos**

