const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

// Signup
exports.signup = async (req, res) => {
  try {
    const { email, password, fullName, phone } = req.body

    // Check if user exists
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      fullName,
      phone,
      role: "user",
    })

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    })

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: { id: user.id, email: user.email, fullName: user.fullName, role: user.role },
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Find user
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    })

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email, fullName: user.fullName, role: user.role },
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get current user
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
