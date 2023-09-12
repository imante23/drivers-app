const getDriverByIdC = require('../../controllers/getDriverByIdC.js')

const getDriverByIdHandler = async (req, res) =>{
    const { id } = req.params;
  
    try {
      const driverById = await getDriverByIdC(id);
      res.status(200).json(driverById);
    } catch (error) {
      res.status(404).json({ error: 'Failed to get driver by ID' });
    }
}

module.exports = getDriverByIdHandler;

