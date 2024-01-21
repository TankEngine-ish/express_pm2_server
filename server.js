const express = require('express');

const app = express();



function delay(duration) {
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    // event loop is blocked
  }
}



app.get('/', (req, res) => {
  res.send('Express Server');
});



app.get('/timer', (req, res) => {
    delay(9000);
    res.send('Wake UP!');
});

app.listen(3000);