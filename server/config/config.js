const mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'https://auth-db168.hostinger.in/',
  user: '	u647003315_surv',
  password: 'survey8122',
  database: 'u647003315_surv	'
})
module.exports = connection
