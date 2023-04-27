const express = require("express");

const router = express.Router();
const billController = require("../app/controller/BillController");


router.get('/newBills', billController.getNewBills)
router.get('/deliveringBills', billController.getDeliveringBills)
router.get('/deliveredBills', billController.getDeliveredBills)
router.get('/', billController.getAllBills)


router.patch('/newBills/delivering/:id', billController.changToDelivering)
router.patch('/deliveringBills/delivered/:id', billController.changToDelivered)

router.delete('/deleteBill/:id', billController.deleteBill)

router.post("/create",  billController.create);







module.exports = router;