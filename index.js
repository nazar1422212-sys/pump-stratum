const config = require('./config');

console.log("PUMP pool running...");

require('net').createServer(socket => {
  socket.on('data', data => {
    console.log("miner:", data.toString());
    socket.write("job");
  });
}).listen(config.stratumPort);
