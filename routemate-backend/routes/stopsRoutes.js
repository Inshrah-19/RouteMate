const express = require("express")
const stopsController = require("../controllers/stopsController")

const router = express.Router()

// Get all stops for a specific route
router.get("/route/:routeId", stopsController.getRouteStops)

// Get all stops
router.get("/all", stopsController.getAllStops)

// Add a new stop (admin only)
router.post("/add", stopsController.addStop)

// Delete a stop (admin only)
router.delete("/:stopId", stopsController.deleteStop)

module.exports = router
