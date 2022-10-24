const {join} = require('path')
const {readdir, readFileSync} = require('fs')
const {outputFile} = require('fs-extra')
const yaml = require('js-yaml')
const contentDirectory = join(__dirname, '../content')
const outputDirectory = join(__dirname, '../json')

readdir(contentDirectory, function(err, files) {
  if(err) throw err
  files.forEach((file) => {
    let filePath = join(contentDirectory, file)
    let outputPath = join(outputDirectory, file.replace('.yaml', '.json'))
    let buffer = readFileSync(filePath)
    buffer = yaml.load(buffer)
    buffer = JSON.stringify(buffer)

    outputFile(outputPath, buffer, function(err) {
      if(err) throw err
    })
  })
})
