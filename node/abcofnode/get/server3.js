const http = require('http')
const urlLip = require('url')
http.createServer(function(req, res) {
	var obj = urlLip.parse(req.url, true)
	var url = obj.pathname
	let GET = obj.query
	
	console.log(url, GET);
	res.write('aaa')
	res.end()
}).listen(8089)

