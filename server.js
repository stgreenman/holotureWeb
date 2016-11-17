var express = require('express');
var cors = require('cors');

// Create app
var app = express();
app.use(cors());
const router = require('./router');
router(app);
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	}
	else {
		next();
	}
});

// Tell the server which folder to serve
app.use(express.static('public'));

app.listen(PORT, function() {
	console.log('Express server is up on port ' + PORT);
});
