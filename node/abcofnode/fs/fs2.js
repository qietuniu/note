const fs = require('fs')

fs.writeFile('b.txt', 'dasdsad', function(err) {
	console.log(err)
})