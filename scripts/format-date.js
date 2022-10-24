const {isArray} = require('lodash')
const moment = require('moment')
const FORMAT = 'YYYY.MM.DD'
const YEAR = 0
const MONTH = 1
const DAY = 2

module.exports = function(list) {
  for(let item of list) {
    if(!isArray(item.date)) {
      item.formated_date = moment(item.date, FORMAT).format('MMMM D, YYYY')
    } else {
      let date1 = item.date[0].split('.')
      let date2 = item.date[1].split('.')

      if(item.date[0] === item.date[1]) {
        item.formated_date = moment(item.date[0], FORMAT).format('MMMM D, YYYY')
      } else if(item.date[1] === 'now') {
        let yymmd1 = moment(item.date[0], FORMAT).format('MMMM D, YYYY')
        item.formated_date = `${yymmd1} → now`
      } else if(date1[YEAR] !== date2[YEAR]) {
        let yymmd1 = moment(item.date[0], FORMAT).format('MMMM D, YYYY')
        let yymmd2 = moment(item.date[1], FORMAT).format('MMMM D, YYYY')
        item.formated_date = `${yymmd1} → ${yymmd2}`
      } else if(date1[YEAR] === date2[YEAR] && date1[MONTH] !== date2[MONTH]) {
        let mmd1 = moment(item.date[0], FORMAT).format('MMMM D')
        let mmd2 = moment(item.date[1], FORMAT).format('MMMM D')
        item.formated_date = `${mmd1} → ${mmd2}, ${date1[YEAR]}`
      } else if(date1[YEAR] === date2[YEAR] && date1[MONTH] === date2[MONTH] && date1[DAY] !== date2[DAY]) {
        let d1 = moment(item.date[0], FORMAT).format('D')
        let d2 = moment(item.date[1], FORMAT).format('D')
        let mm = moment(date1[MONTH], 'MM').format('MMMM')
        item.formated_date = `${mm} ${d1} → ${d2}, ${date1[YEAR]}`
      }
    }
  }
  return list
}
