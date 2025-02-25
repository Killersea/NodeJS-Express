var mysql = require('mysql2');

database  = {
	user: 'root',
	password: 'Superhero03',
	host: '127.0.0.1',
	database: 'test',
	port: 3306,
}

exports.init = (connect_callback) => {
    console.log("Initializing module db-mysql");
    initializeConnection(connect_callback);
};  

function  initializeConnection(connect_callback/*(connection)*/) {
	// displays your config in the terminal
	console.log(database);
	console.log('Connecting to mysql');
	console.log(' host='  +  database.server);
	console.log(' database='  +  database.database);
	console.log(' user='  +  database.user);
	console.log(' options='  +  database.options);
	console.log('');
	console.log("Initialising module connection");

	// creating connection
	var connection =  mysql.createConnection({
		user: database.user,
		password: database.password,
		host: database.host,
		database: database.database,
		port: database.port,
	});
	connection.connect((err) => {
        if (err) {
            console.error("MySQL Connection Failed:", err);
            return;
        }
        console.log("✅ MySQL Connected Successfully!");
        connect_callback(connection);
    });
}