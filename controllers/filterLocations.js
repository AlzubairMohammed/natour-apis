const { QueryTypes } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("hultia_core", "root", "noPass123", {
  host: "localhost",
  dialect: "mysql",
});

exports.filterLocations = async (req, res) => {
  const startlat = 24.774265,
    startlng = 46.738586;
  const locations = await sequelize.query(
    `SELECT lat, lng, SQRT(
    POW(69.1 * (lat - ${startlat}), 2) +
    POW(69.1 * (${startlng} - lng) * COS(lat / 57.3), 2)) AS distance
FROM rents HAVING distance < 2500 ORDER BY distance;`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.status(200).json(locations);
};
