const express = require("express");

const router = express.Router();
const billController = require("../app/controller/BillController");


router.post("/create",  billController.create);








module.exports = router;