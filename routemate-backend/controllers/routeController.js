const Route = require("../models/Route")
const Bus = require("../models/Bus")

// Get all routes
exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.findAll({
      include: [{ model: Bus }],
    })
    res.status(200).json(routes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Search routes by source and destination
exports.searchRoutes = async (req, res) => {
  try {
    const { source, destination } = req.query

    const routes = await Route.findAll({
      where: { source, destination },
      include: [{ model: Bus }],
    })

    res.status(200).json(routes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get route by ID
exports.getRouteById = async (req, res) => {
  try {
    const { routeId } = req.params
    const route = await Route.findByPk(routeId, {
      include: [{ model: Bus }],
    })

    if (!route) {
      return res.status(404).json({ message: "Route not found" })
    }

    res.status(200).json(route)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Add new route (Admin only)
exports.addRoute = async (req, res) => {
  try {
    const { routeName, source, destination, operatingHours } = req.body

    const newRoute = await Route.create({
      routeName,
      source,
      destination,
      operatingHours,
    })

    res.status(201).json({
      message: "Route added successfully",
      route: newRoute,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
