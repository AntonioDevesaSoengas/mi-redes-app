/**
 * Node.js App based on Express
 */
const express = require('express')
const app = express()
var port = normalizePort(process.env.PORT || '3000');
app.get('/', (req, res) => res.send('Esta es mi página web!'))
app.listen(port, () => console.log('Server listening in port: ',port))

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}