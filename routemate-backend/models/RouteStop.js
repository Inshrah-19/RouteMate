const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")
const Route = require("./Route")

const RouteStop = sequelize.define(
  "RouteStop",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    routeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Route,
        key: "id",
      },
    },
    stopName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stopSequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estimatedArrivalTime: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: true,
  },
)

RouteStop.belongsTo(Route, { foreignKey: "routeId" })

module.exports = RouteStop
