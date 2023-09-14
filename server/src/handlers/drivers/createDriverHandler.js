
const createDriverC = require('../../controllers/createDriverC.js');

const createDriverHandler = async (req, res) => {
const { forename,surname,description,image,nationality,dob,teams } = req.body;
try {
    const arrayTeams = teams.split(',');
    const newDriver = await createDriverC(forename,surname,description,image,nationality,dob,arrayTeams)
    res.status(200).json(newDriver);
} catch (error) {
    res.status(400).json({ error: error.message });
}
}
module.exports = createDriverHandler;