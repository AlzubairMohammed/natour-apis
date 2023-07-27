const { QueryTypes } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("../config/env");

exports.filterLocations = async (req, res) => {
  console.log(req.body);
  const { lat, lng, distance } = req.body;
  const locations = await sequelize.query(
    `SELECT id , SQRT(
    POW(69.1 * (lat - ${lat}), 2) +
    POW(69.1 * (${lng} - lng) * COS(lat / 57.3), 2)) AS distance
FROM rents HAVING distance < ${distance} ORDER BY distance;`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.status(200).json(locations);
};
