const express = require("express")
const authController = require("../controllers/authController")
const { authMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/signup", authController.signup)
router.post("/login", authController.login)
router.get("/current-user", authMiddleware, authController.getCurrentUser)

module.exports = router
