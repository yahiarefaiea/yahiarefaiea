const {join} = require('path')
const {readdir, readFileSync} = require('fs')
const {outputFile} = require('fs-extra')
const {includes} = require('lodash')
const yaml = require('js-yaml')
const formatDate = require('./format-date')
const contentDirectory = join(__dirname, '../content')
const outputDirectory = join(__dirname, '../json')
const toFormatDate = [
  'experience',
  'press-and-recognition',
  'talks-and-workshops',
  'volunteering-activities'
]

readdir(contentDirectory, function(err, files) {
  if(err) throw err
  files.forEach((file) => {
    let filePath = join(contentDirectory, file)
    let outputPath = join(outputDirectory, file.replace('.yaml', '.json'))
    let buffer = readFileSync(filePath)
    buffer = yaml.load(buffer)
    if(includes(toFormatDate, file.replace('.yaml', '')))
      buffer.items = formatDate(buffer.items)
    buffer = JSON.stringify(buffer)

    outputFile(outputPath, buffer, function(err) {
      if(err) throw err
    })
  })
})
