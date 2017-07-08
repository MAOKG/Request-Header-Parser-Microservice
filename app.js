var express = require('express')
    app = express()
    bodyParser = require('body-parser')
    requestIp = require('request-ip')
    useragent = require('express-useragent')

app.use(useragent.express())
app.use(requestIp.mw())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', function(req, res) {


  res.send({'ipaddress': req.clientIp,
            'operating system': req.useragent.os,
            'language': req.acceptsLanguages()[0]
           })
})


// app.listen(3000, function() {
//   console.log('The server has started!')
// })

app.listen(process.env.PORT, process.env.IP, function() {
   console.log('The Server Has Started!');
})
