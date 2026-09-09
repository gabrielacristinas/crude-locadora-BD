const express = require("express")
const router = express.Router()

const testController = require("../controllers/testControllers")

router.get("/", testController.testConnection)
router.get("/tables", testController.listTables)

module.exports = router