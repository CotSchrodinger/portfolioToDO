exports.config = {
  tests: 'scripts/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://todomvc.com/examples/vue',
      show: false
    }
  },
  "plugins": {
    "allure": {}
},
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'todo'

  
  
}
