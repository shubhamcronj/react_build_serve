const express = require("express");
const cors = require("cors");
const path = require("path");
const compression = require('compression');

const app = express();
const port = process.env.PORT || 4000;

// gzip compression
app.use(compression());

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "/candidate_build")));
app.use('*',  (req, res)=> {
 res.sendFile(path.join(__dirname, './candidate_build', 'index.html'));
});
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
