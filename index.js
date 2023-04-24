const express = require("express");
const cors = require('cors')
const morgan = require("morgan");
const route = require("./src/route");
const db = require("./src/config/db");
const methodOverride = require('method-override') //để override sang method khác trong form
const app = express();
const port = 3000;
app.use(cors())
app.use(morgan("combined"));
app.use(express.urlencoded());
app.use(methodOverride('_method'))
app.use(express.json())
// Cho phép lấy ảnh từ file img
app.use('/img', express.static('img'));
//connetc to db
db.connect();



route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
