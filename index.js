const {camelCase} = require('lodash')
const {readdir, readFileSync} = require('fs')
const {join} = require('path')
const jsonDirectory = join(__dirname, './json')
let content = {}

readdir(jsonDirectory, function(err, files) {
  if(err) throw err
  files.forEach((file) => {
    let filePath = join(jsonDirectory, file)
    let key = camelCase(file.replace('.json', ''))
    let buffer = readFileSync(filePath)
    content[key] = JSON.parse(buffer)
  })
})

module.exports = content
