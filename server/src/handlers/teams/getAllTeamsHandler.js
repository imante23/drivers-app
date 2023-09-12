const getAllTeamsC = require('../../controllers/getAllTeamsC');

const getAllTeamsHandler = async (req, res) => {
  try {
    const allTeams = await getAllTeamsC();
    res.status(200).json(allTeams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get teams' });
  }
};

module.exports = getAllTeamsHandler;