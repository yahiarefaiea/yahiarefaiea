const {readFileSync} = require('fs')
const {join} = require('path')
const yaml = require('js-yaml')

let profile = yaml.load(readFileSync(join(__dirname, './profile.yaml')))
let bucketList = yaml.load(readFileSync(join(__dirname, './bucket-list.yaml')))

module.exports = {
  profile,
  // channels,
  // about,
  // journey,
  // projects,
  bucketList
}
