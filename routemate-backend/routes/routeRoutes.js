const express = require("express")
const routeController = require("../controllers/routeController")
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/all", routeController.getAllRoutes)
router.get("/search", routeController.searchRoutes)
router.get("/:routeId", routeController.getRouteById)
router.post("/add", adminMiddleware, routeController.addRoute)

module.exports = router
