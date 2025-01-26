# Intermittent 500 Errors in Node.js Express Server

This repository demonstrates a common issue in Node.js Express servers: intermittent 500 errors caused by asynchronous data fetching and insufficient error handling.  The server simulates an external API or database call which may fail randomly.

## Bug
The `bug.js` file contains an Express server that fetches data asynchronously.  If the simulated database call fails (50% probability), the server responds with a generic 500 error.  There is no retry logic or more sophisticated error handling.

## Solution
The `bugSolution.js` demonstrates improved error handling, including a retry mechanism with exponential backoff to gracefully handle temporary database failures and prevents cascading failures during peak loads.  A more informative error message is also returned to the client.

## How to Run
1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install` to install the required dependencies.
4. Run `node bug.js` to run the buggy server.
5. Run `node bugSolution.js` to run the improved server.

## Technologies Used
* Node.js
* Express.js

## License
MIT