const { Atendimentos } = require('../models');
const atendimentoController = {

    async listarAtendimento(req, res){
        const listaAtendimento = await Atendimentos.findAll();

        if (!listaAtendimento) return res.status(200).json({});

        res.status(200).json(listaPsicologo);
    },

    async cadastrarAtendimento(req, res){
        const { paciente_id, atendimento, obs } =  req.body;

        const novoAtendimento = await Atendimentos.create({
            paciente_id,
            atendimento,
            obs,
        });

        res.status(201).json(novoPaciente);
    },


};





module.exports = atendimentoController;