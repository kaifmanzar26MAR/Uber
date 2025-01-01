const http = require('http');
const app = require('./app');
const DBconnect = require('./DB/database');
const port = process.env.PORT || 3000;

//*Create a server
const server = http.createServer(app);

//*Connect to the database
DBconnect();

//*Start the server
server.listen(port, () => { 
    console.log(`Server is running on port ${port}`); 
}); 