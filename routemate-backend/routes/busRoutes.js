const express = require("express")
const busController = require("../controllers/busController")
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/all", busController.getAllBuses)
router.get("/type/:busType", busController.getBusesByType)
router.get("/route/:routeId", busController.getBusesByRoute)
router.post("/add", adminMiddleware, busController.addBus)

module.exports = router
