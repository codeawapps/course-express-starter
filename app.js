const express = require('express');
const app = express();

const PORT = 3030;

app.get('/', (_, res) => {
    res.send('HolaMundo!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});