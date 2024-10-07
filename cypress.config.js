const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, // 
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://stagevisitor.urspayce.com/new-visitor/641d80d7f97c654aaa1bb741",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
