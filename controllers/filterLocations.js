const { QueryTypes } = require("sequelize");
const sequelize = require("../config/env");

exports.filterLocations = async (req, res) => {
  console.log(req.body);
  const { lat, lng, distance } = req.body;
  if (!lat || !lng || !distance)
    return res.status(404).json("you must to fill all fields ..!");
  const locations = await sequelize.query(
    `SELECT * , SQRT(
    POW(69.1 * (lat - ${lat}), 2) +
    POW(69.1 * (${lng} - lng) * COS(lat / 57.3), 2)) AS distance
FROM rents HAVING distance < ${distance} ORDER BY distance;`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.status(200).json(locations);
};
