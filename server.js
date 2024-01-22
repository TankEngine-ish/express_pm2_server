const express = require('express');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    // event loop is blocked
  }
}

app.get('/', (req, res) => {
  res.send(`Express Server ${process.pid}`);
});

/* 
The .pid property is used in Node.js to get the process ID of the current process. 
Here, process.pid returns the ID of the current process running the Express server.
The master and worker threads have different pid's.
*/


app.get('/timer', (req, res) => {
  delay(4000);
  res.send(`Wake UP, mfer!${process.pid}`);
});

console.log('Running Server.js...');
console.log('WORKER process started!');
app.listen(3000);
