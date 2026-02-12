# Playwright Automation – Search & Map QA Challenge

This project contains automated end-to-end tests for the  
Search & Map functionality of:

https://gruppenplatz.healthycloud.de/HC_GP_Public_Pages/

Built with **Playwright + TypeScript** using a structured, maintainable test architecture.


##  Project Structure

playwright/
├── tests/ # Test specs (smoke, search, filters, pagination, details)
├── pages/ # Page Object Model
├── utils/ # Utility helpers (e.g., cookie consent handler)
├── playwright.config.ts
└── package.json

---

##  Test Coverage

- UI Smoke test
- Search functionality
- Filter regression (Alter → Erwachsene)
- Pagination validation
- Details page navigation

Tests are written using stable selectors and avoid brittle data assertions.

---

##  Installation

```bash
npm install
npx playwright install
