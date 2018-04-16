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

/**
 *  提交接口
 *  upload.array('file')表示上传一个名为file文件数组
 * */
app.post('/uploadFile', upload.array('files'), function (req, res, next) {
    console.log('upload!')
    res.end('upload!')
})

const server = app.listen(9000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('server start!', host, port)
})