const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

var users = {}
//{"ct":'123456'}
var server = http.createServer(function(req, res) {
	//解析数据
	var str = ''
	req.on('data', function(data) {
		str +=data;
	})
	req.on('end', function() {
		var obj = urlLib.parse(req.url, true)
		
		const url = obj.pathname;
		const GET = obj.query;
		const POST = querystring.parse(str)
		//区分——接口、文件
	
		//读取文件
		if( url == '/user') {
			switch(GET.act) {
				case 'reg':
					//1.检查用户是否存在
					//2.插入users
					if(users[GET.user]) {
						res.write('{"code":false, "msg":"用户名已存在"}')
					} else {
						users[GET.user] = GET.pwd
						res.write('{"code":true, "msg":"注册成功"}')
					}
					break;
				case 'login':
					//1.检查用户是否存在
					//2.密码是否正确
					if(users[GET.user]) {
						if(users[GET.user] == GET.pwd) {
							res.write('{"code":true, "msg":"登录成功"}')
						} else {
							res.write('{"code":false, "msg":"密码错误"}')
						}
					} else {
						res.write('{"code":false, "msg":"用户名不存在"}')
					}
					break;
				default:
					res.write('{"code":false, "msg":"未知错误"}')
			}
			res.end()
		} else {
			var file_name = './www' +url;
			fs.readFile(file_name, function(err, data) {
				if (err) {
					res.write('404')
				} else {
					res.write(data)
				}
				res.end()
			})
		}
	})
	
	
})

server.listen(8089);








