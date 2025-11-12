const Feedback = require("../models/Feedback")
const User = require("../models/User")

// Submit feedback
exports.submitFeedback = async (req, res) => {
  try {
    const { email, message } = req.body
    const userId = req.user?.id || null

    const feedback = await Feedback.create({
      userId,
      email,
      message,
    })

    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get all feedback (Admin only)
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll({
      include: [{ model: User, attributes: ["email", "fullName"] }],
    })
    res.status(200).json(feedbacks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
