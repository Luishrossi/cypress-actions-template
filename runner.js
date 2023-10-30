const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImEyMmYzYjRkLWE0MmMtNGFkZS05MWQ3LTBjZTZjMDVjZDM5NS0xNjk4NzA4NTc4NzM2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYzUyYTZlNTUtOTJiMi00ZWJkLTg4NDItOWQ4MmU2MTRhZWM1IiwidHlwZSI6InQifQ.EH_DFmm2NcbGNZo9gkqIQTcZMCvcWozumIR-QQwK9l4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
