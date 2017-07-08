var express = require('express')
    app = express()
    bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: true}))
app.get('/', function(req, res) {


  res.send({'ipaddress': req.ip,
            'software': req.get('user-agent'),
            'language': req.acceptsLanguages()[0]
           })
})


// app.listen(3000, function() {
//   console.log('The server has started!')
// })

app.listen(process.env.PORT, process.env.IP, function() {
   console.log('The Server Has Started!');
})
