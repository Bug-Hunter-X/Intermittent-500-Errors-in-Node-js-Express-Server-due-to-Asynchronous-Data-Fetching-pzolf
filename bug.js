const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronously fetching data from a database or external API
  getDataFromDatabase().then(data => {
    res.send(data);
  }).catch(err => {
    console.error(err);
    res.status(500).send('Internal Server Error');
  });
});

function getDataFromDatabase() {
  // Simulate an asynchronous operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a database error randomly
      if (Math.random() < 0.5) {
        reject(new Error('Failed to fetch data from database'));
      } else {
        resolve({ message: 'Data fetched successfully' });
      }
    }, 1000);
  });
}

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));