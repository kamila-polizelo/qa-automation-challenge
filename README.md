# QA Automation Challenge

![Cypress](https://img.shields.io/badge/Cypress-15.15.0-brightgreen)
![Node](https://img.shields.io/badge/Node.js-24-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-blue)
![Status](https://img.shields.io/badge/Status-Stable-success)

Enterprise-style QA automation framework developed using Cypress and JavaScript for frontend E2E and API testing.

---

# Project Overview

This project was designed to simulate a scalable QA automation framework following modern QA Engineering best practices.

The framework includes:

- Frontend E2E automation
- API automation
- Positive and negative scenarios
- JSON schema validation
- CI/CD pipeline
- Automated reporting
- Test evidence generation
- Reusable architecture
- Code quality standardization

---

# Technologies

- Cypress
- JavaScript
- Node.js
- Faker
- AJV (JSON Schema Validation)
- Mochawesome
- GitHub Actions
- ESLint
- Prettier

---

# Project Architecture

```bash
cypress
│
├── e2e
│   ├── api
│   └── frontend
│
├── factories
├── fixtures
├── pages
├── schemas
├── services
├── support
└── utils
```

---

# Implemented Test Scenarios

## Frontend E2E

- User login
- Invalid login
- User registration
- Product registration

## API Testing

- Create user
- Login API
- Invalid login API
- Get products
- Response schema validation

---

# Design Patterns and Best Practices

- Page Object Model (POM)
- Service Layer Pattern
- Factory Pattern
- Custom Commands
- Dynamic Test Data with Faker
- Schema Validation with AJV
- Separation of Responsibilities
- Reusable Components
- Retry Strategy
- Headless Execution Support
- Automated Reporting
- CI/CD Integration
- ESLint + Prettier
- Partial Test Cleanup Strategy

---

# Reporting and Observability

The framework includes:

- Mochawesome HTML reports
- JSON reports
- Automatic screenshots on failures
- Automatic video recording
- GitHub Actions artifacts

Generated report location:

```bash
cypress/reports/final-report/report.html
```

---

# Installation

```bash
npm install
```

---

# Run Cypress UI

```bash
npm run cy:open
```

---

# Run All Tests

```bash
npm run cy:run
```

---

# Run Frontend Tests

```bash
npm run test:frontend
```

---

# Run API Tests

```bash
npm run test:api
```

---

# Run Smoke Tests

```bash
npm run test:smoke
```

---

# Generate Reports

```bash
npm run test:report
```

---

# Lint and Code Formatting

## Run ESLint

```bash
npm run lint
```

## Run Prettier

```bash
npm run format
```

---

# CI/CD Pipeline

This project includes a GitHub Actions pipeline configured to:

- Install dependencies
- Execute Cypress tests automatically
- Generate consolidated reports
- Upload screenshots and videos
- Run on push and pull requests
- Allow manual execution using workflow_dispatch

Workflow location:

```bash
.github/workflows/cypress.yml
```

---

# Notes

This project uses the public ServeRest environment for automation practice purposes.

Partial cleanup strategies were implemented to reduce impact on shared public test environments.

---

# Project Highlights

- Frontend and API automation
- Enterprise-style architecture
- Dynamic and isolated test data
- CI/CD ready
- Stable and resilient tests
- Automated reports and artifacts
- Scalable automation structure
- Modern QA Engineering practices

---

# Author

Kamila Polizelo Fiori
