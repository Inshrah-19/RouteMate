const RouteStop = require("../models/RouteStop")
const Route = require("../models/Route")

// Get all stops for a specific route
exports.getRouteStops = async (req, res) => {
  try {
    const { routeId } = req.params

    const stops = await RouteStop.findAll({
      where: { routeId },
      order: [["stopSequence", "ASC"]],
      include: [{ model: Route }],
    })

    if (!stops || stops.length === 0) {
      return res.status(404).json({ message: "No stops found for this route" })
    }

    res.status(200).json(stops)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get all stops (optional)
exports.getAllStops = async (req, res) => {
  try {
    const stops = await RouteStop.findAll({
      order: [
        ["routeId", "ASC"],
        ["stopSequence", "ASC"],
      ],
      include: [{ model: Route }],
    })

    res.status(200).json(stops)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Add a new stop to a route
exports.addStop = async (req, res) => {
  try {
    const { routeId, stopName, stopSequence, estimatedArrivalTime } = req.body

    // Validate required fields
    if (!routeId || !stopName || !stopSequence) {
      return res.status(400).json({ message: "Missing required fields" })
    }

    const stop = await RouteStop.create({
      routeId,
      stopName,
      stopSequence,
      estimatedArrivalTime,
    })

    res.status(201).json({ message: "Stop added successfully", stop })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete a stop
exports.deleteStop = async (req, res) => {
  try {
    const { stopId } = req.params

    const stop = await RouteStop.findByPk(stopId)
    if (!stop) {
      return res.status(404).json({ message: "Stop not found" })
    }

    await stop.destroy()
    res.status(200).json({ message: "Stop deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
