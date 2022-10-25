const {camelCase} = require('lodash')
const contentFiles = require('./json')
let content = {}

contentFiles.forEach((file) => {
  let key = camelCase(file.replace('.json', ''))
  let buffer = require(`./json/${file}`)
  content[key] = buffer
})

module.exports = content
