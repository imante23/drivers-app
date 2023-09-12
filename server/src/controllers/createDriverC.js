

const { Driver, Team } = require('../db.js');


const createDriverC = async (forename,surname,description,image,nationality,dob, arrayTeams) => {
    const createdDriver = await Driver.findOne({
        where: {
          forename,
          surname,
        },
      });
    
      if (createdDriver) throw new Error('The pilot was created already');
    
    
    const newDriver = await Driver.create({
        forename,
        surname,
        description,
        image,
        nationality,
        dob
    })

    for (const teamName of arrayTeams) {
      const [team, created] = await Team.findOrCreate({
        where: { name: teamName },
      });
      await newDriver.addTeam(team);
    }

      return newDriver;
}

module.exports = createDriverC;

