const Bus = require("../models/Bus")
const Route = require("../models/Route")

// Get all buses
exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll({
      include: [{ model: Route }],
    })
    res.status(200).json(buses)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get buses by type (AC, Non-AC, Green)
exports.getBusesByType = async (req, res) => {
  try {
    const { busType } = req.params
    const buses = await Bus.findAll({
      where: { busType },
      include: [{ model: Route }],
    })
    res.status(200).json(buses)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get buses by route
exports.getBusesByRoute = async (req, res) => {
  try {
    const { routeId } = req.params
    const buses = await Bus.findAll({
      where: { routeId },
      include: [{ model: Route }],
    })
    res.status(200).json(buses)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Add new bus (Admin only)
exports.addBus = async (req, res) => {
  try {
    const { busNumber, busType, driverName, driverPhone, routeId, departureTime, arrivalTime, fare, totalSeats } =
      req.body

    // Check if route exists
    const route = await Route.findByPk(routeId)
    if (!route) {
      return res.status(404).json({ message: "Route not found" })
    }

    const newBus = await Bus.create({
      busNumber,
      busType,
      driverName,
      driverPhone,
      routeId,
      departureTime,
      arrivalTime,
      fare,
      totalSeats,
      availableSeats: totalSeats,
    })

    res.status(201).json({
      message: "Bus added successfully",
      bus: newBus,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
