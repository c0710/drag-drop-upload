const app = require('express')()
const multer = require('multer')

/**
 *  multer中间件，设置文件保存路径
 *  必填，否则会报错
 * */
const upload = multer({dest: 'uploads/'})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

var server = app.listen(9000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('server start!', host, port)
})