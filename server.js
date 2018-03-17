const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res){
    res.render('login');
});

app.get('/logged', function (req, res){
	res.render('logged', {
		name: req.query.account
	});
});


app.listen(9000);
