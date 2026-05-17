# QA Automation Challenge

Automation framework developed using Cypress and JavaScript for frontend E2E and API testing, following modern QA engineering best practices.

---

# Technologies

- Cypress
- JavaScript
- Node.js
- Faker
- GitHub Actions

---

# Project Architecture

```bash
cypress
│
├── e2e
│   ├── api
│   └── frontend
│
├── fixtures
├── pages
├── services
├── support
└── utils
```

---

# Implemented Test Scenarios

## Frontend E2E

- User login
- User registration
- Product registration

## API Testing

- Create user
- Login API
- Get products

---

# Design Patterns and Best Practices

- Page Object Model (POM)
- Service Layer Pattern
- Custom Commands
- Dynamic Test Data with Faker
- Reusable Components
- Separation of Responsibilities
- CI/CD with GitHub Actions
- Headless Execution Support
- Resilient API Validation

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

# Run All Tests Headless

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

# CI/CD Pipeline

This project includes a GitHub Actions pipeline configured to:

- Install dependencies
- Execute Cypress tests automatically
- Validate frontend and API scenarios
- Run on push and pull requests

Workflow location:

```bash
.github/workflows/cypress.yml
```

---

# Project Highlights

- Frontend and API automation
- Reusable framework architecture
- Dynamic and isolated test data
- CI/CD ready
- Enterprise-style project organization
- Scalable automation structure
- Stable and resilient tests

---

# Author

Kamila Polizelo Fiori
