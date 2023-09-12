
const getDriverByNameC = require('../../controllers/getDriverByNameC.js');

const getDriverByNameHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const driversByName = await getDriverByNameC(name);

    if (driversByName.length > 0) {
      res.status(200).json(driversByName.slice(0, 15)); // Tomamos los primeros 15 conductores
    } else {
      res.status(404).json({ error: 'Driver not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get drivers by name' });
  }
};

module.exports = getDriverByNameHandler;
