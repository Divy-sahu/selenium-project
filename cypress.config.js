const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      on("task", {
        writeFile({ fileName, content }) {
          const filePath = path.join(__dirname, "downloads", fileName);
          if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
          }
          fs.writeFileSync(filePath, content, "utf8");
          return true;
        }
      });

      return config;
    },

    // ✅ Support file path (optional if using default):
    supportFile: "cypress/support/e2e.js",
  }
});
