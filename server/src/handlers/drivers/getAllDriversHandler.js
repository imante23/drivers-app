const getAllDriversC = require('../../controllers/getAllDriversC.js')

const getAllDriversHandler = async (req, res) =>{
  try {
    const allDrivers = await getAllDriversC();
    res.status(200).json(allDrivers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get drivers' });
  }
}

module.exports = getAllDriversHandler;