const db = require('../database');
const { DataTypes } = require('sequelize');

const Pacientes = db.define(
    "Pacientes",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        nascimento: {
            type: DataTypes.DATE,
        }
},
{
    tableName: "pacientes",
    timestamps: false,
    createdAt: false,
    updatedAt: false
}
);

module.exports = Pacientes;

