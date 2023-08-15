const Pacientes = require('./Pacientes');
const Psicologos = require('./Psicologos');
const Atendimentos = require('./Atendimentos');

Pacientes.hasMany(Atendimentos,{
    foreignKey: "id_pacientes",
});

Atendimentos.belongsTo(Pacientes, {
    foreignKey: "id_pacientes",
});



module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos
}
