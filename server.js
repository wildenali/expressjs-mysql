const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Models
const db = require("./app/models"); // ini sebenernya manggil file index, tpi sudah otomatis dia jadi tidak usah "./app/models/index.js"

const app = express();

let whiteList = [
  // 'http://localhost:8081',
  'http://localhost:3000',    // client react js
];

let cosrOption = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(cosrOption));

// parse request of content-type - application/json
app.use(bodyParser.json());

// parse request of content-type - application/x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
db.sequelize.sync();

// Simple route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Express MySQL"
  });
});

// set port, listen for request
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});