var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
	res.render('content');
});

app.get('/auth/google', (req, res) => {
	if (req.query.password === 'kodilla') {
		res.redirect('https://kodilla.com');        
	} else {
		res.render('wrong', {
			info: 'Wrong password',
			url: 'http://localhost:3000/'
		});
	}
});

app.listen(3000);
app.use(function (req, res, next) {
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});