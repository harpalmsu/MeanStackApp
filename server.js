var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/login',function(req,res,next){
	var login=[
	'harpal',
	
	];
	res.send(login);
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});