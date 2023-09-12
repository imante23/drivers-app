const { DataTypes } = require('sequelize');

// Define el modelo Driver
module.exports = (sequelize) => {
  sequelize.define('Driver', {
    id: {
      type: DataTypes.UUID, 
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },{ timestamps: false});
};




// **📍 MODELO 1 | Drivers**

// -  ID (deben ser distintos a los que vienen de la API). \*
// -  Nombre. \*
// -  Apellido. \*
// -  Descripción. \*
// -  Imagen. \*
// -  Nacionalidad. \*
// -  Fecha de Nacimiento. \*

// <br />
