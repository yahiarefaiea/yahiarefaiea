my.repo_link = `http://github.com/${my.username}/profile` // this should be taken from './channels'
my.channels_repo_link = `${my.repo_link}/blob/anywhere#readme`

my.channels_as_markdown = `Anywhere [@${my.username}](${my.channels_repo_link})`
my.channels_as_html = `Anywhere <a href='${my.channels_repo_link}' title='@${my.username}'>@${my.username}</a>`

// on prepublish.. take the data from here and create .md file

