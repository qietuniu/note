const http = require('http')

const server = http.createServer(function(req, res) {
	console.log("有人连接我了")
	res.write("abc")
	res.end()
})

//监听-连接端口
server.listen(8087)
//只在操作台反应，浏览器因为没有返回东西所以没有反应