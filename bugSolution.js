const express = require('express');
const app = express();

const maxRetries = 3;
const retryDelay = 1000; // 1 second

app.get('/', (req, res) => {
  fetchDataWithRetry(0).then(data => {
    res.send(data);
  }).catch(err => {
    console.error('Failed after multiple retries:', err);
    res.status(500).send('Failed to fetch data after multiple retries');
  });
});

async function fetchDataWithRetry(retries) {
  try {
    return await getDataFromDatabase();
  } catch (err) {
    if (retries < maxRetries) {
      const delay = retryDelay * Math.pow(2, retries);
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchDataWithRetry(retries + 1);
    } else {
      throw err;
    }
  }
}

function getDataFromDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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