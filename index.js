const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({data: "data"})
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
});

module.exports = app;