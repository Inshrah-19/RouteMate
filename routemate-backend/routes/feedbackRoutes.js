const express = require("express")
const feedbackController = require("../controllers/feedbackController")
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/submit", feedbackController.submitFeedback)
router.get("/all", adminMiddleware, feedbackController.getAllFeedback)

module.exports = router
