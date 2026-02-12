# Gruppenplatz – Search & Map QA Automation

This repository contains automated end-to-end tests for the Gruppenplatz Search & Map feature.

##  Scope Covered

- UI Smoke Test
- Location Search
- Filter Functionality (Alter)
- Pagination Validation
- Details Page Navigation

##  Tech Stack

- Playwright
- TypeScript
- Page Object Model structure
- CI-ready project setup

##  Project Structure

playwright/
├── tests/
├── pages/
├── utils/
├── playwright.config.ts

## ▶ Run Tests

npx playwright test

## ▶ Run in UI Mode

npx playwright test --ui
