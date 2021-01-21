const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

const db = require('./models')
// app.get('/', (req, res) => {
//     res.json({data: "data"})
// });
const passportConfig = require("./config/passport");
passportConfig;

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!`);
});

module.exports = app;