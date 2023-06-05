//import json server
const jsonserver = require('json-server');

//create a new server
const server = jsonserver.create();

//setup path for db.json file
const router=jsonserver.router('db.json');

//return a middleware used by json server
const middleware = jsonserver.defaults();

//setup port
const port = process.env.PORT || 3001;

//use port in server
server.use(middleware);
server.use(router);

//run port
server.listen(port, () => {
    console.log('listening on port 3001');
})