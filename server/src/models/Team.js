const { DataTypes } = require('sequelize');

// Define el modelo Team
module.exports = (sequelize) => {
  sequelize.define('Team', {
    id: {
      type: DataTypes.UUID, 
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{ timestamps: false});
};



// **📍 MODELO 2 | Teams**

// -  ID. \*
// -  Nombre. \*