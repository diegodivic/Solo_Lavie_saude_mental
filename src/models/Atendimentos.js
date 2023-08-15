const db = require('../database');
const { DataTypes } = require('sequelize');
const Pacientes = require('../models/Pacientes');
const Psicologos = require('../models/Psicologos');

const Atendimentos = db.define(
    "Atendimentos",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_psicologo: {
            type: DataTypes.INTEGER,
            references:{
                model: Psicologos,
                key: 'id'
            }
        },
        id_paciente: {
            type: DataTypes.INTEGER,
            references:{
                model: Pacientes,
                key: 'id'
            }
        },
        atendimento: {
            type: DataTypes.DATE,
        },
        obs: {
            type: DataTypes.STRING,
        },
},
{
    tableName: "atendimentos",
    timestamps: false,
    createdAt: false,
    updatedAt: false
}
);

module.exports = Atendimentos;

