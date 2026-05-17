const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
  },

  retries: {
    runMode: 2,
    openMode: 0,
  },

  screenshotOnRunFailure: true,

  video: true,

  videosFolder: "cypress/videos",

  screenshotsFolder: "cypress/screenshots",

  e2e: {
    baseUrl: "https://front.serverest.dev",

    env: {
      apiUrl: "https://serverest.dev",
    },
  },
});
