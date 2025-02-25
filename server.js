const express =  require('express');
const server =  express();
var connection =  require('./config/db-mysql')
const bodyParser =  require('body-parser');  

//this will use as a middleware of our application to fetch json object to our body request
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.use(function (req, res, next) {
	// Website you wish to allow to connect when we make our Vue.js UI
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

server.get('/hello', (req, res) => {
	res.send('Hello World')
})

connection.init((dbConnection) => {
    //we will place our `server.listen` here
    server.listen('8080', function () {
        console.log('Listening to port 8080')
    })

    const loadModules = (server, dbConnection, callback) => {
        var modules =  require('./user/api')

        //this will run the init function in the user/api.js
        modules.init(server, dbConnection)

        callback(null, { status: 'success' })
    }

    loadModules(server, dbConnection, (err, resp) => {
        if (resp.status  ===  'success') {
            console.log('---Main Modules Activated----')
        }
    })
})