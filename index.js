const fse = require('fs-extra')
const _ = require('lodash')

module.exports = function() {
  const my = {}
  my.firstName = 'Yahia'
  my.lastName = 'Refaiea'
  my.fullName = `${my.firstName} ${my.lastName}`
  my.username = _.toLower(my.fullName.replace(/\s/g,''))
  my.domains = {
    default: `${my.username}.com`,
    short: `${_.toLower(my.firstName)}.com`
  }
  my.websites = {
    default: `http://${my.domains.default}`,
    short: `http://${my.domains.short}`,
    blog: `http://${my.domains.short}/blog`
  }
  my.email = `hey@${my.domains.default}`
  my.channels = `${my.websites.short}/anywhere`
  // my.channels_list = ``
  
  
  my.repo_link = `http://github.com/${my.username}`
  my.anywhere_repo_link = `${my.repo_link}/blob/anywhere#readme`
  
  my.anywhere_as_markdown = `Anywhere [@${my.username}](${my.anywhere_repo_link})`
  my.anywhere_as_html = `Anywhere <a href='${my.anywhere_repo_link}' title='@${my.username}'>@${my.username}</a>`
  
  // console.log(my)
  // console.log(Object.values(my))
  // console.log(JSON.stringify(my))
  
  fse.outputFile('./profile.json', JSON.stringify(my, null, 2), function(err) {
    if(err) console.log(err)
  })
  
  // channels: require('channels')
}()

// on prepublish.. take the data from here and create .md file

