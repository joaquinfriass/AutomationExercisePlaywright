# 🎭 Playwright Automation Framework - Automation Exercise

Este proyecto es una suite de pruebas de extremo a extremo (E2E) robusta y escalable, desarrollada con **Playwright** y **TypeScript**. El objetivo es automatizar el flujo crítico de negocio de la plataforma [Automation Exercise](https://automationexercise.com/), aplicando patrones de diseño avanzados para garantizar un mantenimiento mínimo y una alta confiabilidad.

---

## 🛠️ Stack Tecnológico

*   **Engine:** Playwright
*   **Lenguaje:** TypeScript
*   **Patrón de Diseño:** Page Object Model (POM)
*   **Data Strategy:** Factory Pattern (Dynamic Data Generation)
*   **Reportes:** Playwright HTML Reporter

---

## 🏗️ Arquitectura y Mejores Prácticas

El framework fue diseñado bajo pilares de ingeniería de software para QA Automation:

### 1. Page Object Model (POM)
Separamos la estructura de la página de la lógica de los tests. Cada página (Home, Login, Register) es una clase independiente, lo que permite reutilizar localizadores y métodos de acción.

### 2. Factory Pattern & Dynamic Data
Para evitar errores por usuarios duplicados, implementamos una lógica de generación de datos aleatorios:
*   Uso de **timestamps** para crear emails y nombres de usuario únicos en cada ejecución.
*   Evita la necesidad de limpiar la base de datos manualmente tras fallos en las pruebas.

### 3. Custom Fixtures & Hooks
*   **setup:** Navegación automatizada y preparación del contexto antes de cada test.
*   **teardown:** Cierre controlado de la página y limpieza de cookies.
*   **Screenshots:** Configuración automática para capturar el estado final de la pantalla en cada ejecución, facilitando el debugging.

---

## 🧪 Casos de Prueba Automatizados

### **Test Case 1: Register User**
Flujo completo que valida:
- [x] Visibilidad de elementos de registro.
- [x] Llenado dinámico de información de cuenta.
- [x] Selección de preferencias (Newsletter, Special Offers).
- [x] Verificación de creación de cuenta exitosa.
- [x] Persistencia de sesión activa (`Logged in as username`).

---

   
