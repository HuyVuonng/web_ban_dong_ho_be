const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const route = require("./src/route");
const db = require("./src/config/db");
const app = express();
const port = 3000;
app.use(cors())
app.use(morgan("combined"));
//connetc to db
db.connect();

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
