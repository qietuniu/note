const http = require('http')
const querystring = require('querystring')

http.createServer(function(req, res) {
	var str = '' //接受数据
	var i = 0
	console.log('cc')
	req.on('data', function(data){
		console.log(`第${i++}次`)
		str += data
	})
	req.on('end', function(){
		var POST = querystring.parse(str)
		console.log(POST)
	})
}).listen(8089)
