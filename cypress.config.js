const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: "https://front.serverest.dev",

    env: {
      apiUrl: "https://serverest.dev",
    },
  },
});
