const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // 
  defaultCommandTimeout: 8000,
  
  env: {
    url: "https://stagevisitor.urspayce.com/new-visitor/641d80d7f97c654aaa1bb741",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
});
