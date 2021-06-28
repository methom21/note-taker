const express = require('express');
const path = require('path');
const html = require("./routes/HTMLroutes")
const api = require("./routes/APIroutes")
// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use("/", html)
app.use("/api", api)



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));