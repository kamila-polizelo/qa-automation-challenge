# QA Automation Challenge

Automation framework developed using Cypress and JavaScript for frontend E2E and API testing.

---

# Technologies

- Cypress
- JavaScript
- Node.js
- Faker

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

# Author

Kamila Polizelo Fiori
