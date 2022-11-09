const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message){
          console.log(`Message from the log task ${message}`)
          return null
        }
      })
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
}
