let express = require('express')
var history = require('connect-history-api-fallback')
let app = express()
app.use(history())
app.use(express.static('.'))
app.listen(9001, function() { console.log('ok') })