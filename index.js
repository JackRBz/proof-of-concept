const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

// app.get('/', (req, res) => {
//     return 'test';
// });



app.listen(PORT, () => {
    console.log('Server is running!');
});

module.exports = app;