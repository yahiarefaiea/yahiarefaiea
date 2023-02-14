const {camelCase} = require('lodash')
const contentFiles = require('./json')
let content = {}

contentFiles.forEach((file) => {
  let key = camelCase(file.replace('.json', ''))
  let json = require(`./json/${file}`)
  content[key] = json
})

module.exports = content
