import {toLower} from 'lodash'
// import channels from './channels'
// import about from './about'
// import journey from './journey'
// import projects from './projects'
// import bucketList from './bucketList'

const profile = {}
profile.firstName = 'Yahia'
profile.lastName = 'Refaiea'
profile.fullName = `${profile.firstName} ${profile.lastName}`
profile.username = toLower(profile.fullName.replace(/\s/g,''))

profile.domains = {}
profile.domains.default = `${profile.username}.com`
profile.domains.short = `${toLower(profile.firstName)}.com`

profile.websites = {}
profile.websites.default = `http://${profile.domains.default}`
profile.websites.short = `http://${profile.domains.short}`
profile.websites.blog = `http://blog.${profile.domains.default}`

profile.email = `hey@${profile.domains.default}`
profile.channels = `${profile.websites.short}/anywhere`

export {
  profile as default,
  // channels,
  // about,
  // journey,
  // projects,
  // bucketList
}
