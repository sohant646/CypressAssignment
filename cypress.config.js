const { defineConfig } = require('cypress')

module.exports = defineConfig({
  retries: {
    runMode: 0,
    openMode: 0,
  },
  video: true,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  failOnNonZeroExit: false,
  defaultCommandTimeout: 30000,
  execTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 80000,
  viewportWidth: 1600,
  viewportHeight: 1200,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: "https://magento.softwaretestingboard.com/",
    specPattern: 'cypress/integration',
  },
})
