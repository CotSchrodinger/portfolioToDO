exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://todomvc.com/examples/vue',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'todo',
  
}
