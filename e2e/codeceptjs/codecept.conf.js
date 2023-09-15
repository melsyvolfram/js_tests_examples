const baseUrl = process.env.BASE_URL || 'https://github.com';
const headless = 'new'; // 'new' - headless mode, false - shows the window

const { setCommonPlugins } = require('@codeceptjs/configure');
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  baseUrl: baseUrl,
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: baseUrl,
      windowSize: '1450x760',
      waitForAction: 500,
      waitForTimeout: 5000,
      chrome: {
        headless: headless,
        args: ['--no-sandbox']
      }
    }
  },
  include: {
    I: './steps_file.js',
    // PAGE OBJECTS
    mainPage: './pages/main.js',
    searchResultsPage: './pages/search_results.js',
    // COMPONENTS
    searchComponent: './components/search.js',
  },
  name: 'codeceptjs'
}
