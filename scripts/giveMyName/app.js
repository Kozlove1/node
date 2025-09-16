fs = require('fs')

const app = fs.readFileSync('./data.txt')

console.log(app.toString())