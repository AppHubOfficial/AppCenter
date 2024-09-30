const express = require('express');
const app = express();
const port = 5000; // Puoi scegliere un'altra porta

// Middleware per interpretare le richieste JSON
app.use(express.json());

// Una route di esempio
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
